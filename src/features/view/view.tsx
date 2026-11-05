import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutChangeEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getStyles from './styles';
import { useAppTheme } from '../../hooks';
import { Header } from '../../components';

export default function ViewScreen() {
  const { colors } = useAppTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  // Section 1: Flexbox Controls
  const [flexDirection, setFlexDirection] = useState<
    'column' | 'row' | 'column-reverse' | 'row-reverse'
  >('row');
  const [justifyContent, setJustifyContent] = useState<
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >('space-between');
  const [alignItems, setAlignItems] = useState<
    'stretch' | 'flex-start' | 'center' | 'flex-end'
  >('center');
  const [gap, setGap] = useState<number>(8);

  // Section 2: Box Model Controls
  const [paddingVal, setPaddingVal] = useState<number>(12);
  const [marginVal, setMarginVal] = useState<number>(8);

  // Section 6: onLayout Live Measurement
  const [layoutMetrics, setLayoutMetrics] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [isWideLayout, setIsWideLayout] = useState(false);

  // Section 7: pointerEvents Demo
  const [pointerEventMode, setPointerEventMode] = useState<
    'auto' | 'none' | 'box-none' | 'box-only'
  >('none');
  const [tapMessage, setTapMessage] = useState<string>(
    'Tap the button below to test touch reception'
  );

  // Section 8: Transforms
  const [transformScale, setTransformScale] = useState<number>(1);
  const [transformRotation, setTransformRotation] = useState<'0deg' | '15deg' | '45deg' | '90deg'>('0deg');

  const handleLayout = (event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setLayoutMetrics({
      x: Math.round(x),
      y: Math.round(y),
      width: Math.round(width),
      height: Math.round(height),
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="View Component" subtitle="The core layout & visual container" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Card: What is View? */}
        <View style={styles.heroCard}>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>Foundation Element</Text>
          </View>
          <Text style={styles.heroTitle}>What is &lt;View&gt;?</Text>
          <Text style={styles.heroDescription}>
            The &lt;View&gt; component is the fundamental building block for UI in
            React Native. It serves as a container supporting Flexbox layout, styling,
            touch responder events, accessibility, and visual clipping.
          </Text>

          <View style={styles.platformRow}>
            <View style={styles.platformChip}>
              <Text style={styles.platformChipText}>iOS: UIView</Text>
            </View>
            <View style={styles.platformChip}>
              <Text style={styles.platformChipText}>Android: ViewGroup</Text>
            </View>
            <View style={styles.platformChip}>
              <Text style={styles.platformChipText}>Web: &lt;div&gt;</Text>
            </View>
          </View>
        </View>

        {/* Section 1: Flexbox Layout Engine */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>01</Text>
            </View>
            <Text style={styles.sectionTitle}>Flexbox Layout Engine (Yoga)</Text>
            <Text style={styles.sectionSubtitle}>
              In React Native, layout defaults to flexDirection: &apos;column&apos; (unlike Web
              which defaults to &apos;row&apos;). Views use the Yoga C++ flexbox engine.
            </Text>
          </View>

          {/* flexDirection controls */}
          <Text style={styles.controlLabel}>flexDirection</Text>
          <View style={styles.buttonRow}>
            {(['row', 'column', 'row-reverse', 'column-reverse'] as const).map(
              dir => (
                <TouchableOpacity
                  key={dir}
                  onPress={() => setFlexDirection(dir)}
                  style={[
                    styles.pillButton,
                    flexDirection === dir && styles.pillButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.pillButtonText,
                      flexDirection === dir && styles.pillButtonTextActive,
                    ]}
                  >
                    {dir}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>

          {/* justifyContent controls */}
          <Text style={styles.controlLabel}>justifyContent (Main Axis)</Text>
          <View style={styles.buttonRow}>
            {(['flex-start', 'center', 'flex-end', 'space-between', 'space-around'] as const).map(
              j => (
                <TouchableOpacity
                  key={j}
                  onPress={() => setJustifyContent(j)}
                  style={[
                    styles.pillButton,
                    justifyContent === j && styles.pillButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.pillButtonText,
                      justifyContent === j && styles.pillButtonTextActive,
                    ]}
                  >
                    {j}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>

          {/* alignItems controls */}
          <Text style={styles.controlLabel}>alignItems (Cross Axis)</Text>
          <View style={styles.buttonRow}>
            {(['center', 'flex-start', 'flex-end', 'stretch'] as const).map(
              a => (
                <TouchableOpacity
                  key={a}
                  onPress={() => setAlignItems(a)}
                  style={[
                    styles.pillButton,
                    alignItems === a && styles.pillButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.pillButtonText,
                      alignItems === a && styles.pillButtonTextActive,
                    ]}
                  >
                    {a}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>

          {/* gap controls */}
          <Text style={styles.controlLabel}>gap spacing</Text>
          <View style={styles.buttonRow}>
            {[4, 8, 16, 24].map(g => (
              <TouchableOpacity
                key={g}
                onPress={() => setGap(g)}
                style={[styles.pillButton, gap === g && styles.pillButtonActive]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    gap === g && styles.pillButtonTextActive,
                  ]}
                >
                  {g}px
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Live Flexbox Canvas */}
          <View
            style={[
              styles.previewCanvas,
              {
                flexDirection,
                justifyContent,
                alignItems,
                gap,
                minHeight: 130,
              },
            ]}
          >
            <View style={[styles.boxItem, styles.boxItem1]}>
              <Text style={styles.boxItemText}>1</Text>
            </View>
            <View style={[styles.boxItem, styles.boxItem2]}>
              <Text style={styles.boxItemText}>2</Text>
            </View>
            <View style={[styles.boxItem, styles.boxItem3]}>
              <Text style={styles.boxItemText}>3</Text>
            </View>
          </View>

          {/* Code snippet */}
          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`<View style={{`}
              {`\n  flexDirection: '${flexDirection}',`}
              {`\n  justifyContent: '${justifyContent}',`}
              {`\n  alignItems: '${alignItems}',`}
              {`\n  gap: ${gap}`}
              {`\n}}>`}
            </Text>
          </View>
        </View>

        {/* Section 2: The Box Model */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>02</Text>
            </View>
            <Text style={styles.sectionTitle}>The Box Model (Margin &amp; Padding)</Text>
            <Text style={styles.sectionSubtitle}>
              Views follow standard CSS Box Model principles: Margin wraps the
              outside, Border strokes the perimeter, and Padding pads the inside.
            </Text>
          </View>

          <Text style={styles.controlLabel}>Adjust Padding &amp; Margin</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => setPaddingVal(p => Math.max(4, p - 4))}
              style={styles.pillButton}
            >
              <Text style={styles.pillButtonText}>- Padding ({paddingVal}px)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPaddingVal(p => Math.min(32, p + 4))}
              style={styles.pillButton}
            >
              <Text style={styles.pillButtonText}>+ Padding ({paddingVal}px)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMarginVal(m => (m === 8 ? 16 : 8))}
              style={[styles.pillButton, marginVal === 16 && styles.pillButtonActive]}
            >
              <Text
                style={[
                  styles.pillButtonText,
                  marginVal === 16 && styles.pillButtonTextActive,
                ]}
              >
                Margin: {marginVal}px
              </Text>
            </TouchableOpacity>
          </View>

          {/* Box Model Visual Graphic */}
          <View style={[styles.marginBox, { padding: marginVal }]}>
            <Text style={styles.marginLabel}>Margin ({marginVal}px)</Text>

            <View style={styles.borderBox}>
              <Text style={styles.borderLabel}>Border (3px solid)</Text>

              <View style={[styles.paddingBox, { padding: paddingVal }]}>
                <Text style={styles.paddingLabel}>Padding ({paddingVal}px)</Text>

                <View style={styles.contentBox}>
                  <Text style={styles.contentLabel}>Inner Content Area</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Section 3: Positioning (Relative vs Absolute) */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>03</Text>
            </View>
            <Text style={styles.sectionTitle}>Positioning (Relative vs Absolute)</Text>
            <Text style={styles.sectionSubtitle}>
              Views are position: &apos;relative&apos; by default. An absolute child is removed
              from the flex flow and positions relative to its nearest positioned parent.
            </Text>
          </View>

          <View style={styles.relativeParent}>
            {/* Absolute badge pinned to top-right */}
            <View style={styles.badgeAbsolute}>
              <Text style={styles.badgeText}>HOT</Text>
            </View>

            <Text style={{ fontWeight: '700', color: colors.text, fontSize: 15 }}>
              Parent &lt;View style=&#123;&#123; position: &apos;relative&apos; &#125;&#125;&gt;
            </Text>
            <Text style={{ color: colors.textSecondary, fontSize: 13, marginTop: 4 }}>
              Child badge is positioned: &#123; position: &apos;absolute&apos;, top: -8, right: -8 &#125;
            </Text>

            {/* Corner floating chip */}
            <View style={styles.cornerChip}>
              <Text style={styles.cornerChipText}>zIndex: 10</Text>
            </View>
          </View>
        </View>

        {/* Section 4: Borders, Rounded Corners & Shapes */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>04</Text>
            </View>
            <Text style={styles.sectionTitle}>Borders, Radii &amp; Shapes</Text>
            <Text style={styles.sectionSubtitle}>
              With borderWidth and borderRadius, a &lt;View&gt; can create circles, pills,
              dashed dropzones, and cards without images.
            </Text>
          </View>

          <View style={styles.shapesRow}>
            {/* Circle: width = height and borderRadius = width / 2 */}
            <View style={styles.circleShape}>
              <Text style={styles.shapeText}>Circle</Text>
            </View>

            {/* Card: standard rounded corners */}
            <View style={styles.cardShape}>
              <Text style={styles.shapeText}>Card</Text>
            </View>

            {/* Pill: large borderRadius */}
            <View style={styles.pillShape}>
              <Text style={styles.shapeText}>Capsule / Pill</Text>
            </View>

            {/* Dashed Border */}
            <View style={styles.dashedShape}>
              <Text style={[styles.shapeText, { color: colors.textSecondary }]}>
                Dashed
              </Text>
            </View>
          </View>

          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`// Perfect Circle formula:\n`}
              {`style={{ width: 60, height: 60, borderRadius: 30 }}`}
            </Text>
          </View>
        </View>

        {/* Section 5: Shadows & Depth (iOS vs Android) */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>05</Text>
            </View>
            <Text style={styles.sectionTitle}>Shadows &amp; Elevation</Text>
            <Text style={styles.sectionSubtitle}>
              iOS uses shadowColor, shadowOffset, shadowOpacity &amp; shadowRadius.
              Android uses the native elevation property.
            </Text>
          </View>

          <View style={styles.shadowRow}>
            <View style={[styles.shadowCard, styles.shadowLow]}>
              <Text style={styles.shadowTextTitle}>Low</Text>
              <Text style={styles.shadowTextSubtitle}>elevation: 2</Text>
            </View>

            <View style={[styles.shadowCard, styles.shadowMedium]}>
              <Text style={styles.shadowTextTitle}>Medium</Text>
              <Text style={styles.shadowTextSubtitle}>elevation: 6</Text>
            </View>

            <View style={[styles.shadowCard, styles.shadowHigh]}>
              <Text style={styles.shadowTextTitle}>High</Text>
              <Text style={styles.shadowTextSubtitle}>elevation: 12</Text>
            </View>
          </View>
        </View>

        {/* Section 6: onLayout Event & Dynamic Measurements */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>06</Text>
            </View>
            <Text style={styles.sectionTitle}>onLayout Measurement Event</Text>
            <Text style={styles.sectionSubtitle}>
              The onLayout callback triggers after rendering when dimensions and screen
              offsets are determined by the native layout system.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setIsWideLayout(w => !w)}
            style={[styles.pillButton, { alignSelf: 'flex-start', marginBottom: 10 }]}
          >
            <Text style={styles.pillButtonText}>
              Toggle Container Width: {isWideLayout ? '100%' : '75%'}
            </Text>
          </TouchableOpacity>

          <View
            onLayout={handleLayout}
            style={[
              styles.previewCanvas,
              {
                width: isWideLayout ? '100%' : '75%',
                backgroundColor: 'rgba(99, 102, 241, 0.08)',
                borderColor: colors.primary,
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 80,
              },
            ]}
          >
            <Text style={{ color: colors.primary, fontWeight: '700' }}>
              Measured Target View
            </Text>
          </View>

          <View style={styles.layoutMetricBadge}>
            <Text style={styles.layoutMetricText}>
              x: {layoutMetrics.x}px | y: {layoutMetrics.y}px | width: {layoutMetrics.width}px | height: {layoutMetrics.height}px
            </Text>
          </View>
        </View>

        {/* Section 7: pointerEvents Touch Responder */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>07</Text>
            </View>
            <Text style={styles.sectionTitle}>pointerEvents &amp; Touch Control</Text>
            <Text style={styles.sectionSubtitle}>
              Controls whether a View intercepts touch events or lets them pass
              through to underlying elements (&apos;auto&apos; | &apos;none&apos; | &apos;box-none&apos; | &apos;box-only&apos;).
            </Text>
          </View>

          <Text style={styles.controlLabel}>pointerEvents mode</Text>
          <View style={styles.buttonRow}>
            {(['none', 'auto', 'box-none', 'box-only'] as const).map(mode => (
              <TouchableOpacity
                key={mode}
                onPress={() => setPointerEventMode(mode)}
                style={[
                  styles.pillButton,
                  pointerEventMode === mode && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    pointerEventMode === mode && styles.pillButtonTextActive,
                  ]}
                >
                  {mode}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ position: 'relative', marginVertical: 6 }}>
            {/* Target Button to tap */}
            <TouchableOpacity
              onPress={() =>
                setTapMessage(`Success! Underlying button received the tap.`)
              }
              style={styles.tapTargetButton}
              activeOpacity={0.8}
            >
              <Text style={styles.tapTargetButtonText}>Underlying Action Button</Text>
            </TouchableOpacity>

            {/* Overlay View with pointerEvents */}
            <View
              pointerEvents={pointerEventMode}
              style={styles.overlayBlocker}
              onTouchStart={() =>
                setTapMessage(`Overlay view intercepted touch with pointerEvents='${pointerEventMode}'`)
              }
            >
              <Text style={styles.overlayText}>
                Overlay Layer ({pointerEventMode})
              </Text>
            </View>
          </View>

          <View style={styles.tapLogBox}>
            <Text style={styles.tapLogText}>{tapMessage}</Text>
          </View>
        </View>

        {/* Section 8: Transforms & Visual Effects */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>08</Text>
            </View>
            <Text style={styles.sectionTitle}>Transforms &amp; Visual Effects</Text>
            <Text style={styles.sectionSubtitle}>
              Views support GPU-accelerated transformations including scale, rotate,
              translateX/Y, and opacity.
            </Text>
          </View>

          <Text style={styles.controlLabel}>Scale</Text>
          <View style={styles.buttonRow}>
            {[0.8, 1, 1.15].map(s => (
              <TouchableOpacity
                key={s}
                onPress={() => setTransformScale(s)}
                style={[
                  styles.pillButton,
                  transformScale === s && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    transformScale === s && styles.pillButtonTextActive,
                  ]}
                >
                  {s}x
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.controlLabel}>Rotate</Text>
          <View style={styles.buttonRow}>
            {(['0deg', '15deg', '45deg', '90deg'] as const).map(r => (
              <TouchableOpacity
                key={r}
                onPress={() => setTransformRotation(r)}
                style={[
                  styles.pillButton,
                  transformRotation === r && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    transformRotation === r && styles.pillButtonTextActive,
                  ]}
                >
                  {r}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View
            style={[
              styles.previewCanvas,
              { alignItems: 'center', justifyContent: 'center', minHeight: 120 },
            ]}
          >
            <View
              style={[
                styles.contentBox,
                {
                  transform: [
                    { scale: transformScale },
                    { rotate: transformRotation },
                  ],
                },
              ]}
            >
              <Text style={styles.contentLabel}>
                Transform: {transformScale}x | {transformRotation}
              </Text>
            </View>
          </View>
        </View>

        {/* Section 9: Accessibility (a11y) */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>09</Text>
            </View>
            <Text style={styles.sectionTitle}>Accessibility (a11y) Props</Text>
            <Text style={styles.sectionSubtitle}>
              Views expose properties allowing assistive screen readers (TalkBack &amp;
              VoiceOver) to understand the semantic meaning of container elements.
            </Text>
          </View>

          <View
            accessible={true}
            accessibilityRole="summary"
            accessibilityLabel="Accessible Information Card"
            accessibilityHint="Contains summary details of the View accessibility props"
            style={[
              styles.contentBox,
              {
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderWidth: 1,
                borderColor: colors.primary,
                width: '100%',
              },
            ]}
          >
            <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 13 }}>
              accessible=&#123;true&#125; accessibilityRole=&quot;summary&quot;
            </Text>
            <Text
              style={{
                color: colors.textSecondary,
                fontSize: 12,
                marginTop: 4,
                textAlign: 'center',
              }}
            >
              VoiceOver &amp; TalkBack announce this View as a single readable entity
              rather than disjointed child nodes.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
