import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import getStyles from './styles';
import { useAppTheme } from '../../hooks';
import { Header } from '../../components';

export default function TextScreen() {
  const { colors } = useAppTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  // Section 1: Typography Controls
  const [fontSize, setFontSize] = useState<number>(18);
  const [fontWeight, setFontWeight] = useState<
    'normal' | '500' | '700' | '900'
  >('700');
  const [fontStyle, setFontStyle] = useState<'normal' | 'italic'>('normal');
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [textTransform, setTextTransform] = useState<
    'none' | 'uppercase' | 'lowercase' | 'capitalize'
  >('none');
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('left');

  // Section 3: Truncation & Ellipsis
  const [numberOfLines, setNumberOfLines] = useState<number | undefined>(2);
  const [ellipsizeMode, setEllipsizeMode] = useState<
    'tail' | 'head' | 'middle' | 'clip'
  >('tail');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Section 4: Pressable Text & Link feedback
  const [toastMessage, setToastMessage] = useState<string>(
    'Tap any underlined word or tag below'
  );

  // Section 6: Text Shadow Controls
  const [hasShadow, setHasShadow] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Text Component" subtitle="Typography, nesting, clamping & links" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Card: What is Text? */}
        <View style={styles.heroCard}>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>Typography Primitive</Text>
          </View>
          <Text style={styles.heroTitle}>What is &lt;Text&gt;?</Text>
          <Text style={styles.heroDescription}>
            The &lt;Text&gt; component displays text and supports styling, nesting,
            touch handling, line clamping, and accessibility.
          </Text>

          {/* Golden Rule Alert */}
          <View style={styles.ruleAlert}>
            <Text style={styles.ruleAlertText}>
              ⚠️ Golden Rule: Bare strings cannot exist inside &lt;View&gt;. All text
              must be enclosed within a &lt;Text&gt; tag, or React Native throws a red screen error!
            </Text>
          </View>

          <View style={styles.platformRow}>
            <View style={styles.platformChip}>
              <Text style={styles.platformChipText}>iOS: UILabel / CoreText</Text>
            </View>
            <View style={styles.platformChip}>
              <Text style={styles.platformChipText}>Android: TextView</Text>
            </View>
            <View style={styles.platformChip}>
              <Text style={styles.platformChipText}>Web: &lt;span&gt; / &lt;p&gt;</Text>
            </View>
          </View>
        </View>

        {/* Section 1: Typography Playground */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>01</Text>
            </View>
            <Text style={styles.sectionTitle}>Typography &amp; Styling Controls</Text>
            <Text style={styles.sectionSubtitle}>
              Adjust font properties dynamically: size, weight, italic posture, letter
              spacing, and transform cases.
            </Text>
          </View>

          {/* fontSize */}
          <Text style={styles.controlLabel}>fontSize</Text>
          <View style={styles.buttonRow}>
            {[14, 18, 24, 30].map(s => (
              <TouchableOpacity
                key={s}
                onPress={() => setFontSize(s)}
                style={[styles.pillButton, fontSize === s && styles.pillButtonActive]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    fontSize === s && styles.pillButtonTextActive,
                  ]}
                >
                  {s}px
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* fontWeight */}
          <Text style={styles.controlLabel}>fontWeight</Text>
          <View style={styles.buttonRow}>
            {(['normal', '500', '700', '900'] as const).map(w => (
              <TouchableOpacity
                key={w}
                onPress={() => setFontWeight(w)}
                style={[
                  styles.pillButton,
                  fontWeight === w && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    fontWeight === w && styles.pillButtonTextActive,
                  ]}
                >
                  {w}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* textAlign */}
          <Text style={styles.controlLabel}>textAlign</Text>
          <View style={styles.buttonRow}>
            {(['left', 'center', 'right'] as const).map(a => (
              <TouchableOpacity
                key={a}
                onPress={() => setTextAlign(a)}
                style={[
                  styles.pillButton,
                  textAlign === a && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    textAlign === a && styles.pillButtonTextActive,
                  ]}
                >
                  {a}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* letterSpacing & textTransform */}
          <Text style={styles.controlLabel}>textTransform &amp; letterSpacing</Text>
          <View style={styles.buttonRow}>
            {(['none', 'uppercase', 'capitalize'] as const).map(t => (
              <TouchableOpacity
                key={t}
                onPress={() => setTextTransform(t)}
                style={[
                  styles.pillButton,
                  textTransform === t && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    textTransform === t && styles.pillButtonTextActive,
                  ]}
                >
                  {t}
                </Text>
              </TouchableOpacity>
            ))}
            {[0, 2, 4].map(ls => (
              <TouchableOpacity
                key={ls}
                onPress={() => setLetterSpacing(ls)}
                style={[
                  styles.pillButton,
                  letterSpacing === ls && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    letterSpacing === ls && styles.pillButtonTextActive,
                  ]}
                >
                  Kerning: {ls}px
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Live Preview Canvas */}
          <View style={styles.previewCanvas}>
            <Text
              style={{
                fontSize,
                fontWeight,
                fontStyle,
                letterSpacing,
                textTransform,
                textAlign,
                color: colors.text,
              }}
            >
              React Native Typography
            </Text>
          </View>

          {/* Generated Code */}
          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`<Text style={{`}
              {`\n  fontSize: ${fontSize},`}
              {`\n  fontWeight: '${fontWeight}',`}
              {`\n  textAlign: '${textAlign}',`}
              {`\n  letterSpacing: ${letterSpacing},`}
              {`\n  textTransform: '${textTransform}',`}
              {`\n  color: '${colors.text}'`}
              {`\n}}>`}
            </Text>
          </View>
        </View>

        {/* Section 2: Text Nesting & Style Inheritance */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>02</Text>
            </View>
            <Text style={styles.sectionTitle}>Nesting &amp; Style Inheritance</Text>
            <Text style={styles.sectionSubtitle}>
              Views do not pass text styles down to children. However, a &lt;Text&gt;
              nested inside another &lt;Text&gt; DOES inherit styles from its parent!
            </Text>
          </View>

          <View style={styles.previewCanvas}>
            {/* Outer text establishes baseline color, size & line-height */}
            <Text
              style={{
                fontSize: 15,
                lineHeight: 24,
                color: colors.textSecondary,
              }}
            >
              Learn how to build{' '}
              <Text style={{ fontWeight: '800', color: colors.primary }}>
                native mobile applications
              </Text>{' '}
              with high-performance animations,{' '}
              <Text
                style={{
                  color: '#EC4899',
                  fontWeight: '700',
                  textDecorationLine: 'underline',
                }}
              >
                offline persistence
              </Text>
              , and beautiful UI.
            </Text>
          </View>

          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`<Text style={{ color: 'gray' }}>\n`}
              {`  Learn how to build{' '}\n`}
              {`  <Text style={{ fontWeight: '800', color: 'indigo' }}>\n`}
              {`    native mobile applications\n`}
              {`  </Text>\n`}
              {`</Text>`}
            </Text>
          </View>
        </View>

        {/* Section 3: Line Clamping & Ellipsis */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>03</Text>
            </View>
            <Text style={styles.sectionTitle}>Line Clamping &amp; Ellipsis</Text>
            <Text style={styles.sectionSubtitle}>
              Use numberOfLines combined with ellipsizeMode to truncate long text
              elegantly with trailing, leading, or middle dots.
            </Text>
          </View>

          {/* numberOfLines controls */}
          <Text style={styles.controlLabel}>numberOfLines</Text>
          <View style={styles.buttonRow}>
            {[1, 2, 3].map(lines => (
              <TouchableOpacity
                key={lines}
                onPress={() => setNumberOfLines(lines)}
                style={[
                  styles.pillButton,
                  numberOfLines === lines && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    numberOfLines === lines && styles.pillButtonTextActive,
                  ]}
                >
                  {lines} {lines === 1 ? 'line' : 'lines'}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => setNumberOfLines(undefined)}
              style={[
                styles.pillButton,
                numberOfLines === undefined && styles.pillButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.pillButtonText,
                  numberOfLines === undefined && styles.pillButtonTextActive,
                ]}
              >
                Unlimited
              </Text>
            </TouchableOpacity>
          </View>

          {/* ellipsizeMode controls */}
          <Text style={styles.controlLabel}>ellipsizeMode</Text>
          <View style={styles.buttonRow}>
            {(['tail', 'head', 'middle', 'clip'] as const).map(mode => (
              <TouchableOpacity
                key={mode}
                onPress={() => setEllipsizeMode(mode)}
                style={[
                  styles.pillButton,
                  ellipsizeMode === mode && styles.pillButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    ellipsizeMode === mode && styles.pillButtonTextActive,
                  ]}
                >
                  {mode}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.previewCanvas}>
            <Text
              numberOfLines={numberOfLines}
              ellipsizeMode={ellipsizeMode}
              style={{
                fontSize: 14,
                lineHeight: 22,
                color: colors.text,
              }}
            >
              React Native lets you create truly native mobile apps for iOS and
              Android using a single codebase. It leverages native views, multi-threaded
              layout via Yoga, and high performance JavaScript runtimes like Hermes.
            </Text>
          </View>

          {/* Expandable Read More / Read Less Pattern */}
          <Text style={[styles.controlLabel, { marginTop: 14 }]}>
            Practical Pattern: Expandable &quot;Read More&quot;
          </Text>
          <View style={styles.linkCard}>
            <Text
              numberOfLines={isExpanded ? undefined : 2}
              style={{ fontSize: 13, lineHeight: 20, color: colors.textSecondary }}
            >
              Mobile software development requires balancing fluid responsive design
              with tight device memory constraints. Understanding how React Native
              mounts native TextView and UILabel primitives helps prevent UI thread
              bottlenecks.
            </Text>
            <TouchableOpacity
              onPress={() => setIsExpanded(exp => !exp)}
              style={{ alignSelf: 'flex-start', marginTop: 4 }}
            >
              <Text style={{ color: colors.primary, fontWeight: '700', fontSize: 13 }}>
                {isExpanded ? 'Show Less ▲' : 'Read More ▼'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section 4: Inline Touch Handling & Links */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>04</Text>
            </View>
            <Text style={styles.sectionTitle}>Inline Touch Events &amp; Links</Text>
            <Text style={styles.sectionSubtitle}>
              &lt;Text&gt; natively accepts onPress &amp; onLongPress callbacks without
              wrapping in a TouchableOpacity or Pressable!
            </Text>
          </View>

          <View style={styles.linkCard}>
            <Text style={styles.linkBaseText}>
              By signing in, you agree to our{' '}
              <Text
                onPress={() => setToastMessage('Navigating to Terms of Service...')}
                style={styles.linkHighlight}
              >
                Terms of Service
              </Text>{' '}
              and acknowledge our{' '}
              <Text
                onPress={() => setToastMessage('Opening Privacy Policy modal...')}
                style={styles.linkHighlight}
              >
                Privacy Policy
              </Text>
              . Questions? Reach out to{' '}
              <Text
                onPress={() => setToastMessage('Clicked support handle @support')}
                style={styles.linkSecondaryHighlight}
              >
                @support
              </Text>
              .
            </Text>
          </View>

          <View style={styles.feedbackToast}>
            <Text style={styles.feedbackToastText}>{toastMessage}</Text>
          </View>
        </View>

        {/* Section 5: Selectable Text & Custom Selection Color */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>05</Text>
            </View>
            <Text style={styles.sectionTitle}>Selectable Text &amp; Clipboard</Text>
            <Text style={styles.sectionSubtitle}>
              Enable selectable=&#123;true&#125; so users can long-press and copy text,
              and customize selectionColor to match your brand theme.
            </Text>
          </View>

          <View style={styles.selectableBox}>
            <Text
              selectable={true}
              selectionColor="rgba(99, 102, 241, 0.4)"
              style={{
                fontSize: 14,
                lineHeight: 22,
                color: colors.text,
                fontFamily: 'monospace',
              }}
            >
              npm install @react-navigation/native-stack
            </Text>
          </View>
          <Text style={{ fontSize: 11, color: colors.textMuted, fontStyle: 'italic' }}>
            👉 Long-press the code line above to copy to clipboard.
          </Text>
        </View>

        {/* Section 6: Text Shadows & Glow */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>06</Text>
            </View>
            <Text style={styles.sectionTitle}>Text Shadows (Cross-Platform)</Text>
            <Text style={styles.sectionSubtitle}>
              Unlike box shadows, textShadowColor, textShadowOffset, and
              textShadowRadius work identically across both iOS and Android!
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setHasShadow(s => !s)}
            style={[styles.pillButton, { alignSelf: 'flex-start', marginBottom: 10 }]}
          >
            <Text style={styles.pillButtonText}>
              Shadow: {hasShadow ? 'Enabled (Neon Glow)' : 'Disabled'}
            </Text>
          </TouchableOpacity>

          <View style={[styles.previewCanvas, { alignItems: 'center' }]}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: '900',
                color: colors.primary,
                letterSpacing: 1.5,
                textShadowColor: hasShadow
                  ? 'rgba(99, 102, 241, 0.75)'
                  : 'transparent',
                textShadowOffset: { width: 0, height: 4 },
                textShadowRadius: hasShadow ? 12 : 0,
              }}
            >
              NEON SHADOW
            </Text>
          </View>

          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`style={{\n`}
              {`  textShadowColor: 'rgba(99, 102, 241, 0.75)',\n`}
              {`  textShadowOffset: { width: 0, height: 4 },\n`}
              {`  textShadowRadius: 12\n`}
              {`}}`}
            </Text>
          </View>
        </View>

        {/* Section 7: Text Decorations (E-commerce Price Example) */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>07</Text>
            </View>
            <Text style={styles.sectionTitle}>Text Decorations (Underline &amp; Strikethrough)</Text>
            <Text style={styles.sectionSubtitle}>
              textDecorationLine supports &apos;underline&apos;, &apos;line-through&apos;, or both,
              perfect for discount pricing tags.
            </Text>
          </View>

          <View style={styles.priceRow}>
            {/* Strikethrough Original Price */}
            <Text style={styles.originalPrice}>$99.00</Text>

            {/* Sale Price */}
            <Text style={styles.salePrice}>$49.00</Text>

            {/* Discount Badge */}
            <View style={styles.discountBadge}>
              <Text style={styles.discountBadgeText}>50% OFF</Text>
            </View>
          </View>
        </View>

        {/* Section 8: Android includeFontPadding & Alignment */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>08</Text>
            </View>
            <Text style={styles.sectionTitle}>Android includeFontPadding</Text>
            <Text style={styles.sectionSubtitle}>
              On Android, TextView includes extra vertical font padding by default. Setting
              includeFontPadding=&#123;false&#125; is vital for tight badges and exact centering.
            </Text>
          </View>

          <View style={styles.comparisonRow}>
            <View style={styles.comparisonItem}>
              <Text style={{ fontSize: 11, color: colors.textSecondary }}>Default (true)</Text>
              <View style={styles.badgeItem}>
                <Text
                  style={[
                    styles.badgeItemText,
                    { includeFontPadding: true },
                  ]}
                >
                  BADGE
                </Text>
              </View>
            </View>

            <View style={styles.comparisonItem}>
              <Text style={{ fontSize: 11, color: colors.primary, fontWeight: '700' }}>
                includeFontPadding: false
              </Text>
              <View style={styles.badgeItem}>
                <Text
                  style={[
                    styles.badgeItemText,
                    { includeFontPadding: false },
                  ]}
                >
                  BADGE
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Section 9: Accessibility (a11y) & Dynamic Type */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionNumberBadge}>
              <Text style={styles.sectionNumberText}>09</Text>
            </View>
            <Text style={styles.sectionTitle}>Accessibility &amp; Font Scaling</Text>
            <Text style={styles.sectionSubtitle}>
              maxFontSizeMultiplier prevents massive OS accessibility fonts from
              overflowing UI headers, while accessibilityRole tells screen readers the text purpose.
            </Text>
          </View>

          <View style={styles.previewCanvas}>
            <Text
              accessible={true}
              accessibilityRole="header"
              accessibilityLabel="Product Details Heading"
              maxFontSizeMultiplier={1.4}
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: colors.text,
              }}
            >
              accessibilityRole=&quot;header&quot; maxFontSizeMultiplier=&#123;1.4&#125;
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: colors.textSecondary,
                marginTop: 6,
              }}
            >
              Allows users with low vision to scale text up to 140% while preventing
              header text from clipping navigation elements.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
