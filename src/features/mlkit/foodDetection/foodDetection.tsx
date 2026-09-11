import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Image as ImageIcon,
  Utensils,
  Flame,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Plus,
  Minus,
} from 'lucide-react-native';

import { Header } from '../../../components';
import { useAppTheme } from '../../../hooks';
import getStyles from './styles';
import {
  pickImageFromGallery,
  analyzeFoodImage,
  calculateCalories,
  FoodDetectionResult,
  PickedImage,
  FOOD_DATABASE,
} from '../../../services/foodDetectionService';

// Quick interactive demo presets for instant testing
const DEMO_PRESETS = [
  {
    key: 'pizza',
    label: 'Pizza',
    emoji: '🍕',
    imageUri:
      'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&auto=format&fit=crop&q=80',
    fileName: 'margherita_pizza.jpg',
  },
  {
    key: 'salad',
    label: 'Salad',
    emoji: '🥗',
    imageUri:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80',
    fileName: 'healthy_green_salad.jpg',
  },
  {
    key: 'burger',
    label: 'Burger',
    emoji: '🍔',
    imageUri:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    fileName: 'cheeseburger.jpg',
  },
  {
    key: 'apple',
    label: 'Apple',
    emoji: '🍎',
    imageUri:
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80',
    fileName: 'fresh_red_apple.jpg',
  },
  {
    key: 'sushi',
    label: 'Sushi',
    emoji: '🍣',
    imageUri:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80',
    fileName: 'salmon_sushi_roll.jpg',
  },
  {
    key: 'coffee',
    label: 'Coffee',
    emoji: '☕',
    imageUri:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80',
    fileName: 'cappuccino_coffee.jpg',
  },
];

export default function FoodDetection() {
  const { colors } = useAppTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  const [selectedImage, setSelectedImage] = useState<PickedImage | null>(null);
  const [result, setResult] = useState<FoodDetectionResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [portion, setPortion] = useState<number>(1);
  const [activePresetKey, setActivePresetKey] = useState<string | null>(null);
  const [detectedDbKey, setDetectedDbKey] = useState<string>('pizza');

  // Trigger food analysis on a chosen image
  const processImage = async (
    imageUri: string,
    fileName?: string,
    forcedPresetKey?: string
  ) => {
    try {
      setIsAnalyzing(true);
      setResult(null);
      setPortion(1);

      const detection = await analyzeFoodImage(imageUri, fileName, forcedPresetKey);
      setResult(detection);

      // Determine database key for portion updates
      if (forcedPresetKey) {
        setDetectedDbKey(forcedPresetKey);
      } else {
        const foundKey = Object.keys(FOOD_DATABASE).find(k =>
          FOOD_DATABASE[k].names.some(n =>
            n.toLowerCase().includes(detection.foodName.toLowerCase())
          )
        );
        setDetectedDbKey(foundKey || 'salad');
      }
    } catch (error: any) {
      console.error('[FoodDetection] Analysis error:', error);
      Alert.alert(
        'Analysis Failed',
        error?.message || 'Could not analyze the selected image. Please try again.'
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Select image from device gallery
  const handlePickFromGallery = async () => {
    try {
      const image = await pickImageFromGallery();
      if (image) {
        setSelectedImage(image);
        setActivePresetKey(null);
        await processImage(image.uri, image.fileName);
      }
    } catch (error: any) {
      Alert.alert('Gallery Error', error?.message || 'Could not access photo gallery.');
    }
  };

  // Quick preset tester
  const handleSelectPreset = async (preset: (typeof DEMO_PRESETS)[0]) => {
    setActivePresetKey(preset.key);
    setSelectedImage({
      uri: preset.imageUri,
      fileName: preset.fileName,
    });
    await processImage(preset.imageUri, preset.fileName, preset.key);
  };

  // Portion stepper adjustment
  const handlePortionChange = (delta: number) => {
    const nextPortion = Math.max(0.5, Math.min(4, Number((portion + delta).toFixed(1))));
    setPortion(nextPortion);

    if (result && result.isFood) {
      const updatedNutrition = calculateCalories(detectedDbKey, nextPortion);
      setResult({
        ...result,
        nutrition: updatedNutrition,
      });
    }
  };

  // Calculate macronutrient distribution percentage
  const macroRatio = useMemo(() => {
    if (!result || !result.isFood) {
      return { pPct: 25, cPct: 50, fPct: 25 };
    }
    const { protein, carbs, fat } = result.nutrition;
    const totalGrams = protein + carbs + fat || 1;
    return {
      pPct: Math.round((protein / totalGrams) * 100),
      cPct: Math.round((carbs / totalGrams) * 100),
      fPct: Math.round((fat / totalGrams) * 100),
    };
  }, [result]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Food Detection" subtitle="ML Kit Recognition & Nutrition" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Quick Demo Presets */}
        <View style={styles.presetsContainer}>
          <Text style={styles.presetsLabel}>Quick Test Foods</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.presetScroll}
          >
            {DEMO_PRESETS.map(preset => {
              const isActive = activePresetKey === preset.key;
              return (
                <TouchableOpacity
                  key={preset.key}
                  style={[styles.presetChip, isActive && styles.presetChipActive]}
                  onPress={() => handleSelectPreset(preset)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.presetEmoji}>{preset.emoji}</Text>
                  <Text
                    style={[
                      styles.presetChipText,
                      isActive && styles.presetChipTextActive,
                    ]}
                  >
                    {preset.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Gallery / Image Preview Card */}
        <View style={styles.pickerCard}>
          {!selectedImage ? (
            <View style={styles.emptyPicker}>
              <View style={styles.iconCircle}>
                <Utensils size={32} color={colors.primary} />
              </View>
              <Text style={styles.pickerHeading}>Analyze Any Food Photo</Text>
              <Text style={styles.pickerSubtext}>
                Select an image from your gallery to detect the food type, identify its
                category, and compute calories with nutrition.
              </Text>
              <TouchableOpacity
                style={styles.galleryButton}
                onPress={handlePickFromGallery}
                activeOpacity={0.8}
              >
                <ImageIcon size={18} color="#FFFFFF" />
                <Text style={styles.galleryButtonText}>Choose from Gallery</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <View style={styles.imageWrapper}>
                <Image
                  source={{ uri: selectedImage.uri }}
                  style={styles.previewImage}
                />
              </View>
              <View style={styles.imageActionsBar}>
                <TouchableOpacity
                  style={styles.changeButton}
                  onPress={handlePickFromGallery}
                  activeOpacity={0.7}
                >
                  <ImageIcon size={16} color={colors.icon} />
                  <Text style={styles.changeButtonText}>Change Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.reanalyzeButton}
                  onPress={() =>
                    processImage(
                      selectedImage.uri,
                      selectedImage.fileName,
                      activePresetKey || undefined
                    )
                  }
                  activeOpacity={0.7}
                >
                  <RefreshCw size={15} color="#FFFFFF" />
                  <Text style={styles.reanalyzeButtonText}>Re-analyze</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        {/* Analyzing Spinner */}
        {isAnalyzing && (
          <View style={styles.loadingCard}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.loadingText}>Analyzing with ML Kit...</Text>
            <Text style={styles.loadingSubtext}>
              Detecting food items, category, and nutritional profile
            </Text>
          </View>
        )}

        {/* Detection Results */}
        {result && !isAnalyzing && (
          <View>
            {result.isFood ? (
              <View style={styles.resultCard}>
                {/* Status Bar */}
                <View style={styles.statusRow}>
                  <View style={[styles.statusBadge, styles.statusBadgeSuccess]}>
                    <CheckCircle2 size={15} color={colors.success} />
                    <Text style={styles.statusTextSuccess}>
                      Food Detected ({Math.round(result.confidence * 100)}%)
                    </Text>
                  </View>
                  <View style={styles.ratingBadge}>
                    <Text style={styles.ratingBadgeText}>
                      {result.nutrition.healthRating}
                    </Text>
                  </View>
                </View>

                {/* Food Name & Category */}
                <Text style={styles.foodTitle}>{result.foodName}</Text>
                <Text style={styles.categoryTag}>{result.category}</Text>

                {/* Calories Box with Portion Stepper */}
                <View style={styles.caloriesBox}>
                  <View style={styles.caloriesTopRow}>
                    <View style={styles.caloriesLeft}>
                      <Flame size={26} color={colors.primary} />
                      <Text style={styles.caloriesNumber}>
                        {result.nutrition.calories}
                      </Text>
                      <Text style={styles.caloriesUnit}>kcal</Text>
                    </View>

                    {/* Stepper */}
                    <View style={styles.stepperWrapper}>
                      <TouchableOpacity
                        style={styles.stepperBtn}
                        onPress={() => handlePortionChange(-0.5)}
                        activeOpacity={0.6}
                      >
                        <Minus size={14} color={colors.text} />
                      </TouchableOpacity>
                      <Text style={styles.stepperValue}>{portion}x</Text>
                      <TouchableOpacity
                        style={styles.stepperBtn}
                        onPress={() => handlePortionChange(0.5)}
                        activeOpacity={0.6}
                      >
                        <Plus size={14} color={colors.text} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={styles.servingSubtext}>
                    Serving: {result.nutrition.servingSize}
                  </Text>
                </View>

                {/* Macro Nutrients Grid */}
                <View style={styles.macrosGrid}>
                  <View style={[styles.macroTile, styles.macroTileProtein]}>
                    <Text style={styles.macroVal}>
                      {result.nutrition.protein}g
                    </Text>
                    <Text style={styles.macroLabel}>Protein</Text>
                  </View>
                  <View style={[styles.macroTile, styles.macroTileCarbs]}>
                    <Text style={styles.macroVal}>
                      {result.nutrition.carbs}g
                    </Text>
                    <Text style={styles.macroLabel}>Carbs</Text>
                  </View>
                  <View style={[styles.macroTile, styles.macroTileFat]}>
                    <Text style={styles.macroVal}>
                      {result.nutrition.fat}g
                    </Text>
                    <Text style={styles.macroLabel}>Fat</Text>
                  </View>
                  <View style={[styles.macroTile, styles.macroTileFiber]}>
                    <Text style={styles.macroVal}>
                      {result.nutrition.fiber}g
                    </Text>
                    <Text style={styles.macroLabel}>Fiber</Text>
                  </View>
                </View>

                {/* Distribution Bar */}
                <View style={styles.ratioContainer}>
                  <View style={styles.ratioLabels}>
                    <Text style={styles.ratioLabelText}>
                      Protein {macroRatio.pPct}%
                    </Text>
                    <Text style={styles.ratioLabelText}>
                      Carbs {macroRatio.cPct}%
                    </Text>
                    <Text style={styles.ratioLabelText}>Fat {macroRatio.fPct}%</Text>
                  </View>
                  <View style={styles.ratioBar}>
                    <View
                      style={[
                        styles.ratioProtein,
                        { width: `${macroRatio.pPct}%` },
                      ]}
                    />
                    <View
                      style={[
                        styles.ratioCarbs,
                        { width: `${macroRatio.cPct}%` },
                      ]}
                    />
                    <View
                      style={[styles.ratioFat, { width: `${macroRatio.fPct}%` }]}
                    />
                  </View>
                </View>

                {/* Health Insights */}
                {result.nutrition.healthTips.length > 0 && (
                  <View style={styles.healthSection}>
                    <View style={styles.healthHeader}>
                      <Sparkles size={16} color={colors.primary} />
                      <Text style={styles.healthTitle}>Nutritional Insights</Text>
                    </View>
                    {result.nutrition.healthTips.map((tip, idx) => (
                      <View key={idx} style={styles.tipItem}>
                        <Text style={styles.tipBullet}>•</Text>
                        <Text style={styles.tipText}>{tip}</Text>
                      </View>
                    ))}
                  </View>
                )}

                {/* ML Kit Labels */}
                {result.labels.length > 0 && (
                  <View style={styles.labelsContainer}>
                    <Text style={styles.labelsTitle}>Detected ML Labels</Text>
                    <View style={styles.chipsWrap}>
                      {result.labels.map((lbl, idx) => (
                        <View key={idx} style={styles.labelChip}>
                          <Text style={styles.labelChipText}>
                            {lbl.text} ({Math.round(lbl.confidence * 100)}%)
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}
              </View>
            ) : (
              /* Non-Food Result */
              <View style={styles.notFoodBox}>
                <AlertCircle size={36} color={colors.error} />
                <Text style={styles.notFoodTitle}>Not a Food Image</Text>
                <Text style={styles.notFoodDesc}>{result.message}</Text>
                {result.reason && (
                  <Text style={styles.notFoodReason}>
                    {result.reason}
                  </Text>
                )}
                <TouchableOpacity
                  style={styles.notFoodButton}
                  onPress={handlePickFromGallery}
                  activeOpacity={0.8}
                >
                  <Text style={styles.notFoodButtonText}>
                    Choose Another Photo
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
