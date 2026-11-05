import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  ImageResizeMode,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getStyles from './styles';
import { useAppTheme } from '../../hooks';
import { Header } from '../../components';

const SAMPLE_IMAGE_URL =
  'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=80';
const AVATAR_URL =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80';
const BROKEN_URL = 'https://invalid-domain-404-test.com/nonexistent_image.png';

// Lightweight 1x1 blue PNG Base64 Data URI
const BASE64_SAMPLE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbhyQAAAABJRU5ErkJggg==';

export default function ImageScreen() {
  const { colors } = useAppTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  // Section 1: resizeMode Controls
  const [resizeMode, setResizeMode] = useState<ImageResizeMode>('cover');

  // Section 2: Sources Matrix
  const [selectedSourceType, setSelectedSourceType] = useState<
    'remote' | 'base64' | 'headers'
  >('remote');

  // Section 3: Lifecycle Events & Loader
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);
  const [lastLifecycleEvent, setLastLifecycleEvent] = useState<string>(
    'Lifecycle idle. Tap "Reload Image" to test.'
  );
  const [cacheBuster, setCacheBuster] = useState<number>(Date.now());

  // Section 4: Visual Effects
  const [blurRadius, setBlurRadius] = useState<number>(0);
  const [tintColor, setTintColor] = useState<string | undefined>(undefined);
  const [aspectRatio, setAspectRatio] = useState<number>(16 / 9);

  // Section 6: Image.getSize & Image.prefetch
  const [sizeMetrics, setSizeMetrics] = useState<string>(
    'Tap below to inspect remote image dimensions'
  );
  const [prefetchStatus, setPrefetchStatus] = useState<string>(
    'Tap below to prefetch image into cache'
  );

  // Section 7: Error Fallback
  const [hasError, setHasError] = useState<boolean>(false);

  const handleInspectSize = () => {
    setSizeMetrics('Querying dimensions via Image.getSize()...');
    Image.getSize(
      SAMPLE_IMAGE_URL,
      (w, h) => {
        const ratio = (w / h).toFixed(2);
        setSizeMetrics(`Success: ${w}px × ${h}px (Aspect Ratio: ${ratio}:1)`);
      },
      (error: any) => {
        setSizeMetrics(`Failed to get size: ${error?.message || 'Error'}`);
      }
    );
  };

  const handlePrefetch = async () => {
    try {
      setPrefetchStatus('Prefetching into disk/memory cache...');
      const success = await Image.prefetch(AVATAR_URL);
      setPrefetchStatus(
        success
          ? 'Prefetched successfully! Image cached for instant display.'
          : 'Prefetch returned false.'
      );
    } catch (err: any) {
      setPrefetchStatus(`Prefetch failed: ${err?.message || 'Unknown error'}`);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="Image Component"
        subtitle="Sources, resizeMode, caching & events"
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Card: What is Image? */}
        <View style={styles.heroCard}>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>Media Primitive</Text>
          </View>
          <Text style={styles.heroTitle}>What is &lt;Image&gt;?</Text>
          <Text style={styles.heroDescription}>
            The &lt;Image&gt; component displays local static assets, network
            images, and base64 data URIs. It handles downsampling, caching, and
            GPU rendering.
          </Text>

          {/* Golden Rule Alert */}
          <View style={styles.ruleAlert}>
            <Text style={styles.ruleAlertText}>
              ⚠️ Golden Rule: Remote network images MUST have explicit width and
              height defined in styles (or flex: 1). Without explicit
              dimensions, remote images evaluate to 0×0 and won&apos;t be visible!
            </Text>
          </View>

          <View style={styles.platformRow}>
            <View style={styles.platformChip}>
              <Text style={styles.platformChipText}>iOS: UIImageView</Text>
            </View>
            <View style={styles.platformChip}>
              <Text style={styles.platformChipText}>Android: ImageView (Fresco)</Text>
            </View>
            <View style={styles.platformChip}>
              <Text style={styles.platformChipText}>Web: &lt;img&gt;</Text>
            </View>
          </View>
        </View>

        {/* Section 1: resizeMode Comparison Playground */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>01</Text>
            </View>
            <Text style={styles.sectionTitle}>resizeMode Playground</Text>
            <Text style={styles.sectionSubtitle}>
              resizeMode determines how the bitmap scales to fill its container
              boundaries (cover, contain, stretch, center, repeat).
            </Text>
          </View>

          {/* resizeMode controls */}
          <Text style={styles.controlLabel}>Select resizeMode</Text>
          <View style={styles.buttonRow}>
            {(['cover', 'contain', 'stretch', 'center', 'repeat'] as const).map(
              mode => (
                <TouchableOpacity
                  key={mode}
                  onPress={() => setResizeMode(mode)}
                  style={[
                    styles.pillButton,
                    resizeMode === mode && styles.pillButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.pillButtonText,
                      resizeMode === mode && styles.pillButtonTextActive,
                    ]}
                  >
                    {mode}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>

          {/* Live Resize Preview */}
          <View style={styles.resizeTargetContainer}>
            <Image
              source={{ uri: SAMPLE_IMAGE_URL }}
              resizeMode={resizeMode}
              style={styles.resizeTargetImage}
            />
          </View>

          {/* Code snippet */}
          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`<Image\n`}
              {`  source={{ uri: 'https://...' }}\n`}
              {`  resizeMode='${resizeMode}'\n`}
              {`  style={{ width: '100%', height: 160 }}\n`}
              {`/>`}
            </Text>
          </View>
        </View>

        {/* Section 2: Sources Matrix */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>02</Text>
            </View>
            <Text style={styles.sectionTitle}>Image Sources Matrix</Text>
            <Text style={styles.sectionSubtitle}>
              Images support remote URLs, local static bundles via require(),
              base64 data URIs, and custom HTTP headers.
            </Text>
          </View>

          <Text style={styles.controlLabel}>Select Source Type</Text>
          <View style={styles.buttonRow}>
            {(['remote', 'base64', 'headers'] as const).map(type => (
              <TouchableOpacity
                key={type}
                onPress={() => setSelectedSourceType(type)}
                style={[
                  styles.pillButton,
                  selectedSourceType === type && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    selectedSourceType === type && styles.pillButtonTextActive,
                  ]}
                >
                  {type === 'remote'
                    ? 'Remote URL'
                    : type === 'base64'
                    ? 'Base64 URI'
                    : 'Custom Headers'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.previewCanvas}>
            {selectedSourceType === 'remote' && (
              <Image
                source={{ uri: AVATAR_URL }}
                style={{ width: 100, height: 100, borderRadius: 12 }}
                resizeMode="cover"
              />
            )}
            {selectedSourceType === 'base64' && (
              <Image
                source={{ uri: BASE64_SAMPLE }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 12,
                  backgroundColor: '#6366F1',
                }}
                resizeMode="contain"
              />
            )}
            {selectedSourceType === 'headers' && (
              <Image
                source={{
                  uri: SAMPLE_IMAGE_URL,
                  headers: {
                    Authorization: 'Bearer sample_jwt_token',
                    'X-Client-App': 'Practice_Cli',
                  },
                }}
                style={{ width: 140, height: 90, borderRadius: 12 }}
                resizeMode="cover"
              />
            )}
          </View>

          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {selectedSourceType === 'remote'
                ? `// Remote Network Image:\nsource={{ uri: 'https://images.unsplash.com/...' }}`
                : selectedSourceType === 'base64'
                ? `// Inline Base64 Data URI:\nsource={{ uri: 'data:image/png;base64,...' }}`
                : `// Authenticated Private Image with Headers:\nsource={{\n  uri: 'https://api.mycdn.com/asset.jpg',\n  headers: { Authorization: 'Bearer token' }\n}}`}
            </Text>
          </View>
        </View>

        {/* Section 3: Lifecycle Events & Loading Spinner */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>03</Text>
            </View>
            <Text style={styles.sectionTitle}>Lifecycle Events &amp; Loading States</Text>
            <Text style={styles.sectionSubtitle}>
              Track onLoadStart, onProgress, onLoad, and onLoadEnd to display
              native loading spinners while downloading remote assets.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setIsLoadingImage(true);
              setCacheBuster(Date.now());
              setLastLifecycleEvent('Loading started (onLoadStart)...');
            }}
            style={[
              styles.pillButton,
              { alignSelf: 'flex-start', marginBottom: 10 },
            ]}
          >
            <Text style={styles.pillButtonText}>🔄 Reload Fresh Image</Text>
          </TouchableOpacity>

          <View style={[styles.resizeTargetContainer, { height: 140 }]}>
            <Image
              key={cacheBuster}
              source={{ uri: `${SAMPLE_IMAGE_URL}&t=${cacheBuster}` }}
              style={styles.resizeTargetImage}
              resizeMode="cover"
              onLoadStart={() => {
                setIsLoadingImage(true);
                setLastLifecycleEvent('Event: onLoadStart (fetch initiated)');
              }}
              onLoad={() => {
                setLastLifecycleEvent('Event: onLoad (bitmap decoded)');
              }}
              onLoadEnd={() => {
                setIsLoadingImage(false);
                setLastLifecycleEvent('Event: onLoadEnd (complete)');
              }}
              onError={e => {
                setIsLoadingImage(false);
                setLastLifecycleEvent(
                  `Event: onError (${e.nativeEvent.error || 'Failed'})`
                );
              }}
            />

            {isLoadingImage && (
              <View style={styles.loaderOverlay}>
                <ActivityIndicator size="large" color="#FFFFFF" />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 12,
                    marginTop: 6,
                    fontWeight: '600',
                  }}
                >
                  Downloading Bitmap...
                </Text>
              </View>
            )}
          </View>

          <View style={styles.eventLogBox}>
            <Text style={styles.eventLogText}>{lastLifecycleEvent}</Text>
          </View>
        </View>

        {/* Section 4: Visual Effects (blurRadius, tintColor & aspectRatio) */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>04</Text>
            </View>
            <Text style={styles.sectionTitle}>Visual Effects &amp; Aspect Ratio</Text>
            <Text style={styles.sectionSubtitle}>
              Apply Gaussian blurRadius, tintColor overlays (useful for monochrome
              icons), and responsive aspect ratios.
            </Text>
          </View>

          {/* blurRadius controls */}
          <Text style={styles.controlLabel}>blurRadius</Text>
          <View style={styles.buttonRow}>
            {[0, 6, 15].map(b => (
              <TouchableOpacity
                key={b}
                onPress={() => setBlurRadius(b)}
                style={[
                  styles.pillButton,
                  blurRadius === b && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    blurRadius === b && styles.pillButtonTextActive,
                  ]}
                >
                  {b === 0 ? 'No Blur' : `Blur: ${b}px`}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* tintColor controls */}
          <Text style={styles.controlLabel}>tintColor Overlay</Text>
          <View style={styles.buttonRow}>
            {[
              { label: 'None', val: undefined },
              { label: 'Indigo', val: colors.primary },
              { label: 'Sunset Pink', val: '#EC4899' },
            ].map(item => (
              <TouchableOpacity
                key={item.label}
                onPress={() => setTintColor(item.val)}
                style={[
                  styles.pillButton,
                  tintColor === item.val && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    tintColor === item.val && styles.pillButtonTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* aspectRatio controls */}
          <Text style={styles.controlLabel}>aspectRatio</Text>
          <View style={styles.buttonRow}>
            {[
              { label: '16:9 Widescreen', val: 16 / 9 },
              { label: '4:3 Standard', val: 4 / 3 },
              { label: '1:1 Square', val: 1 },
            ].map(r => (
              <TouchableOpacity
                key={r.label}
                onPress={() => setAspectRatio(r.val)}
                style={[
                  styles.pillButton,
                  aspectRatio === r.val && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    aspectRatio === r.val && styles.pillButtonTextActive,
                  ]}
                >
                  {r.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.previewCanvas}>
            <Image
              source={{ uri: SAMPLE_IMAGE_URL }}
              blurRadius={blurRadius}
              style={{
                width: '100%',
                aspectRatio,
                borderRadius: 12,
                tintColor,
              }}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Section 5: Shapes & Circular Avatars */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>05</Text>
            </View>
            <Text style={styles.sectionTitle}>Shapes &amp; Circular Avatars</Text>
            <Text style={styles.sectionSubtitle}>
              Using borderRadius, images can be clipped into perfect circular
              avatars, rounded card headers, or pill banners.
            </Text>
          </View>

          <View style={styles.shapesRow}>
            {/* Circular Avatar */}
            <View style={styles.shapeItem}>
              <Image
                source={{ uri: AVATAR_URL }}
                style={styles.avatarImage}
                resizeMode="cover"
              />
              <Text style={styles.shapeLabel}>Circle (r = w/2)</Text>
            </View>

            {/* Rounded Card */}
            <View style={styles.shapeItem}>
              <Image
                source={{ uri: SAMPLE_IMAGE_URL }}
                style={styles.roundedCardImage}
                resizeMode="cover"
              />
              <Text style={styles.shapeLabel}>Card (r = 12)</Text>
            </View>

            {/* Pill Banner */}
            <View style={styles.shapeItem}>
              <Image
                source={{ uri: SAMPLE_IMAGE_URL }}
                style={styles.pillImage}
                resizeMode="cover"
              />
              <Text style={styles.shapeLabel}>Capsule Pill</Text>
            </View>
          </View>
        </View>

        {/* Section 6: Image.getSize & Image.prefetch Static Methods */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>06</Text>
            </View>
            <Text style={styles.sectionTitle}>
              Static Methods: getSize() &amp; prefetch()
            </Text>
            <Text style={styles.sectionSubtitle}>
              Image.getSize() queries remote image resolution before rendering,
              while Image.prefetch() caches images in background memory.
            </Text>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={handleInspectSize}
              style={[styles.pillButton, styles.pillButtonActive]}
            >
              <Text style={[styles.pillButtonText, styles.pillButtonTextActive]}>
                📐 Run Image.getSize()
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handlePrefetch}
              style={[styles.pillButton, styles.pillButtonActive]}
            >
              <Text style={[styles.pillButtonText, styles.pillButtonTextActive]}>
                ⚡ Run Image.prefetch()
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.metricBadge}>
            <Text style={styles.metricText}>{sizeMetrics}</Text>
          </View>

          <View style={[styles.metricBadge, { marginTop: 6 }]}>
            <Text style={styles.metricText}>{prefetchStatus}</Text>
          </View>
        </View>

        {/* Section 7: Graceful Error Handling & Fallback UI */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>07</Text>
            </View>
            <Text style={styles.sectionTitle}>Error Handling &amp; Fallback UI</Text>
            <Text style={styles.sectionSubtitle}>
              When network requests fail or images 404, catch onError to swap
              broken images with user-friendly fallback placeholder views.
            </Text>
          </View>

          {hasError ? (
            <View style={styles.fallbackCard}>
              <Text style={{ fontSize: 24 }}>🖼️❌</Text>
              <Text style={styles.fallbackTitle}>Failed to Load Image</Text>
              <Text style={styles.fallbackSubtitle}>
                The remote asset returned a 404 or network was lost.
              </Text>
              <TouchableOpacity
                onPress={() => setHasError(false)}
                style={[styles.pillButton, { marginTop: 8 }]}
              >
                <Text style={styles.pillButtonText}>Retry Loading</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={{ uri: BROKEN_URL }}
                style={{ width: '100%', height: 100, borderRadius: 10 }}
                onError={() => setHasError(true)}
              />
            </View>
          )}

          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`// Fallback Pattern:\n`}
              {`{hasError ? (\n`}
              {`  <FallbackPlaceholder />\n`}
              {`) : (\n`}
              {`  <Image\n`}
              {`    source={{ uri: remoteUrl }}\n`}
              {`    onError={() => setHasError(true)}\n`}
              {`  />\n`}
              {`)}`}
            </Text>
          </View>
        </View>

        {/* Section 8: Memory & Performance Guidelines */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>08</Text>
            </View>
            <Text style={styles.sectionTitle}>Memory &amp; Performance Rules</Text>
            <Text style={styles.sectionSubtitle}>
              Images are the #1 cause of Out-of-Memory (OOM) app crashes on mobile
              devices due to decoded uncompressed bitmaps.
            </Text>
          </View>

          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`Bitmap RAM = Width × Height × 4 Bytes (RGBA_8888)\n\n`}
              {`• A 4000×3000 camera photo takes ~48 MB RAM uncompressed!\n`}
              {`• Always resize/downsample images on server or CDN before serving.\n`}
              {`• For heavy feed lists, use fast image caching libraries.`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
