import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ImageBackground,
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

const HERO_COVER_URL =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80';
const MOVIE_POSTER_URL =
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80';
const ALBUM_COVER_URL =
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80';
const AVATAR_URL =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80';

export default function ImageBackgroundScreen() {
  const { colors } = useAppTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  // Section 1: style vs imageStyle
  const [cornerStrategy, setCornerStrategy] = useState<
    'containerOnly' | 'imageStyle' | 'overflowHidden'
  >('imageStyle');

  // Section 2: Contrast Overlays
  const [overlayMode, setOverlayMode] = useState<
    'none' | 'darkTint' | 'blurOnly'
  >('darkTint');

  // Section 4: resizeMode
  const [bgResizeMode, setBgResizeMode] = useState<ImageResizeMode>('cover');

  // Section 5: Loading State
  const [isLoadingBg, setIsLoadingBg] = useState<boolean>(false);
  const [cacheBuster, setCacheBuster] = useState<number>(Date.now());

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="ImageBackground"
        subtitle="Background images, layering & style vs imageStyle"
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Card */}
        <View style={styles.heroCard}>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>Container Primitive</Text>
          </View>
          <Text style={styles.heroTitle}>What is &lt;ImageBackground&gt;?</Text>
          <Text style={styles.heroDescription}>
            In React Native, standard &lt;Image&gt; components cannot have child
            elements. &lt;ImageBackground&gt; solves this by wrapping an absolute
            Image underneath your child components.
          </Text>

          <View style={styles.architectureBox}>
            <Text style={styles.architectureText}>
              {`// Internal Architecture:\n`}
              {`<View style={style}>\n`}
              {`  <Image style={[StyleSheet.absoluteFill, imageStyle]} />\n`}
              {`  {children}\n`}
              {`</View>`}
            </Text>
          </View>
        </View>

        {/* Section 1: style vs imageStyle (The Corner Bleed Gotcha) */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>01</Text>
            </View>
            <Text style={styles.sectionTitle}>
              style vs. imageStyle (Corner Bleed)
            </Text>
            <Text style={styles.sectionSubtitle}>
              Setting borderRadius on &apos;style&apos; only rounds the outer View container.
              Unless imageStyle has borderRadius or style has overflow: &apos;hidden&apos;,
              the inner Image will bleed through the corners!
            </Text>
          </View>

          <Text style={styles.controlLabel}>Select Border Strategy</Text>
          <View style={styles.buttonRow}>
            {[
              { id: 'containerOnly', label: 'style only (Bleeds)' },
              { id: 'imageStyle', label: 'imageStyle (Best)' },
              { id: 'overflowHidden', label: 'overflow: hidden' },
            ].map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setCornerStrategy(item.id as any)}
                style={[
                  styles.pillButton,
                  cornerStrategy === item.id && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    cornerStrategy === item.id && styles.pillButtonTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.previewCanvas}>
            <ImageBackground
              source={{ uri: HERO_COVER_URL }}
              style={[
                styles.cornerBleedContainer,
                {
                  borderRadius: 24,
                  overflow:
                    cornerStrategy === 'overflowHidden' ? 'hidden' : 'visible',
                },
              ]}
              imageStyle={
                cornerStrategy === 'imageStyle' ? { borderRadius: 24 } : undefined
              }
              resizeMode="cover"
            >
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 13 }}>
                  {cornerStrategy === 'containerOnly'
                    ? '⚠️ Notice Square Corners Bleeding!'
                    : '✅ Clean Rounded Corners'}
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {cornerStrategy === 'containerOnly'
                ? `// ❌ Flawed: Inner image bleeds through!\n<ImageBackground\n  style={{ borderRadius: 24 }}\n/>`
                : cornerStrategy === 'imageStyle'
                ? `// ✅ Recommended: Direct imageStyle styling\n<ImageBackground\n  style={{ borderRadius: 24 }}\n  imageStyle={{ borderRadius: 24 }}\n/>`
                : `// ✅ Alternative: Clip via container overflow\n<ImageBackground\n  style={{ borderRadius: 24, overflow: 'hidden' }}\n/>`}
            </Text>
          </View>
        </View>

        {/* Section 2: Contrast & Text Legibility Overlays */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>02</Text>
            </View>
            <Text style={styles.sectionTitle}>Overlay Contrast &amp; Legibility</Text>
            <Text style={styles.sectionSubtitle}>
              Text placed directly on busy photos often fails accessibility contrast.
              Always pair background images with dark tints or Gaussian blurs.
            </Text>
          </View>

          <Text style={styles.controlLabel}>Select Overlay</Text>
          <View style={styles.buttonRow}>
            {[
              { id: 'none', label: 'No Overlay' },
              { id: 'darkTint', label: 'Dark Tint (55%)' },
              { id: 'blurOnly', label: 'blurRadius: 10' },
            ].map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setOverlayMode(item.id as any)}
                style={[
                  styles.pillButton,
                  overlayMode === item.id && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    overlayMode === item.id && styles.pillButtonTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.previewCanvas}>
            <ImageBackground
              source={{ uri: HERO_COVER_URL }}
              style={styles.overlayBackground}
              blurRadius={overlayMode === 'blurOnly' ? 10 : 0}
              resizeMode="cover"
            >
              {overlayMode === 'darkTint' && (
                <View style={styles.darkTintOverlay} />
              )}

              <Text style={styles.tintTextTitle}>Tropical Island Gateway</Text>
              <Text style={styles.tintTextSubtitle}>
                {overlayMode === 'none'
                  ? 'Hard to read on bright clouds without overlay'
                  : 'Crisp readability with proper contrast layering'}
              </Text>
            </ImageBackground>
          </View>
        </View>

        {/* Section 3: Real-World Mobile UI Patterns */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>03</Text>
            </View>
            <Text style={styles.sectionTitle}>Real-World Mobile UI Patterns</Text>
            <Text style={styles.sectionSubtitle}>
              Common patterns: Profile cover headers, streaming cards, and blurred
              audio players.
            </Text>
          </View>

          {/* Pattern A: Profile Cover Header */}
          <Text style={styles.controlLabel}>A. Profile Cover Header</Text>
          <ImageBackground
            source={{ uri: HERO_COVER_URL }}
            style={styles.profileBanner}
            imageStyle={{ borderRadius: 12 }}
            resizeMode="cover"
          >
            <View style={styles.profileGradientLayer} />
            <Image source={{ uri: AVATAR_URL }} style={styles.avatarOverlap} />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Sarah Connor</Text>
              <Text style={styles.profileHandle}>@sarah_c • Mobile Engineer</Text>
            </View>
          </ImageBackground>

          {/* Pattern B: Movie Streaming Card */}
          <Text style={styles.controlLabel}>B. Movie / Media Card</Text>
          <ImageBackground
            source={{ uri: MOVIE_POSTER_URL }}
            style={styles.movieCard}
            imageStyle={{ borderRadius: 14 }}
            resizeMode="cover"
          >
            <View style={styles.movieTopRow}>
              <View style={styles.movieBadge}>
                <Text style={styles.movieBadgeText}>FEATURED</Text>
              </View>
              <Text style={styles.movieRatingText}>★ 8.9 / 10</Text>
            </View>

            <View style={styles.movieBottomContent}>
              <Text style={styles.movieTitle}>Interstellar Odyssey</Text>
              <Text style={styles.movieGenre}>Sci-Fi • 2h 49m • 4K HDR</Text>
              <TouchableOpacity style={styles.watchButton}>
                <Text style={styles.watchButtonText}>▶ Watch Trailer</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* Pattern C: Blurred Music Player */}
          <Text style={styles.controlLabel}>C. Blurred Music Player</Text>
          <ImageBackground
            source={{ uri: ALBUM_COVER_URL }}
            style={styles.musicPlayerBackground}
            imageStyle={{ borderRadius: 12 }}
            blurRadius={16}
            resizeMode="cover"
          >
            <View style={styles.darkTintOverlay} />
            <Text style={styles.musicTrackTitle}>Midnight Reverie</Text>
            <Text style={styles.musicArtist}>Acoustic Dreams Ensemble</Text>
            <View style={styles.musicControlsRow}>
              <Text style={{ color: '#FFFFFF', fontSize: 18 }}>⏮</Text>
              <View style={styles.musicPlayBtn}>
                <Text style={{ color: '#FFFFFF', fontSize: 16 }}>▶</Text>
              </View>
              <Text style={{ color: '#FFFFFF', fontSize: 18 }}>⏭</Text>
            </View>
          </ImageBackground>
        </View>

        {/* Section 4: resizeMode in ImageBackground */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>04</Text>
            </View>
            <Text style={styles.sectionTitle}>
              resizeMode in ImageBackground
            </Text>
            <Text style={styles.sectionSubtitle}>
              The resizeMode prop controls how the underlying Image scales while
              your foreground children stay positioned via Flexbox.
            </Text>
          </View>

          <Text style={styles.controlLabel}>Select resizeMode</Text>
          <View style={styles.buttonRow}>
            {(['cover', 'contain', 'stretch', 'center'] as const).map(mode => (
              <TouchableOpacity
                key={mode}
                onPress={() => setBgResizeMode(mode)}
                style={[
                  styles.pillButton,
                  bgResizeMode === mode && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    bgResizeMode === mode && styles.pillButtonTextActive,
                  ]}
                >
                  {mode}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.previewCanvas}>
            <ImageBackground
              source={{ uri: HERO_COVER_URL }}
              style={{
                width: '100%',
                height: 150,
                borderRadius: 12,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
              }}
              resizeMode={bgResizeMode}
            >
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.65)',
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: '#FFFFFF', fontWeight: '700' }}>
                  resizeMode=&quot;{bgResizeMode}&quot;
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        {/* Section 5: Loading State & Lifecycle */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>05</Text>
            </View>
            <Text style={styles.sectionTitle}>
              Background Loading State &amp; Lifecycle
            </Text>
            <Text style={styles.sectionSubtitle}>
              ImageBackground supports onLoadStart and onLoadEnd, allowing you to
              display placeholder skeletons or spinners while the background downloads.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setIsLoadingBg(true);
              setCacheBuster(Date.now());
            }}
            style={[
              styles.pillButton,
              { alignSelf: 'flex-start', marginBottom: 10 },
            ]}
          >
            <Text style={styles.pillButtonText}>🔄 Reload Background Image</Text>
          </TouchableOpacity>

          <View style={styles.previewCanvas}>
            <ImageBackground
              key={cacheBuster}
              source={{ uri: `${HERO_COVER_URL}&t=${cacheBuster}` }}
              style={{
                width: '100%',
                height: 130,
                borderRadius: 12,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onLoadStart={() => setIsLoadingBg(true)}
              onLoadEnd={() => setIsLoadingBg(false)}
            >
              {isLoadingBg ? (
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    padding: 12,
                    borderRadius: 8,
                    alignItems: 'center',
                  }}
                >
                  <ActivityIndicator color="#FFFFFF" />
                  <Text style={{ color: '#FFFFFF', fontSize: 11, marginTop: 4 }}>
                    Loading Cover Photo...
                  </Text>
                </View>
              ) : (
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontWeight: '800',
                    textShadowColor: 'rgba(0,0,0,0.8)',
                    textShadowRadius: 6,
                  }}
                >
                  Background Loaded Successfully
                </Text>
              )}
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
