export interface FeatureItem {
  id: number;
  name: string;
  category: string;
  screen?: string;
  description: string;
}

export interface MLKitItem {
  id: number;
  name: string;
  screen?: string;
  description: string;
}

export interface ComponentItem {
  id: number;
  name: string;
  category: string;
  screen?: string;
  description: string;
}

export const featureCategories = [
  'All',
  'Core React Native Components',
  'UI Components',
  'Navigation Features',
  'Animation & Gesture Features',
  'Authentication Components & Features',
  'Form Components & Features',
  'API & Data Components / Features',
  'Camera & Image Features',
  'Video & Audio Features',
  'Real-Time Features',
  'Notifications Features',
  'Location & Maps Features',
  'AI & Machine Learning Features',
  'Device Native Features',
  'Storage & Offline Features',
  'E-commerce Features',
  'Social Media Features',
  'Performance Features',
  'Security Features',
  'Testing & Deployment Features',
  'Accessibility & Localization',
  'Advanced App Features',
] as const;

export type FeatureCategory = (typeof featureCategories)[number];

export const featuresList: FeatureItem[] = [
  {
    id: 1,
    name: 'View',
    category: 'Core React Native Components',
    description:
      'Container component that supports layout with flexbox, style, touch handling, and accessibility',
    screen: 'View',
  },
  {
    id: 2,
    name: 'Text',
    category: 'Core React Native Components',
    screen: 'Text',
    description:
      'Core component for displaying text with styling, nesting, and touch handling',
  },
  {
    id: 3,
    name: 'Image',
    category: 'Core React Native Components',
    screen: 'Image',
    description:
      'Component for displaying local and remote network images with resizing modes',
  },
  {
    id: 4,
    name: 'ImageBackground',
    category: 'Core React Native Components',
    screen: 'ImageBackground',
    description:
      'Container view that renders an image as the background with child content on top',
  },
  {
    id: 5,
    name: 'TextInput',
    category: 'Core React Native Components',
    description:
      'Foundational component for inputting text via the device virtual keyboard',
  },
  {
    id: 6,
    name: 'ScrollView',
    category: 'Core React Native Components',
    description:
      'Scrollable container that wraps multiple components and views',
  },
  {
    id: 7,
    name: 'FlatList',
    category: 'Core React Native Components',
    description:
      'High-performance interface for rendering simple, scrollable, flat lists',
  },
  {
    id: 8,
    name: 'SectionList',
    category: 'Core React Native Components',
    description:
      'Performant scrollable list with section headers, footers, and item rendering',
  },
  {
    id: 9,
    name: 'VirtualizedList',
    category: 'Core React Native Components',
    description:
      'Base list component behind FlatList with custom data windowing and memory virtualization',
  },
  {
    id: 10,
    name: 'Pressable',
    category: 'Core React Native Components',
    description:
      'Core interactive wrapper that detects various stages of press interactions',
  },
  {
    id: 11,
    name: 'TouchableOpacity',
    category: 'Core React Native Components',
    description:
      'Wrapper for making views respond properly to touches with reduced opacity feedback',
  },
  {
    id: 12,
    name: 'TouchableHighlight',
    category: 'Core React Native Components',
    description:
      'Wrapper for making views respond to touches by showing an underlay color',
  },
  {
    id: 13,
    name: 'TouchableWithoutFeedback',
    category: 'Core React Native Components',
    description:
      'Wrapper for handling touches without visual feedback animations',
  },
  {
    id: 14,
    name: 'Button',
    category: 'Core React Native Components',
    description:
      'Basic pre-packaged button component with native platform styling',
  },
  {
    id: 15,
    name: 'Switch',
    category: 'Core React Native Components',
    description:
      'Boolean toggle component that renders a native switch control',
  },
  {
    id: 16,
    name: 'ActivityIndicator',
    category: 'Core React Native Components',
    description:
      'Displays a circular loading spinner with configurable size and color',
  },
  {
    id: 17,
    name: 'Modal',
    category: 'Core React Native Components',
    description:
      'Presents a view above the enclosing view with animated slide or fade presentation',
  },
  {
    id: 18,
    name: 'StatusBar',
    category: 'Core React Native Components',
    description:
      'Component to control the app status bar appearance, style, and visibility',
  },
  {
    id: 19,
    name: 'KeyboardAvoidingView',
    category: 'Core React Native Components',
    description:
      'Automatically adjusts its height or position to avoid the software keyboard',
  },
  {
    id: 20,
    name: 'SafeAreaView',
    category: 'Core React Native Components',
    description:
      'Renders content within the safe area boundaries of modern devices with notches/insets',
  },
  {
    id: 21,
    name: 'RefreshControl',
    category: 'Core React Native Components',
    description:
      'Standard pull-to-refresh control used inside ScrollView and FlatList',
  },
  {
    id: 22,
    name: 'InputAccessoryView',
    category: 'Core React Native Components',
    description: 'Custom view anchored on top of the soft keyboard on iOS',
  },
  {
    id: 23,
    name: 'ProgressBarAndroid',
    category: 'Core React Native Components',
    description: 'Native horizontal or circular progress indicator for Android',
  },
  {
    id: 24,
    name: 'DrawerLayoutAndroid',
    category: 'Core React Native Components',
    description: 'Platform-specific drawer navigation layout for Android',
  },
  {
    id: 25,
    name: 'Animated',
    category: 'Core React Native Components',
    description:
      'Core React Native declarative animation library for fluid UI motion',
  },
  {
    id: 26,
    name: 'LayoutAnimation',
    category: 'Core React Native Components',
    description:
      'Global animation driver that animates views to their new positions on layout changes',
  },
  {
    id: 27,
    name: 'Custom Button',
    category: 'UI Components',
    description:
      'Configurable button with custom colors, shapes, loading state, and icon support',
  },
  {
    id: 28,
    name: 'Custom Input Field',
    category: 'UI Components',
    description:
      'Text field with custom borders, icons, helper text, and validation states',
  },
  {
    id: 29,
    name: 'Password Input',
    category: 'UI Components',
    description: 'Text input with password obscuring and visibility eye toggle',
  },
  {
    id: 30,
    name: 'Search Bar',
    category: 'UI Components',
    description:
      'Input field with search icon, clear button, and real-time debounce',
  },
  {
    id: 31,
    name: 'Dropdown',
    category: 'UI Components',
    description: 'Select menu that displays a list of options upon clicking',
  },
  {
    id: 32,
    name: 'Checkbox',
    category: 'UI Components',
    description:
      'Interactive box for selecting multiple options with checkmark state',
  },
  {
    id: 33,
    name: 'Radio Button',
    category: 'UI Components',
    description:
      'Circular selection control for choosing a single option from a group',
  },
  {
    id: 34,
    name: 'Toggle Switch',
    category: 'UI Components',
    description: 'Smooth animated switch for toggling on/off settings',
  },
  {
    id: 35,
    name: 'Slider',
    category: 'UI Components',
    description:
      'Thumb slider for selecting continuous or stepped numeric values',
  },
  {
    id: 36,
    name: 'Range Slider',
    category: 'UI Components',
    description:
      'Dual-thumb slider for selecting minimum and maximum value ranges',
  },
  {
    id: 37,
    name: 'Date Picker',
    category: 'UI Components',
    description: 'Modal or wheel picker for selecting calendar dates',
  },
  {
    id: 38,
    name: 'Time Picker',
    category: 'UI Components',
    description:
      'Clock dial or wheel picker for selecting hours, minutes, and AM/PM',
  },
  {
    id: 39,
    name: 'Calendar',
    category: 'UI Components',
    description:
      'Month-grid calendar view with event markings and date range selection',
  },
  {
    id: 40,
    name: 'Bottom Sheet',
    category: 'UI Components',
    description:
      'Draggable sheet that slides up from the bottom with snap points',
  },
  {
    id: 41,
    name: 'Action Sheet',
    category: 'UI Components',
    description:
      'Dialog presenting a set of contextual action choices or destructive actions',
  },
  {
    id: 42,
    name: 'Dialog',
    category: 'UI Components',
    description:
      'Modal overlay requiring user acknowledgment or decision before proceeding',
  },
  {
    id: 43,
    name: 'Alert',
    category: 'UI Components',
    description:
      'Native or custom prompt displaying an urgent message with action buttons',
  },
  {
    id: 44,
    name: 'Toast',
    category: 'UI Components',
    description:
      'Brief, auto-dismissing notification popup appearing at top or bottom',
  },
  {
    id: 45,
    name: 'Snackbar',
    category: 'UI Components',
    description:
      'Bottom message bar providing lightweight feedback with optional action',
  },
  {
    id: 46,
    name: 'Tooltip',
    category: 'UI Components',
    description:
      'Small contextual popover displaying helpful information on press or hover',
  },
  {
    id: 47,
    name: 'Popover',
    category: 'UI Components',
    description:
      'Floating content container anchored to a specific trigger element',
  },
  {
    id: 48,
    name: 'Accordion',
    category: 'UI Components',
    description:
      'Collapsible container that reveals or hides content sections on tap',
  },
  {
    id: 49,
    name: 'Expandable List',
    category: 'UI Components',
    description: 'List with parent headers that expand to reveal child items',
  },
  {
    id: 50,
    name: 'Card',
    category: 'UI Components',
    description:
      'Contained surface for displaying related content, images, and action buttons',
  },
  {
    id: 51,
    name: 'Badge',
    category: 'UI Components',
    description:
      'Small visual indicator showing counts, status, or notification dots',
  },
  {
    id: 52,
    name: 'Avatar',
    category: 'UI Components',
    description: 'Rounded image or monogram representing a user profile',
  },
  {
    id: 53,
    name: 'Chip',
    category: 'UI Components',
    description:
      'Compact pill-shaped element used for tags, filters, and attributes',
  },
  {
    id: 54,
    name: 'Tag',
    category: 'UI Components',
    description: 'Visual label categorizing content with color coding',
  },
  {
    id: 55,
    name: 'Divider',
    category: 'UI Components',
    description: 'Thin line separating content into distinct visual groups',
  },
  {
    id: 56,
    name: 'Skeleton Loader',
    category: 'UI Components',
    description: 'Placeholder wireframe that pulses while data is being loaded',
  },
  {
    id: 57,
    name: 'Shimmer Loader',
    category: 'UI Components',
    description:
      'Animated light-reflection shimmer effect indicating pending content',
  },
  {
    id: 58,
    name: 'Spinner',
    category: 'UI Components',
    description:
      'Rotating circular indicator for indeterminate loading operations',
  },
  {
    id: 59,
    name: 'Progress Indicator',
    category: 'UI Components',
    description:
      'Linear or circular bar displaying the completion percentage of a task',
  },
  {
    id: 60,
    name: 'Pagination',
    category: 'UI Components',
    description:
      'Numeric or dot indicators showing current position within a dataset or carousel',
  },
  {
    id: 61,
    name: 'Tab Bar',
    category: 'UI Components',
    description:
      'Horizontal navigation bar displaying selectable tabs for switching views',
  },
  {
    id: 62,
    name: 'Tab View',
    category: 'UI Components',
    description: 'Swipeable page view paired with a top or bottom tab bar',
  },
  {
    id: 63,
    name: 'Stepper',
    category: 'UI Components',
    description:
      'Visual sequence tracker for multi-step workflows, checkouts, and forms',
  },
  {
    id: 64,
    name: 'Carousel',
    category: 'UI Components',
    description:
      'Horizontal swipeable component for browsing featured banners and media',
  },
  {
    id: 65,
    name: 'Image Slider',
    category: 'UI Components',
    description:
      'Full-width image gallery slider with touch navigation and pagination',
  },
  {
    id: 66,
    name: 'Rating',
    category: 'UI Components',
    description:
      'Visual rating component for displaying user ratings and reviews',
  },
  {
    id: 67,
    name: 'Star Rating',
    category: 'UI Components',
    description:
      'Interactive 5-star rating control for scoring products or services',
  },
  {
    id: 68,
    name: 'FAB (Floating Action Button)',
    category: 'UI Components',
    description:
      'Circular action button floating over screen content for primary actions',
  },
  {
    id: 69,
    name: 'Drawer',
    category: 'UI Components',
    description:
      'Hidden side navigation panel that slides out on gesture or button press',
  },
  {
    id: 70,
    name: 'Navigation Header',
    category: 'UI Components',
    description:
      'App header bar displaying screen title, back button, and contextual actions',
  },
  {
    id: 71,
    name: 'Custom Status Bar',
    category: 'UI Components',
    description:
      'Themed status bar matching the app palette and screen background',
  },
  {
    id: 72,
    name: 'Empty State',
    category: 'UI Components',
    description:
      'Illustrated placeholder screen shown when there is no data to display',
  },
  {
    id: 73,
    name: 'Error State',
    category: 'UI Components',
    description:
      'User-friendly error screen with illustration and retry action button',
  },
  {
    id: 74,
    name: 'Stack Navigation',
    category: 'Navigation Features',
    description: 'Standard stack-based navigation where screens push and pop',
  },
  {
    id: 75,
    name: 'Native Stack Navigation',
    category: 'Navigation Features',
    description:
      'Platform-native stack navigation leveraging native view hierarchies',
  },
  {
    id: 76,
    name: 'Bottom Tab Navigation',
    category: 'Navigation Features',
    description:
      'Pinned bottom bar with icons for switching top-level app destinations',
  },
  {
    id: 77,
    name: 'Top Tab Navigation',
    category: 'Navigation Features',
    description: 'Swipeable top tabs commonly used for content categories',
  },
  {
    id: 78,
    name: 'Drawer Navigation',
    category: 'Navigation Features',
    description:
      'Slide-out menu panel for side-level navigation and user settings',
  },
  {
    id: 79,
    name: 'Nested Navigation',
    category: 'Navigation Features',
    description:
      'Hierarchy where navigators are nested inside other navigators',
  },
  {
    id: 80,
    name: 'Modal Navigation',
    category: 'Navigation Features',
    description:
      'Screens presented modally over previous content with custom transitions',
  },
  {
    id: 81,
    name: 'Authentication Navigation',
    category: 'Navigation Features',
    description:
      'Conditional navigation flow switching between Auth and App stacks',
  },
  {
    id: 82,
    name: 'Deep Linking',
    category: 'Navigation Features',
    description: 'Opening specific screens in the app from external web URLs',
  },
  {
    id: 83,
    name: 'Universal Links',
    category: 'Navigation Features',
    description: 'Seamless iOS universal links routing directly into app views',
  },
  {
    id: 84,
    name: 'App Links',
    category: 'Navigation Features',
    description:
      'Verified Android App Links that bypass browser disambiguation dialogs',
  },
  {
    id: 85,
    name: 'Navigation Guards',
    category: 'Navigation Features',
    description:
      'Route authorization checks preventing unauthorized screen access',
  },
  {
    id: 86,
    name: 'Conditional Navigation',
    category: 'Navigation Features',
    description:
      'Dynamically determining target route based on user state or flags',
  },
  {
    id: 87,
    name: 'Navigation Reset',
    category: 'Navigation Features',
    description:
      'Clearing the navigation history stack and replacing with a new root',
  },
  {
    id: 88,
    name: 'Navigation Params',
    category: 'Navigation Features',
    description: 'Passing dynamic data and objects between navigation screens',
  },
  {
    id: 89,
    name: 'Navigation History',
    category: 'Navigation Features',
    description: 'Tracking screen trajectory for back-handling and analytics',
  },
  {
    id: 90,
    name: 'Custom Navigation Transitions',
    category: 'Navigation Features',
    description:
      'Custom screen entrance, slide, fade, and zoom transition animations',
  },
  {
    id: 91,
    name: 'Animated API',
    category: 'Animation & Gesture Features',
    description: 'React Native built-in declarative animation system',
  },
  {
    id: 92,
    name: 'React Native Reanimated',
    category: 'Animation & Gesture Features',
    description: 'Worklet-based high-performance 60/120fps animation library',
  },
  {
    id: 93,
    name: 'Layout Animations',
    category: 'Animation & Gesture Features',
    description: 'Automatic smooth layout transitions on state changes',
  },
  {
    id: 94,
    name: 'Shared Element Transitions',
    category: 'Animation & Gesture Features',
    description: 'Seamless shared view transitions between two screens',
  },
  {
    id: 95,
    name: 'Fade Animation',
    category: 'Animation & Gesture Features',
    description: 'Smooth opacity transitions fading elements in or out',
  },
  {
    id: 96,
    name: 'Slide Animation',
    category: 'Animation & Gesture Features',
    description: 'Positional translation animation sliding elements into view',
  },
  {
    id: 97,
    name: 'Scale Animation',
    category: 'Animation & Gesture Features',
    description: 'Transforming element size from small to full or vice versa',
  },
  {
    id: 98,
    name: 'Rotate Animation',
    category: 'Animation & Gesture Features',
    description: 'Rotational transformation animating elements around an axis',
  },
  {
    id: 99,
    name: 'Spring Animation',
    category: 'Animation & Gesture Features',
    description:
      'Physics-based spring animations with bounce, tension, and friction',
  },
  {
    id: 100,
    name: 'Timing Animation',
    category: 'Animation & Gesture Features',
    description: 'Duration-based cubic bezier curve easing animations',
  },
  {
    id: 101,
    name: 'Gesture Handler',
    category: 'Animation & Gesture Features',
    description: 'Native-driven gesture recognizers for touch events',
  },
  {
    id: 102,
    name: 'Swipe Gestures',
    category: 'Animation & Gesture Features',
    description: 'Detecting directional swipe motions across screen surfaces',
  },
  {
    id: 103,
    name: 'Pan Gestures',
    category: 'Animation & Gesture Features',
    description: 'Tracking continuous dragging and panning touch movements',
  },
  {
    id: 104,
    name: 'Pinch Gestures',
    category: 'Animation & Gesture Features',
    description: 'Two-finger pinch gesture detection for zooming and scaling',
  },
  {
    id: 105,
    name: 'Rotation Gestures',
    category: 'Animation & Gesture Features',
    description: 'Two-finger rotation detection for rotating items on screen',
  },
  {
    id: 106,
    name: 'Drag and Drop',
    category: 'Animation & Gesture Features',
    description:
      'Interactive picking, dragging, and dropping items into target drop zones',
  },
  {
    id: 107,
    name: 'Swipe-to-Delete',
    category: 'Animation & Gesture Features',
    description: 'Swipe gesture revealing delete action on list rows',
  },
  {
    id: 108,
    name: 'Swipe Cards',
    category: 'Animation & Gesture Features',
    description: 'Tinder-style card deck with directional swiping physics',
  },
  {
    id: 109,
    name: 'Pull-to-Refresh',
    category: 'Animation & Gesture Features',
    description: 'Downward drag gesture that triggers data re-fetching',
  },
  {
    id: 110,
    name: 'Lottie Animations',
    category: 'Animation & Gesture Features',
    description: 'Rendering After Effects vector animations from JSON files',
  },
  {
    id: 111,
    name: 'Skia Graphics',
    category: 'Animation & Gesture Features',
    description:
      'High-performance 2D vector graphics, shaders, and custom path rendering',
  },
  {
    id: 112,
    name: 'Haptic Feedback',
    category: 'Animation & Gesture Features',
    description:
      'Tactile vibrations confirming user taps, selections, and errors',
  },
  {
    id: 113,
    name: 'Login',
    category: 'Authentication Components & Features',
    description:
      'Email/username and password credential authentication screen and logic',
  },
  {
    id: 114,
    name: 'Signup',
    category: 'Authentication Components & Features',
    description:
      'New user account registration form with profile data collection',
  },
  {
    id: 115,
    name: 'Logout',
    category: 'Authentication Components & Features',
    description: 'Session termination, credential clearing, and state reset',
  },
  {
    id: 116,
    name: 'OTP Input',
    category: 'Authentication Components & Features',
    description: 'Partitioned digit inputs for one-time password entry',
  },
  {
    id: 117,
    name: 'OTP Verification',
    category: 'Authentication Components & Features',
    description: 'Verifying SMS or email one-time authentication codes',
  },
  {
    id: 118,
    name: 'Email Verification',
    category: 'Authentication Components & Features',
    description: 'Sending and confirming account verification links or codes',
  },
  {
    id: 119,
    name: 'Phone Verification',
    category: 'Authentication Components & Features',
    description: 'SMS-based phone number verification flow',
  },
  {
    id: 120,
    name: 'Forgot Password',
    category: 'Authentication Components & Features',
    description: 'Password recovery initiation screen with email input',
  },
  {
    id: 121,
    name: 'Reset Password',
    category: 'Authentication Components & Features',
    description: 'Secure password reset form with token verification',
  },
  {
    id: 122,
    name: 'Change Password',
    category: 'Authentication Components & Features',
    description:
      'Authenticated password update with current password validation',
  },
  {
    id: 123,
    name: 'Google Login',
    category: 'Authentication Components & Features',
    description: 'Single sign-on authentication via Google OAuth SDK',
  },
  {
    id: 124,
    name: 'Apple Login',
    category: 'Authentication Components & Features',
    description: 'Sign in with Apple integration with private email relay',
  },
  {
    id: 125,
    name: 'Facebook Login',
    category: 'Authentication Components & Features',
    description: 'Social authentication via Facebook Login SDK',
  },
  {
    id: 126,
    name: 'Guest Login',
    category: 'Authentication Components & Features',
    description:
      'Anonymous session allowing app exploration before full account creation',
  },
  {
    id: 127,
    name: 'JWT Authentication',
    category: 'Authentication Components & Features',
    description: 'JSON Web Token-based stateless authentication flow',
  },
  {
    id: 128,
    name: 'Refresh Token',
    category: 'Authentication Components & Features',
    description:
      'Automatic silent access token refresh using secure refresh tokens',
  },
  {
    id: 129,
    name: 'Biometric Authentication',
    category: 'Authentication Components & Features',
    description:
      'Local biometric prompt for Face ID, Touch ID, and fingerprint',
  },
  {
    id: 130,
    name: 'Face ID',
    category: 'Authentication Components & Features',
    description: 'iOS facial recognition biometric authentication check',
  },
  {
    id: 131,
    name: 'Fingerprint Authentication',
    category: 'Authentication Components & Features',
    description: 'Android fingerprint / iOS Touch ID biometric verification',
  },
  {
    id: 132,
    name: 'PIN Lock',
    category: 'Authentication Components & Features',
    description:
      'Local 4 or 6-digit passcode lock screen protecting app access',
  },
  {
    id: 133,
    name: 'Two-Factor Authentication',
    category: 'Authentication Components & Features',
    description: '2FA security requiring a second verification factor',
  },
  {
    id: 134,
    name: 'Session Management',
    category: 'Authentication Components & Features',
    description:
      'Tracking session validity, activity timeouts, and device locks',
  },
  {
    id: 135,
    name: 'Role-Based Access Control',
    category: 'Authentication Components & Features',
    description:
      'Granular permission checks controlling view and feature access',
  },
  {
    id: 136,
    name: 'Text Input',
    category: 'Form Components & Features',
    description: 'Single-line user text entry control with theme styling',
  },
  {
    id: 137,
    name: 'Multiline Input',
    category: 'Form Components & Features',
    description: 'Multi-line text field for extended descriptions and comments',
  },
  {
    id: 138,
    name: 'Password Input',
    category: 'Form Components & Features',
    description: 'Masked input hiding sensitive password characters',
  },
  {
    id: 139,
    name: 'Email Input',
    category: 'Form Components & Features',
    description: 'Input with email keyboard layout and email regex validation',
  },
  {
    id: 140,
    name: 'Phone Input',
    category: 'Form Components & Features',
    description: 'Telephone keypad input with country calling code picker',
  },
  {
    id: 141,
    name: 'OTP Input',
    category: 'Form Components & Features',
    description: 'Structured multi-box input for verification codes',
  },
  {
    id: 142,
    name: 'Checkbox',
    category: 'Form Components & Features',
    description: 'Binary or group check control for agreement and options',
  },
  {
    id: 143,
    name: 'Radio Group',
    category: 'Form Components & Features',
    description: 'Single-choice selection group for mutually exclusive options',
  },
  {
    id: 144,
    name: 'Dropdown',
    category: 'Form Components & Features',
    description: 'Expandable select menu with filtered item list',
  },
  {
    id: 145,
    name: 'Multi-Select',
    category: 'Form Components & Features',
    description: 'Dropdown or modal allowing selection of multiple values',
  },
  {
    id: 146,
    name: 'Date Picker',
    category: 'Form Components & Features',
    description: 'Calendar-based date selection component',
  },
  {
    id: 147,
    name: 'Time Picker',
    category: 'Form Components & Features',
    description: 'Clock dial or wheel time selection control',
  },
  {
    id: 148,
    name: 'File Picker',
    category: 'Form Components & Features',
    description:
      'Document picker for selecting local PDF, CSV, and office files',
  },
  {
    id: 149,
    name: 'Image Picker',
    category: 'Form Components & Features',
    description: 'Camera or gallery selector for photos and graphics',
  },
  {
    id: 150,
    name: 'Form Validation',
    category: 'Form Components & Features',
    description:
      'Schema-based validation verifying field requirements before submission',
  },
  {
    id: 151,
    name: 'Required Field Validation',
    category: 'Form Components & Features',
    description: 'Validating that mandatory fields are not left blank',
  },
  {
    id: 152,
    name: 'Regex Validation',
    category: 'Form Components & Features',
    description:
      'Pattern-based format validation for phone, email, and postal codes',
  },
  {
    id: 153,
    name: 'Error Messages',
    category: 'Form Components & Features',
    description:
      'Contextual inline validation messages highlighting invalid inputs',
  },
  {
    id: 154,
    name: 'Form Submission',
    category: 'Form Components & Features',
    description:
      'Serializing form state and submitting to remote API endpoints',
  },
  {
    id: 155,
    name: 'Form Reset',
    category: 'Form Components & Features',
    description:
      'Clearing all form inputs and resetting errors to initial values',
  },
  {
    id: 156,
    name: 'Dynamic Forms',
    category: 'Form Components & Features',
    description:
      'Generating form fields dynamically based on JSON schema or server configuration',
  },
  {
    id: 157,
    name: 'Multi-Step Forms',
    category: 'Form Components & Features',
    description:
      'Stepped wizard breaking complex forms across manageable steps',
  },
  {
    id: 158,
    name: 'Keyboard Management',
    category: 'Form Components & Features',
    description:
      'Automatic keyboard dismissal on scroll and input offset management',
  },
  {
    id: 159,
    name: 'REST API',
    category: 'API & Data Components / Features',
    description:
      'Communicating with HTTP/HTTPS endpoints via standard REST conventions',
  },
  {
    id: 160,
    name: 'GraphQL',
    category: 'API & Data Components / Features',
    description: 'Querying and mutating data using GraphQL clients and schemas',
  },
  {
    id: 161,
    name: 'Axios',
    category: 'API & Data Components / Features',
    description:
      'Promise-based HTTP client for browser and node in React Native',
  },
  {
    id: 162,
    name: 'Fetch API',
    category: 'API & Data Components / Features',
    description: 'Native JavaScript fetch implementation for network requests',
  },
  {
    id: 163,
    name: 'Axios Interceptors',
    category: 'API & Data Components / Features',
    description:
      'Request/response middleware for auth headers and global errors',
  },
  {
    id: 164,
    name: 'API Error Handling',
    category: 'API & Data Components / Features',
    description:
      'Graceful handling of network timeouts, 4xx client, and 5xx server errors',
  },
  {
    id: 165,
    name: 'API Retry',
    category: 'API & Data Components / Features',
    description:
      'Automatic exponential backoff retry for failed or flaky network requests',
  },
  {
    id: 166,
    name: 'API Caching',
    category: 'API & Data Components / Features',
    description:
      'In-memory or persistent caching of API responses to reduce network calls',
  },
  {
    id: 167,
    name: 'Pagination',
    category: 'API & Data Components / Features',
    description: 'Page-based or offset-based incremental data fetching',
  },
  {
    id: 168,
    name: 'Infinite Scrolling',
    category: 'API & Data Components / Features',
    description:
      'Automatically loading next data page when reaching the list bottom',
  },
  {
    id: 169,
    name: 'Pull-to-Refresh',
    category: 'API & Data Components / Features',
    description: 'Refreshing list data by swiping down from the top',
  },
  {
    id: 170,
    name: 'Optimistic Updates',
    category: 'API & Data Components / Features',
    description:
      'Updating UI immediately before server confirmation, with rollback on error',
  },
  {
    id: 171,
    name: 'Request Cancellation',
    category: 'API & Data Components / Features',
    description: 'Canceling in-flight HTTP requests using AbortController',
  },
  {
    id: 172,
    name: 'File Upload',
    category: 'API & Data Components / Features',
    description:
      'Sending binary and image files to servers with progress tracking',
  },
  {
    id: 173,
    name: 'File Download',
    category: 'API & Data Components / Features',
    description: 'Downloading remote files and saving them to device storage',
  },
  {
    id: 174,
    name: 'Multipart Upload',
    category: 'API & Data Components / Features',
    description: 'Uploading multipart/form-data with image and json payloads',
  },
  {
    id: 175,
    name: 'API Authentication',
    category: 'API & Data Components / Features',
    description: 'Attaching Bearer tokens and API keys to outgoing requests',
  },
  {
    id: 176,
    name: 'Redux Toolkit',
    category: 'API & Data Components / Features',
    description:
      'Opinionated Redux framework for predictable global state management',
  },
  {
    id: 177,
    name: 'Zustand',
    category: 'API & Data Components / Features',
    description:
      'Minimalist, fast, and hook-based state management without boilerplate',
  },
  {
    id: 178,
    name: 'Context API',
    category: 'API & Data Components / Features',
    description:
      'React built-in dependency injection and state sharing context',
  },
  {
    id: 179,
    name: 'TanStack Query',
    category: 'API & Data Components / Features',
    description:
      'Server state management with auto-caching, deduplication, and background updates',
  },
  {
    id: 180,
    name: 'AsyncStorage',
    category: 'API & Data Components / Features',
    description:
      'Asynchronous, unencrypted, persistent key-value storage system',
  },
  {
    id: 181,
    name: 'MMKV',
    category: 'API & Data Components / Features',
    description:
      'Ultra-fast synchronous key-value storage library backed by mmap',
  },
  {
    id: 182,
    name: 'SQLite',
    category: 'API & Data Components / Features',
    description:
      'Embedded relational database for structured offline data querying',
  },
  {
    id: 183,
    name: 'Realm',
    category: 'API & Data Components / Features',
    description:
      'Mobile object database for reactive, high-performance data models',
  },
  {
    id: 184,
    name: 'Offline Storage',
    category: 'API & Data Components / Features',
    description:
      'Local data persistence enabling app functionality without an internet connection',
  },
  {
    id: 185,
    name: 'Data Synchronization',
    category: 'API & Data Components / Features',
    description:
      'Background syncing local offline changes with remote cloud servers',
  },
  {
    id: 186,
    name: 'Camera',
    category: 'Camera & Image Features',
    description: 'Hardware camera viewfinder component with live preview',
  },
  {
    id: 187,
    name: 'Photo Capture',
    category: 'Camera & Image Features',
    description:
      'Triggering still photo capture with resolution and quality options',
  },
  {
    id: 188,
    name: 'Video Capture',
    category: 'Camera & Image Features',
    description: 'Recording video clips directly through the device camera',
  },
  {
    id: 189,
    name: 'Front Camera',
    category: 'Camera & Image Features',
    description: 'Switching to front-facing selfie camera sensor',
  },
  {
    id: 190,
    name: 'Back Camera',
    category: 'Camera & Image Features',
    description:
      'Switching to rear primary, ultra-wide, or telephoto camera sensors',
  },
  {
    id: 191,
    name: 'Flash',
    category: 'Camera & Image Features',
    description: 'Controlling camera flash modes (off, on, auto, torch)',
  },
  {
    id: 192,
    name: 'Zoom',
    category: 'Camera & Image Features',
    description:
      'Pinch-to-zoom and slider controls for optical and digital zoom',
  },
  {
    id: 193,
    name: 'Focus',
    category: 'Camera & Image Features',
    description:
      'Tap-to-focus at specific coordinates with focus indicator animation',
  },
  {
    id: 194,
    name: 'Exposure Control',
    category: 'Camera & Image Features',
    description: 'Adjusting camera exposure compensation and shutter settings',
  },
  {
    id: 195,
    name: 'Gallery',
    category: 'Camera & Image Features',
    description: 'In-app media browser showing device photos and albums',
  },
  {
    id: 196,
    name: 'Image Picker',
    category: 'Camera & Image Features',
    description: 'Accessing the system photo library to pick images',
  },
  {
    id: 197,
    name: 'Multiple Image Picker',
    category: 'Camera & Image Features',
    description: 'Selecting multiple photos simultaneously with count limit',
  },
  {
    id: 198,
    name: 'Image Preview',
    category: 'Camera & Image Features',
    description: 'Full-screen image viewing mode with pan and zoom',
  },
  {
    id: 199,
    name: 'Image Cropper',
    category: 'Camera & Image Features',
    description:
      'Aspect ratio and freeform cropping for captured or picked images',
  },
  {
    id: 200,
    name: 'Image Editor',
    category: 'Camera & Image Features',
    description: 'Rotating, flipping, filtering, and annotating images',
  },
  {
    id: 201,
    name: 'Image Compression',
    category: 'Camera & Image Features',
    description: 'Reducing image file size and dimensions before uploading',
  },
  {
    id: 202,
    name: 'Image Filters',
    category: 'Camera & Image Features',
    description: 'Applying color filters (grayscale, sepia, vintage) to photos',
  },
  {
    id: 203,
    name: 'Image Upload',
    category: 'Camera & Image Features',
    description:
      'Transferring compressed images to cloud storage with progress',
  },
  {
    id: 204,
    name: 'Image Caching',
    category: 'Camera & Image Features',
    description: 'Caching downloaded remote images on disk and in memory',
  },
  {
    id: 205,
    name: 'Face Detection',
    category: 'Camera & Image Features',
    description:
      'ML-powered face detection identifying facial bounds and landmarks',
  },
  {
    id: 206,
    name: 'Object Detection',
    category: 'Camera & Image Features',
    description:
      'Localizing and labeling objects in photos using computer vision',
  },
  {
    id: 207,
    name: 'QR Code Scanner',
    category: 'Camera & Image Features',
    description: 'Real-time camera scanner decoding QR code payloads',
  },
  {
    id: 208,
    name: 'Barcode Scanner',
    category: 'Camera & Image Features',
    description: 'Real-time 1D/2D barcode reader for UPC, EAN, and Code128',
  },
  {
    id: 209,
    name: 'OCR',
    category: 'Camera & Image Features',
    description: 'Optical Character Recognition extracting text from images',
  },
  {
    id: 210,
    name: 'Document Scanner',
    category: 'Camera & Image Features',
    description:
      'Automatic edge detection, perspective correction, and document scanning',
  },
  {
    id: 211,
    name: 'Image Recognition',
    category: 'Camera & Image Features',
    description: 'Identifying objects, landmarks, and items in photos via ML',
  },
  {
    id: 212,
    name: 'Video Player',
    category: 'Video & Audio Features',
    description:
      'Video playback view with controls, fullscreen, and aspect ratio handling',
  },
  {
    id: 213,
    name: 'Video Recorder',
    category: 'Video & Audio Features',
    description:
      'Camera recording interface with duration timer and stop/pause',
  },
  {
    id: 214,
    name: 'Video Streaming',
    category: 'Video & Audio Features',
    description: 'Streaming live and on-demand video over network connections',
  },
  {
    id: 215,
    name: 'HLS Streaming',
    category: 'Video & Audio Features',
    description:
      'HTTP Live Streaming support for adaptive bitrate video streams',
  },
  {
    id: 216,
    name: 'DASH Streaming',
    category: 'Video & Audio Features',
    description: 'Dynamic Adaptive Streaming over HTTP for video delivery',
  },
  {
    id: 217,
    name: 'Adaptive Bitrate',
    category: 'Video & Audio Features',
    description:
      'Automatically adjusting video stream resolution to network conditions',
  },
  {
    id: 218,
    name: 'Video Compression',
    category: 'Video & Audio Features',
    description:
      'Compressing captured video files to reduce bandwidth and size',
  },
  {
    id: 219,
    name: 'Video Trimming',
    category: 'Video & Audio Features',
    description: 'Trimming start and end timestamps on recorded video clips',
  },
  {
    id: 220,
    name: 'Video Thumbnail',
    category: 'Video & Audio Features',
    description: 'Extracting image thumbnails from specific video timestamps',
  },
  {
    id: 221,
    name: 'Picture-in-Picture',
    category: 'Video & Audio Features',
    description:
      'Continuing video playback in a floating window over other apps',
  },
  {
    id: 222,
    name: 'Playback Controls',
    category: 'Video & Audio Features',
    description:
      'Play, pause, seek, volume, and fullscreen video control overlays',
  },
  {
    id: 223,
    name: 'Playback Speed',
    category: 'Video & Audio Features',
    description:
      'Controlling audio and video playback speed (0.5x, 1x, 1.5x, 2x)',
  },
  {
    id: 224,
    name: 'Audio Player',
    category: 'Video & Audio Features',
    description:
      'Playing local and remote audio files with background audio support',
  },
  {
    id: 225,
    name: 'Audio Recorder',
    category: 'Video & Audio Features',
    description: 'Recording voice notes and sound using the device microphone',
  },
  {
    id: 226,
    name: 'Voice Messages',
    category: 'Video & Audio Features',
    description:
      'Recording, sending, and playing WhatsApp-style voice audio clips',
  },
  {
    id: 227,
    name: 'Audio Streaming',
    category: 'Video & Audio Features',
    description: 'Streaming live radio and podcast audio over the internet',
  },
  {
    id: 228,
    name: 'Background Audio',
    category: 'Video & Audio Features',
    description:
      'Playing audio continuously when the app is minimized or device locked',
  },
  {
    id: 229,
    name: 'Text-to-Speech',
    category: 'Video & Audio Features',
    description: 'Synthesizing spoken audio output from written text strings',
  },
  {
    id: 230,
    name: 'Speech-to-Text',
    category: 'Video & Audio Features',
    description: 'Converting spoken microphone audio into transcribed text',
  },
  {
    id: 231,
    name: 'Audio Calling',
    category: 'Video & Audio Features',
    description: 'Real-time voice calling using VoIP protocols',
  },
  {
    id: 232,
    name: 'Video Calling',
    category: 'Video & Audio Features',
    description:
      'Two-way live video calling interface with camera and mic toggles',
  },
  {
    id: 233,
    name: 'WebRTC',
    category: 'Video & Audio Features',
    description:
      'Real-time peer-to-peer video, audio, and data streaming communication',
  },
  {
    id: 234,
    name: 'Real-Time Chat',
    category: 'Real-Time Features',
    description:
      'Instant messaging system with live message delivery and updates',
  },
  {
    id: 235,
    name: 'One-to-One Chat',
    category: 'Real-Time Features',
    description: 'Direct private messaging between two users',
  },
  {
    id: 236,
    name: 'Group Chat',
    category: 'Real-Time Features',
    description: 'Multi-user group messaging with member administration',
  },
  {
    id: 237,
    name: 'Typing Indicator',
    category: 'Real-Time Features',
    description:
      'Real-time animation showing when another user is composing a message',
  },
  {
    id: 238,
    name: 'Online Status',
    category: 'Real-Time Features',
    description: 'Live green dot indicator showing user online presence',
  },
  {
    id: 239,
    name: 'Offline Status',
    category: 'Real-Time Features',
    description: 'Displaying when a user is disconnected or away',
  },
  {
    id: 240,
    name: 'Last Seen',
    category: 'Real-Time Features',
    description: 'Timestamp indicating when a contact was last active',
  },
  {
    id: 241,
    name: 'Read Receipts',
    category: 'Real-Time Features',
    description:
      'Double blue checkmark indicator showing message has been viewed',
  },
  {
    id: 242,
    name: 'Delivery Receipts',
    category: 'Real-Time Features',
    description:
      'Confirmation that a message was successfully delivered to the device',
  },
  {
    id: 243,
    name: 'Message Reactions',
    category: 'Real-Time Features',
    description: 'Emoji reactions attached to individual chat messages',
  },
  {
    id: 244,
    name: 'Message Reply',
    category: 'Real-Time Features',
    description: 'Quoting and replying to specific previous messages in chat',
  },
  {
    id: 245,
    name: 'Message Forwarding',
    category: 'Real-Time Features',
    description: 'Sharing existing messages to other contacts or groups',
  },
  {
    id: 246,
    name: 'Message Editing',
    category: 'Real-Time Features',
    description: 'Modifying the text content of a previously sent message',
  },
  {
    id: 247,
    name: 'Message Deletion',
    category: 'Real-Time Features',
    description:
      'Deleting messages for yourself or recalling for all participants',
  },
  {
    id: 248,
    name: 'WebSocket',
    category: 'Real-Time Features',
    description:
      'Persistent bi-directional TCP connection for low-latency live events',
  },
  {
    id: 249,
    name: 'Socket.IO',
    category: 'Real-Time Features',
    description:
      'Real-time event-based communication library with fallback transports',
  },
  {
    id: 250,
    name: 'Live Location',
    category: 'Real-Time Features',
    description:
      'Real-time continuous GPS coordinate broadcasting and map tracking',
  },
  {
    id: 251,
    name: 'Live Tracking',
    category: 'Real-Time Features',
    description:
      'Watching courier, driver, or delivery location move in real-time',
  },
  {
    id: 252,
    name: 'Live Notifications',
    category: 'Real-Time Features',
    description:
      'Instant real-time alerts dispatched over live socket connections',
  },
  {
    id: 253,
    name: 'Live Updates',
    category: 'Real-Time Features',
    description: 'Dynamic screen updates without requiring manual page reload',
  },
  {
    id: 254,
    name: 'Presence Management',
    category: 'Real-Time Features',
    description:
      'Central tracking of connected user states, rooms, and channels',
  },
  {
    id: 255,
    name: 'Push Notifications',
    category: 'Notifications Features',
    description: 'Remote push notification alerts sent via FCM or Apple APNs',
  },
  {
    id: 256,
    name: 'Local Notifications',
    category: 'Notifications Features',
    description:
      'Notifications scheduled and displayed locally by the device itself',
  },
  {
    id: 257,
    name: 'Scheduled Notifications',
    category: 'Notifications Features',
    description:
      'Triggering notification alerts at a specific future date and time',
  },
  {
    id: 258,
    name: 'Firebase Cloud Messaging',
    category: 'Notifications Features',
    description: 'Google FCM push delivery for cross-platform notifications',
  },
  {
    id: 259,
    name: 'APNs',
    category: 'Notifications Features',
    description: 'Apple Push Notification service integration for iOS devices',
  },
  {
    id: 260,
    name: 'Rich Notifications',
    category: 'Notifications Features',
    description:
      'Notifications featuring images, media attachments, and interactive buttons',
  },
  {
    id: 261,
    name: 'Notification Badge',
    category: 'Notifications Features',
    description:
      'Numeric unread count badge displayed on the app home screen icon',
  },
  {
    id: 262,
    name: 'Notification Sound',
    category: 'Notifications Features',
    description: 'Custom audio chime played when a notification arrives',
  },
  {
    id: 263,
    name: 'Notification Channels',
    category: 'Notifications Features',
    description:
      'Android notification categories with customizable importance and sounds',
  },
  {
    id: 264,
    name: 'Foreground Notifications',
    category: 'Notifications Features',
    description:
      'Custom in-app banners displayed when notification arrives while app is open',
  },
  {
    id: 265,
    name: 'Background Notifications',
    category: 'Notifications Features',
    description: 'Processing notification payloads silently in the background',
  },
  {
    id: 266,
    name: 'Silent Notifications',
    category: 'Notifications Features',
    description:
      'Data-only push messages triggering background fetch without alerting the user',
  },
  {
    id: 267,
    name: 'Notification Actions',
    category: 'Notifications Features',
    description:
      'Quick action buttons embedded directly within notification banners',
  },
  {
    id: 268,
    name: 'Notification Deep Linking',
    category: 'Notifications Features',
    description:
      'Routing user directly to a target screen upon tapping a notification',
  },
  {
    id: 269,
    name: 'Notification Preferences',
    category: 'Notifications Features',
    description:
      'User settings screen to enable/disable specific notification topics',
  },
  {
    id: 270,
    name: 'Notification History',
    category: 'Notifications Features',
    description: 'In-app inbox listing past notifications received by the user',
  },
  {
    id: 271,
    name: 'GPS Location',
    category: 'Location & Maps Features',
    description:
      'Retrieving precise device geographical coordinates from GPS hardware',
  },
  {
    id: 272,
    name: 'Current Location',
    category: 'Location & Maps Features',
    description: 'One-time lookup of current latitude, longitude, and accuracy',
  },
  {
    id: 273,
    name: 'Live Location',
    category: 'Location & Maps Features',
    description: 'Real-time location stream updating as the device moves',
  },
  {
    id: 274,
    name: 'Background Location',
    category: 'Location & Maps Features',
    description:
      'Continuous location tracking while the app is closed or in background',
  },
  {
    id: 275,
    name: 'Google Maps',
    category: 'Location & Maps Features',
    description:
      'Google Maps SDK integration for interactive maps and street views',
  },
  {
    id: 276,
    name: 'Mapbox',
    category: 'Location & Maps Features',
    description: 'Highly customizable vector map SDK for mobile devices',
  },
  {
    id: 277,
    name: 'Map Markers',
    category: 'Location & Maps Features',
    description:
      'Placing pins and markers at specific coordinates on map surfaces',
  },
  {
    id: 278,
    name: 'Custom Markers',
    category: 'Location & Maps Features',
    description: 'Designing custom icons, badges, and callouts for map markers',
  },
  {
    id: 279,
    name: 'Map Clustering',
    category: 'Location & Maps Features',
    description:
      'Grouping nearby map markers into numbered clusters for performance',
  },
  {
    id: 280,
    name: 'Location Search',
    category: 'Location & Maps Features',
    description:
      'Searching for addresses, points of interest, and business venues',
  },
  {
    id: 281,
    name: 'Places Autocomplete',
    category: 'Location & Maps Features',
    description:
      'Predictive address suggestions as the user types a location query',
  },
  {
    id: 282,
    name: 'Geocoding',
    category: 'Location & Maps Features',
    description:
      'Converting human-readable addresses into latitude/longitude coordinates',
  },
  {
    id: 283,
    name: 'Reverse Geocoding',
    category: 'Location & Maps Features',
    description:
      'Converting GPS coordinates into street address and city names',
  },
  {
    id: 284,
    name: 'Route Drawing',
    category: 'Location & Maps Features',
    description:
      'Rendering polylines and routes connecting origin and destination points',
  },
  {
    id: 285,
    name: 'Distance Calculation',
    category: 'Location & Maps Features',
    description:
      'Calculating distance and estimated travel time between two coordinates',
  },
  {
    id: 286,
    name: 'Turn-by-Turn Navigation',
    category: 'Location & Maps Features',
    description:
      'Step-by-step driving and walking directions with compass bearing',
  },
  {
    id: 287,
    name: 'Geofencing',
    category: 'Location & Maps Features',
    description:
      'Triggering entry and exit events when crossing virtual geographic boundaries',
  },
  {
    id: 288,
    name: 'Nearby Places',
    category: 'Location & Maps Features',
    description:
      'Finding restaurants, ATMs, and stores within a specified radius',
  },
  {
    id: 289,
    name: 'Delivery Tracking',
    category: 'Location & Maps Features',
    description:
      'Live map displaying delivery rider position heading toward user address',
  },
  {
    id: 290,
    name: 'Driver Tracking',
    category: 'Location & Maps Features',
    description:
      'Real-time passenger map showing taxi driver approaching pickup spot',
  },
  {
    id: 291,
    name: 'Mlkit',
    category: 'AI & Machine Learning Features',
    description: 'On-device machine learning vision, detection & NLP tools',
    screen: 'MLKitMainMenu',
  },
  {
    id: 292,
    name: 'AI Chatbot',
    category: 'AI & Machine Learning Features',
    description:
      'Interactive conversational assistant powered by large language models',
  },
  {
    id: 293,
    name: 'AI Voice Assistant',
    category: 'AI & Machine Learning Features',
    description:
      'Spoken voice interaction processing natural language audio queries',
  },
  {
    id: 294,
    name: 'AI Image Recognition',
    category: 'AI & Machine Learning Features',
    description: 'Computer vision classifying and understanding image content',
  },
  {
    id: 295,
    name: 'AI Object Detection',
    category: 'AI & Machine Learning Features',
    description:
      'Detecting and bounding multiple distinct objects within an image',
  },
  {
    id: 296,
    name: 'AI Face Detection',
    category: 'AI & Machine Learning Features',
    description:
      'Analyzing facial orientation, contours, expressions, and landmarks',
  },
  {
    id: 297,
    name: 'AI Food Recognition',
    category: 'AI & Machine Learning Features',
    description:
      'Identifying food dishes from photos and estimating calories/macros',
  },
  {
    id: 298,
    name: 'AI Recommendations',
    category: 'AI & Machine Learning Features',
    description:
      'Personalized content and product recommendations based on user history',
  },
  {
    id: 299,
    name: 'AI Search',
    category: 'AI & Machine Learning Features',
    description:
      'Semantic search understanding user intent beyond exact keyword matching',
  },
  {
    id: 300,
    name: 'AI Image Generation',
    category: 'AI & Machine Learning Features',
    description:
      'Generating images and illustrations from natural language prompts',
  },
  {
    id: 301,
    name: 'AI Image Editing',
    category: 'AI & Machine Learning Features',
    description:
      'Inpainting, object removal, and background replacement using generative AI',
  },
  {
    id: 302,
    name: 'AI Content Moderation',
    category: 'AI & Machine Learning Features',
    description:
      'Automated filtering of inappropriate text, profanity, and offensive images',
  },
  {
    id: 303,
    name: 'AI Translation',
    category: 'AI & Machine Learning Features',
    description:
      'Context-aware neural translation between multiple global languages',
  },
  {
    id: 304,
    name: 'AI Summarization',
    category: 'AI & Machine Learning Features',
    description:
      'Condensing lengthy articles, documents, and transcripts into key summaries',
  },
  {
    id: 305,
    name: 'Speech Recognition',
    category: 'AI & Machine Learning Features',
    description: 'Transcribing spoken voice audio into text in real-time',
  },
  {
    id: 306,
    name: 'Text-to-Speech',
    category: 'AI & Machine Learning Features',
    description: 'Natural-sounding vocal synthesis from written text',
  },
  {
    id: 307,
    name: 'OCR',
    category: 'AI & Machine Learning Features',
    description:
      'High-accuracy optical character recognition for printed and handwritten text',
  },
  {
    id: 308,
    name: 'Sentiment Analysis',
    category: 'AI & Machine Learning Features',
    description:
      'Analyzing user feedback and messages to determine positive/negative tone',
  },
  {
    id: 309,
    name: 'Semantic Search',
    category: 'AI & Machine Learning Features',
    description:
      'Vector embedding search retrieving semantically similar documents',
  },
  {
    id: 310,
    name: 'LLM Integration',
    category: 'AI & Machine Learning Features',
    description:
      'Connecting with OpenAI, Anthropic, or Gemini APIs directly from mobile apps',
  },
  {
    id: 311,
    name: 'RAG Integration',
    category: 'AI & Machine Learning Features',
    description:
      'Retrieval-Augmented Generation connecting local knowledge bases to LLM prompts',
  },
  {
    id: 312,
    name: 'On-Device Machine Learning',
    category: 'AI & Machine Learning Features',
    description:
      'Running lightweight quantized ML models locally without internet',
  },
  {
    id: 313,
    name: 'Smart Photo Categorization',
    category: 'AI & Machine Learning Features',
    description:
      'Automatically tagging and sorting photo library into albums by content',
  },
  {
    id: 314,
    name: 'Camera',
    category: 'Device Native Features',
    description: 'Hardware camera access for capturing photos and videos',
  },
  {
    id: 315,
    name: 'Microphone',
    category: 'Device Native Features',
    description:
      'Audio hardware access for voice recording and audio monitoring',
  },
  {
    id: 316,
    name: 'Bluetooth',
    category: 'Device Native Features',
    description: 'Classic Bluetooth connectivity for pairing and data exchange',
  },
  {
    id: 317,
    name: 'Bluetooth Low Energy (BLE)',
    category: 'Device Native Features',
    description:
      'Power-efficient BLE scanning, GATT services, and peripheral communication',
  },
  {
    id: 318,
    name: 'NFC',
    category: 'Device Native Features',
    description:
      'Near Field Communication reading and writing RFID and NFC tags',
  },
  {
    id: 319,
    name: 'GPS',
    category: 'Device Native Features',
    description: 'Global Positioning System hardware receiver for positioning',
  },
  {
    id: 320,
    name: 'Accelerometer',
    category: 'Device Native Features',
    description:
      '3-axis motion sensor detecting device acceleration and movement forces',
  },
  {
    id: 321,
    name: 'Gyroscope',
    category: 'Device Native Features',
    description:
      'Sensor measuring rate of rotation around 3-axis spatial dimensions',
  },
  {
    id: 322,
    name: 'Magnetometer',
    category: 'Device Native Features',
    description:
      'Digital compass sensor detecting Earth magnetic field orientation',
  },
  {
    id: 323,
    name: 'Proximity Sensor',
    category: 'Device Native Features',
    description:
      'Sensor detecting face closeness during phone calls to turn off screen',
  },
  {
    id: 324,
    name: 'Ambient Light Sensor',
    category: 'Device Native Features',
    description: 'Sensor measuring surrounding light level for auto-brightness',
  },
  {
    id: 325,
    name: 'Fingerprint Sensor',
    category: 'Device Native Features',
    description: 'Biometric hardware scanner for fingerprint verification',
  },
  {
    id: 326,
    name: 'Face ID',
    category: 'Device Native Features',
    description:
      'TrueDepth camera biometric system for 3D facial authentication',
  },
  {
    id: 327,
    name: 'Flashlight',
    category: 'Device Native Features',
    description:
      'Device LED camera flash torch control with brightness adjustment',
  },
  {
    id: 328,
    name: 'Vibration',
    category: 'Device Native Features',
    description: 'Device haptic vibration motor control for feedback patterns',
  },
  {
    id: 329,
    name: 'Battery Status',
    category: 'Device Native Features',
    description:
      'Monitoring battery charge percentage, charging state, and thermal health',
  },
  {
    id: 330,
    name: 'Network Status',
    category: 'Device Native Features',
    description:
      'Inspecting cellular, Wi-Fi, ethernet connection and internet reachability',
  },
  {
    id: 331,
    name: 'Device Information',
    category: 'Device Native Features',
    description:
      'Inspecting device model, OS version, screen dimensions, and hardware specs',
  },
  {
    id: 332,
    name: 'Screen Orientation',
    category: 'Device Native Features',
    description:
      'Locking or detecting portrait and landscape orientation transitions',
  },
  {
    id: 333,
    name: 'Brightness Control',
    category: 'Device Native Features',
    description: 'Programmatically adjusting screen backlight brightness',
  },
  {
    id: 334,
    name: 'HealthKit',
    category: 'Device Native Features',
    description:
      'Apple HealthKit integration reading steps, heart rate, and workouts',
  },
  {
    id: 335,
    name: 'Android Health Connect',
    category: 'Device Native Features',
    description: 'Centralized health and fitness data exchange for Android',
  },
  {
    id: 336,
    name: 'Wearable Integration',
    category: 'Device Native Features',
    description: 'Communicating with Apple Watch and Wear OS smartwatches',
  },
  {
    id: 337,
    name: 'Native Modules',
    category: 'Device Native Features',
    description: 'Custom Objective-C, Swift, Java, or Kotlin bridge modules',
  },
  {
    id: 338,
    name: 'TurboModules',
    category: 'Device Native Features',
    description: 'New architecture lazy-loaded synchronous native modules',
  },
  {
    id: 339,
    name: 'JSI',
    category: 'Device Native Features',
    description:
      'JavaScript Interface enabling direct C++ to JavaScript memory access',
  },
  {
    id: 340,
    name: 'Fabric',
    category: 'Device Native Features',
    description: 'React Native concurrent native rendering engine',
  },
  {
    id: 341,
    name: 'Android Kotlin Integration',
    category: 'Device Native Features',
    description:
      'Interfacing React Native directly with native Kotlin Android code',
  },
  {
    id: 342,
    name: 'iOS Swift Integration',
    category: 'Device Native Features',
    description: 'Interfacing React Native directly with native Swift iOS code',
  },
  {
    id: 343,
    name: 'AsyncStorage',
    category: 'Storage & Offline Features',
    description: 'Basic asynchronous unencrypted key-value storage',
  },
  {
    id: 344,
    name: 'MMKV',
    category: 'Storage & Offline Features',
    description: 'Blazing-fast memory-mapped synchronous key-value store',
  },
  {
    id: 345,
    name: 'Secure Storage',
    category: 'Storage & Offline Features',
    description: 'Keychain and Keystore-backed encrypted key-value store',
  },
  {
    id: 346,
    name: 'Keychain',
    category: 'Storage & Offline Features',
    description: 'iOS Keychain service for sensitive passwords and credentials',
  },
  {
    id: 347,
    name: 'Keystore',
    category: 'Storage & Offline Features',
    description:
      'Android system service protecting cryptographic keys in hardware',
  },
  {
    id: 348,
    name: 'SQLite',
    category: 'Storage & Offline Features',
    description:
      'Embedded relational database for structured queries and relationships',
  },
  {
    id: 349,
    name: 'Realm',
    category: 'Storage & Offline Features',
    description:
      'Mobile object database with live queries and reactive listeners',
  },
  {
    id: 350,
    name: 'Local Database',
    category: 'Storage & Offline Features',
    description:
      'On-device database architecture for offline-first applications',
  },
  {
    id: 351,
    name: 'Offline Mode',
    category: 'Storage & Offline Features',
    description:
      'Detecting network loss and enabling full cached app functionality',
  },
  {
    id: 352,
    name: 'Offline Caching',
    category: 'Storage & Offline Features',
    description: 'Caching images, API responses, and assets on local disk',
  },
  {
    id: 353,
    name: 'Offline Synchronization',
    category: 'Storage & Offline Features',
    description:
      'Synchronizing local offline changes with server once reconnected',
  },
  {
    id: 354,
    name: 'Background Sync',
    category: 'Storage & Offline Features',
    description:
      'Syncing data in background using WorkManager and Background Fetch',
  },
  {
    id: 355,
    name: 'Data Persistence',
    category: 'Storage & Offline Features',
    description:
      'Automatically saving app state so user never loses their work',
  },
  {
    id: 356,
    name: 'Queue Requests',
    category: 'Storage & Offline Features',
    description:
      'Storing failed requests in a local queue and replaying on network reconnection',
  },
  {
    id: 357,
    name: 'Conflict Resolution',
    category: 'Storage & Offline Features',
    description:
      'Handling data conflict merge policies between local and remote updates',
  },
  {
    id: 358,
    name: 'Automatic Sync',
    category: 'Storage & Offline Features',
    description: 'Polling and event-driven background sync keeping data fresh',
  },
  {
    id: 359,
    name: 'File Storage',
    category: 'Storage & Offline Features',
    description:
      'Accessing device document, cache, and temporary directory file systems',
  },
  {
    id: 360,
    name: 'Product Listing',
    category: 'E-commerce Features',
    description:
      'Grid and list view displaying catalog products with photos and prices',
  },
  {
    id: 361,
    name: 'Product Details',
    category: 'E-commerce Features',
    description:
      'Screen displaying product gallery, variants, specs, and add-to-cart CTA',
  },
  {
    id: 362,
    name: 'Product Search',
    category: 'E-commerce Features',
    description:
      'Search bar with instant suggestions and recent search history',
  },
  {
    id: 363,
    name: 'Product Filters',
    category: 'E-commerce Features',
    description:
      'Filtering products by price range, brand, color, size, and rating',
  },
  {
    id: 364,
    name: 'Product Sorting',
    category: 'E-commerce Features',
    description:
      'Sorting product catalog by price, popularity, novelty, and rating',
  },
  {
    id: 365,
    name: 'Product Categories',
    category: 'E-commerce Features',
    description:
      'Hierarchical category tree for browsing departmental catalogs',
  },
  {
    id: 366,
    name: 'Shopping Cart',
    category: 'E-commerce Features',
    description:
      'Itemized cart screen with quantity selectors, promo codes, and subtotal',
  },
  {
    id: 367,
    name: 'Wishlist',
    category: 'E-commerce Features',
    description:
      'Saved items collection allowing users to bookmark favorites for later purchase',
  },
  {
    id: 368,
    name: 'Product Reviews',
    category: 'E-commerce Features',
    description:
      'Customer reviews section with star ratings, photos, and verified badges',
  },
  {
    id: 369,
    name: 'Product Ratings',
    category: 'E-commerce Features',
    description: 'Aggregated rating distribution breakdown and score summary',
  },
  {
    id: 370,
    name: 'Checkout',
    category: 'E-commerce Features',
    description:
      'Multi-step checkout screen handling shipping address, shipping method, and payment',
  },
  {
    id: 371,
    name: 'Payment Gateway',
    category: 'E-commerce Features',
    description:
      'Integration with payment service providers for credit card transactions',
  },
  {
    id: 372,
    name: 'Stripe',
    category: 'E-commerce Features',
    description:
      'Stripe SDK integration for cards, Apple Pay, and Google Pay processing',
  },
  {
    id: 373,
    name: 'PayPal',
    category: 'E-commerce Features',
    description: 'PayPal SDK integration for one-touch express payments',
  },
  {
    id: 374,
    name: 'Easypaisa',
    category: 'E-commerce Features',
    description:
      'Mobile wallet and payment gateway integration for Easypaisa payments',
  },
  {
    id: 375,
    name: 'JazzCash',
    category: 'E-commerce Features',
    description:
      'Mobile wallet payment gateway integration for JazzCash accounts',
  },
  {
    id: 376,
    name: 'Apple Pay',
    category: 'E-commerce Features',
    description:
      'Native one-touch payment authorization using Apple Pay wallet',
  },
  {
    id: 377,
    name: 'Google Pay',
    category: 'E-commerce Features',
    description:
      'Native one-touch checkout authorization using Google Pay wallet',
  },
  {
    id: 378,
    name: 'Cash on Delivery',
    category: 'E-commerce Features',
    description:
      'Order placement with COD payment terms upon physical delivery',
  },
  {
    id: 379,
    name: 'Coupons',
    category: 'E-commerce Features',
    description:
      'Promo code input applying percentage or fixed-amount discounts to cart',
  },
  {
    id: 380,
    name: 'Discounts',
    category: 'E-commerce Features',
    description:
      'Sale badges, strike-through original prices, and promotional savings',
  },
  {
    id: 381,
    name: 'Order History',
    category: 'E-commerce Features',
    description:
      'List of past customer orders with status, date, and re-order button',
  },
  {
    id: 382,
    name: 'Order Tracking',
    category: 'E-commerce Features',
    description:
      'Visual tracking progress bar showing order stages from packing to delivery',
  },
  {
    id: 383,
    name: 'Invoice',
    category: 'E-commerce Features',
    description:
      'PDF and digital invoice generation with tax breakdown and order details',
  },
  {
    id: 384,
    name: 'Digital Wallet',
    category: 'E-commerce Features',
    description:
      'In-app balance wallet allowing top-up and instant payment deductions',
  },
  {
    id: 385,
    name: 'Subscription Payments',
    category: 'E-commerce Features',
    description: 'Recurring recurring billing and subscription plan management',
  },
  {
    id: 386,
    name: 'User Profile',
    category: 'Social Media Features',
    description:
      'Public user profile with avatar, bio, follower stats, and post grid',
  },
  {
    id: 387,
    name: 'News Feed',
    category: 'Social Media Features',
    description:
      'Algorithmic or chronological stream of posts from followed users',
  },
  {
    id: 388,
    name: 'Posts',
    category: 'Social Media Features',
    description:
      'Image, video, and text post creator with caption and location tags',
  },
  {
    id: 389,
    name: 'Stories',
    category: 'Social Media Features',
    description:
      '24-hour disappearing photo and video story sequence with tap navigation',
  },
  {
    id: 390,
    name: 'Reels',
    category: 'Social Media Features',
    description:
      'Full-screen vertical short-form video feed with swipe-up scrolling',
  },
  {
    id: 391,
    name: 'Likes',
    category: 'Social Media Features',
    description: 'Heart reaction button with animated burst and like count',
  },
  {
    id: 392,
    name: 'Comments',
    category: 'Social Media Features',
    description: 'Threaded comment section allowing users to discuss posts',
  },
  {
    id: 393,
    name: 'Replies',
    category: 'Social Media Features',
    description: 'Nested replies responding directly to specific comments',
  },
  {
    id: 394,
    name: 'Sharing',
    category: 'Social Media Features',
    description:
      'Re-sharing posts to stories, direct messages, or external apps',
  },
  {
    id: 395,
    name: 'Bookmarks',
    category: 'Social Media Features',
    description: 'Saving posts to private collections for later viewing',
  },
  {
    id: 396,
    name: 'Follow / Unfollow',
    category: 'Social Media Features',
    description: 'Following user accounts to populate personal feed',
  },
  {
    id: 397,
    name: 'Friend Requests',
    category: 'Social Media Features',
    description: 'Sending, accepting, and declining friend requests',
  },
  {
    id: 398,
    name: 'Followers',
    category: 'Social Media Features',
    description: 'Screen displaying accounts that follow the user',
  },
  {
    id: 399,
    name: 'Following',
    category: 'Social Media Features',
    description:
      'Screen displaying accounts that the user is currently following',
  },
  {
    id: 400,
    name: 'Hashtags',
    category: 'Social Media Features',
    description:
      'Clickable hashtags categorizing content with dedicated hashtag feeds',
  },
  {
    id: 401,
    name: 'Mentions',
    category: 'Social Media Features',
    description:
      'Tagging user handles in captions and comments with auto-complete',
  },
  {
    id: 402,
    name: 'User Tagging',
    category: 'Social Media Features',
    description: 'Tagging user profiles on specific coordinates of photos',
  },
  {
    id: 403,
    name: 'Trending',
    category: 'Social Media Features',
    description:
      'Discovering viral topics, popular hashtags, and trending creators',
  },
  {
    id: 404,
    name: 'Explore',
    category: 'Social Media Features',
    description:
      'Algorithmic discovery grid showing recommendations based on user interests',
  },
  {
    id: 405,
    name: 'Groups',
    category: 'Social Media Features',
    description:
      'Community spaces where members share posts around specific niches',
  },
  {
    id: 406,
    name: 'Polls',
    category: 'Social Media Features',
    description:
      'Interactive voting stickers and poll widgets with real-time percentage results',
  },
  {
    id: 407,
    name: 'Events',
    category: 'Social Media Features',
    description:
      'Event creation with RSVP management, location maps, and calendar sync',
  },
  {
    id: 408,
    name: 'Live Streaming',
    category: 'Social Media Features',
    description:
      'Broadcasting live video streams with real-time floating comments and gifts',
  },
  {
    id: 409,
    name: 'Reporting',
    category: 'Social Media Features',
    description:
      'Flagging offensive posts, spam, and inappropriate profiles for review',
  },
  {
    id: 410,
    name: 'Blocking',
    category: 'Social Media Features',
    description:
      'Restricting specific users from viewing profile and contacting',
  },
  {
    id: 411,
    name: 'Content Moderation',
    category: 'Social Media Features',
    description:
      'Automated and manual moderation keeping community guidelines upheld',
  },
  {
    id: 412,
    name: 'React.memo',
    category: 'Performance Features',
    description:
      'Memoizing functional components to prevent unnecessary re-renders',
  },
  {
    id: 413,
    name: 'useMemo',
    category: 'Performance Features',
    description:
      'Caching computed values across renders to avoid expensive recalculations',
  },
  {
    id: 414,
    name: 'useCallback',
    category: 'Performance Features',
    description:
      'Memoizing callback function instances to preserve child component references',
  },
  {
    id: 415,
    name: 'FlatList Optimization',
    category: 'Performance Features',
    description:
      'Tuning initialNumToRender, maxToRenderPerBatch, and windowSize',
  },
  {
    id: 416,
    name: 'FlashList',
    category: 'Performance Features',
    description: 'High-performance list component from Shopify recycling views',
  },
  {
    id: 417,
    name: 'Virtualization',
    category: 'Performance Features',
    description:
      'Only rendering visible viewport items to minimize memory usage',
  },
  {
    id: 418,
    name: 'Lazy Loading',
    category: 'Performance Features',
    description:
      'Deferring loading of non-critical components and screens until needed',
  },
  {
    id: 419,
    name: 'Image Caching',
    category: 'Performance Features',
    description:
      'Storing decoded images in memory and disk cache for instantaneous display',
  },
  {
    id: 420,
    name: 'Bundle Optimization',
    category: 'Performance Features',
    description:
      'Reducing JavaScript bundle size through tree-shaking and minification',
  },
  {
    id: 421,
    name: 'Hermes',
    category: 'Performance Features',
    description:
      'Lightweight JavaScript engine optimized for running React Native on mobile',
  },
  {
    id: 422,
    name: 'Memory Optimization',
    category: 'Performance Features',
    description:
      'Detecting memory leaks and unregistering event listeners properly',
  },
  {
    id: 423,
    name: 'Render Optimization',
    category: 'Performance Features',
    description:
      'Minimizing component tree depth and eliminating redundant renders',
  },
  {
    id: 424,
    name: 'Startup Optimization',
    category: 'Performance Features',
    description:
      'Streamlining app initialization sequence for faster time-to-interactive',
  },
  {
    id: 425,
    name: 'Code Splitting',
    category: 'Performance Features',
    description:
      'Dynamically importing modules only when their feature is accessed',
  },
  {
    id: 426,
    name: 'Debouncing',
    category: 'Performance Features',
    description:
      'Delaying function execution until a pause in rapid user events (e.g., search)',
  },
  {
    id: 427,
    name: 'Throttling',
    category: 'Performance Features',
    description:
      'Enforcing a maximum rate of function executions over time (e.g., scroll)',
  },
  {
    id: 428,
    name: 'Background Processing',
    category: 'Performance Features',
    description:
      'Offloading heavy computation to background threads or workers',
  },
  {
    id: 429,
    name: 'Performance Monitoring',
    category: 'Performance Features',
    description:
      'Real-time tracking of FPS, CPU usage, memory, and network latency',
  },
  {
    id: 430,
    name: 'HTTPS',
    category: 'Security Features',
    description:
      'Enforcing encrypted communication over TLS for all API traffic',
  },
  {
    id: 431,
    name: 'SSL / TLS',
    category: 'Security Features',
    description:
      'Secure socket layer cryptographic protocols ensuring data privacy',
  },
  {
    id: 432,
    name: 'JWT',
    category: 'Security Features',
    description:
      'JSON Web Tokens containing signed claims for authenticated sessions',
  },
  {
    id: 433,
    name: 'Secure Token Storage',
    category: 'Security Features',
    description:
      'Storing authentication tokens in iOS Keychain and Android Keystore',
  },
  {
    id: 434,
    name: 'Keychain',
    category: 'Security Features',
    description:
      'Hardware-backed secure storage for sensitive credentials on iOS',
  },
  {
    id: 435,
    name: 'Keystore',
    category: 'Security Features',
    description:
      'Android system service protecting cryptographic keys in hardware',
  },
  {
    id: 436,
    name: 'Certificate Pinning',
    category: 'Security Features',
    description:
      'Hardcoding server SSL certificate hashes to prevent MITM attacks',
  },
  {
    id: 437,
    name: 'Biometric Security',
    category: 'Security Features',
    description:
      'Authenticating users before viewing sensitive banking or personal data',
  },
  {
    id: 438,
    name: 'API Authorization',
    category: 'Security Features',
    description:
      'Validating access permissions and bearer token scopes on endpoints',
  },
  {
    id: 439,
    name: 'Input Validation',
    category: 'Security Features',
    description:
      'Sanitizing and validating user inputs to protect against injection attacks',
  },
  {
    id: 440,
    name: 'Data Encryption',
    category: 'Security Features',
    description:
      'Encrypting local files and SQLite databases with AES-256 encryption',
  },
  {
    id: 441,
    name: 'Session Expiration',
    category: 'Security Features',
    description:
      'Automatically invalidating tokens after defined periods of inactivity',
  },
  {
    id: 442,
    name: 'Auto Logout',
    category: 'Security Features',
    description:
      'Logging out user and clearing cache when app is idle or backgrounded',
  },
  {
    id: 443,
    name: 'Root Detection',
    category: 'Security Features',
    description:
      'Detecting rooted Android devices that compromise security sandboxes',
  },
  {
    id: 444,
    name: 'Jailbreak Detection',
    category: 'Security Features',
    description:
      'Detecting jailbroken iOS devices with altered system permissions',
  },
  {
    id: 445,
    name: 'App Integrity',
    category: 'Security Features',
    description:
      'Verifying that app binary has not been tampered with or modified',
  },
  {
    id: 446,
    name: 'Screenshot Prevention',
    category: 'Security Features',
    description:
      'Disabling screen capture and screen recording on sensitive screens',
  },
  {
    id: 447,
    name: 'Privacy Permissions',
    category: 'Security Features',
    description:
      'Asking for runtime camera, mic, and location permissions with clear rationale',
  },
  {
    id: 448,
    name: 'Sensitive Data Masking',
    category: 'Security Features',
    description: 'Masking credit card numbers, passwords, and PII on display',
  },
  {
    id: 449,
    name: 'Jest',
    category: 'Testing & Deployment Features',
    description:
      'JavaScript testing framework for running unit and integration tests',
  },
  {
    id: 450,
    name: 'React Native Testing Library',
    category: 'Testing & Deployment Features',
    description: 'Testing React Native components from user perspective',
  },
  {
    id: 451,
    name: 'Detox',
    category: 'Testing & Deployment Features',
    description:
      'Gray-box end-to-end testing and automation framework for mobile apps',
  },
  {
    id: 452,
    name: 'Maestro',
    category: 'Testing & Deployment Features',
    description:
      'Simple, fast mobile UI automation tool for flows and regression testing',
  },
  {
    id: 453,
    name: 'Appium',
    category: 'Testing & Deployment Features',
    description:
      'Open-source test automation framework for native mobile applications',
  },
  {
    id: 454,
    name: 'Unit Testing',
    category: 'Testing & Deployment Features',
    description:
      'Testing individual functions, utilities, and isolated components',
  },
  {
    id: 455,
    name: 'Integration Testing',
    category: 'Testing & Deployment Features',
    description:
      'Verifying that multiple components and API services work together',
  },
  {
    id: 456,
    name: 'E2E Testing',
    category: 'Testing & Deployment Features',
    description:
      'End-to-end automated testing simulating real user journeys through the app',
  },
  {
    id: 457,
    name: 'UI Testing',
    category: 'Testing & Deployment Features',
    description:
      'Automated visual assertions checking component layouts and interactions',
  },
  {
    id: 458,
    name: 'Snapshot Testing',
    category: 'Testing & Deployment Features',
    description:
      'Capturing component renders to detect unexpected visual changes',
  },
  {
    id: 459,
    name: 'Firebase Crashlytics',
    category: 'Testing & Deployment Features',
    description:
      'Real-time crash reporting and stack trace tracking for production apps',
  },
  {
    id: 460,
    name: 'Sentry',
    category: 'Testing & Deployment Features',
    description:
      'Application monitoring and error tracking with breadcrumbs and performance metrics',
  },
  {
    id: 461,
    name: 'Firebase Analytics',
    category: 'Testing & Deployment Features',
    description:
      'Tracking user engagement, custom events, and conversion funnels',
  },
  {
    id: 462,
    name: 'CI/CD',
    category: 'Testing & Deployment Features',
    description: 'Automated continuous integration and deployment pipelines',
  },
  {
    id: 463,
    name: 'GitHub Actions',
    category: 'Testing & Deployment Features',
    description:
      'Running tests, linter, and build workflows automatically on pull requests',
  },
  {
    id: 464,
    name: 'Fastlane',
    category: 'Testing & Deployment Features',
    description:
      'Automating screenshot capture, code signing, beta deployment, and store releases',
  },
  {
    id: 465,
    name: 'APK Build',
    category: 'Testing & Deployment Features',
    description:
      'Building Android Application Package files for testing and sideloading',
  },
  {
    id: 466,
    name: 'AAB Build',
    category: 'Testing & Deployment Features',
    description:
      'Building Android App Bundles optimized for Google Play Store delivery',
  },
  {
    id: 467,
    name: 'IPA Build',
    category: 'Testing & Deployment Features',
    description:
      'Building iOS application archive files signed for ad-hoc or App Store release',
  },
  {
    id: 468,
    name: 'Google Play Store',
    category: 'Testing & Deployment Features',
    description:
      'Publishing and managing app releases on the Google Play Console',
  },
  {
    id: 469,
    name: 'Apple App Store',
    category: 'Testing & Deployment Features',
    description:
      'Submitting builds and managing review processes on App Store Connect',
  },
  {
    id: 470,
    name: 'OTA Updates',
    category: 'Testing & Deployment Features',
    description:
      'Over-the-air JavaScript bundle updates delivered directly to user devices',
  },
  {
    id: 471,
    name: 'Release Management',
    category: 'Testing & Deployment Features',
    description: 'Staged rollouts, release notes, and version tracking',
  },
  {
    id: 472,
    name: 'VoiceOver',
    category: 'Accessibility & Localization',
    description:
      'Apple screen reader accessibility support for visually impaired users',
  },
  {
    id: 473,
    name: 'TalkBack',
    category: 'Accessibility & Localization',
    description:
      'Android screen reader accessibility support with vocal announcements',
  },
  {
    id: 474,
    name: 'Accessible Labels',
    category: 'Accessibility & Localization',
    description:
      'Providing descriptive accessibilityLabel props on interactive elements',
  },
  {
    id: 475,
    name: 'Accessible Roles',
    category: 'Accessibility & Localization',
    description:
      'Assigning semantic accessibilityRole attributes (button, link, header)',
  },
  {
    id: 476,
    name: 'Accessibility Hints',
    category: 'Accessibility & Localization',
    description:
      'Supplying accessibilityHint instructions explaining action results',
  },
  {
    id: 477,
    name: 'Dynamic Font Scaling',
    category: 'Accessibility & Localization',
    description:
      'Supporting OS-level text size adjustments without breaking layouts',
  },
  {
    id: 478,
    name: 'High Contrast',
    category: 'Accessibility & Localization',
    description:
      'Adapting app color contrast to meet WCAG accessibility standards',
  },
  {
    id: 479,
    name: 'Screen Reader Support',
    category: 'Accessibility & Localization',
    description:
      'Optimizing navigation focus order for assistive screen readers',
  },
  {
    id: 480,
    name: 'Keyboard Navigation',
    category: 'Accessibility & Localization',
    description:
      'Supporting external hardware keyboard navigation and focus rings',
  },
  {
    id: 481,
    name: 'RTL Support',
    category: 'Accessibility & Localization',
    description:
      'Right-to-Left layout mirroring for Arabic, Hebrew, and Persian languages',
  },
  {
    id: 482,
    name: 'Multi-Language Support',
    category: 'Accessibility & Localization',
    description:
      'Internationalization framework supporting dynamic language switching',
  },
  {
    id: 483,
    name: 'Localization',
    category: 'Accessibility & Localization',
    description:
      'Adapting app assets, strings, and layouts to specific geographical regions',
  },
  {
    id: 484,
    name: 'Translation',
    category: 'Accessibility & Localization',
    description:
      'Managing localized string translation files across multiple language codes',
  },
  {
    id: 485,
    name: 'Currency Formatting',
    category: 'Accessibility & Localization',
    description:
      'Formatting price figures with appropriate currency symbols and decimals',
  },
  {
    id: 486,
    name: 'Date Formatting',
    category: 'Accessibility & Localization',
    description:
      'Displaying dates according to locale conventions (DD/MM vs MM/DD)',
  },
  {
    id: 487,
    name: 'Number Formatting',
    category: 'Accessibility & Localization',
    description:
      'Localized formatting of thousands separators and decimal points',
  },
  {
    id: 488,
    name: 'App Widgets',
    category: 'Advanced App Features',
    description:
      'Home screen mini-application widgets for quick glanceable info',
  },
  {
    id: 489,
    name: 'iOS Widgets',
    category: 'Advanced App Features',
    description: 'Native WidgetKit widgets for iOS home and lock screens',
  },
  {
    id: 490,
    name: 'Android Widgets',
    category: 'Advanced App Features',
    description: 'Native AppWidgetProvider widgets on Android home screen',
  },
  {
    id: 491,
    name: 'Live Activities',
    category: 'Advanced App Features',
    description: 'Real-time dynamic glanceable updates on the iOS lock screen',
  },
  {
    id: 492,
    name: 'Dynamic Island',
    category: 'Advanced App Features',
    description:
      'Interactive status and activity display in the iPhone Dynamic Island',
  },
  {
    id: 493,
    name: 'Background Services',
    category: 'Advanced App Features',
    description: 'Running persistent background processing services on Android',
  },
  {
    id: 494,
    name: 'App Extensions',
    category: 'Advanced App Features',
    description:
      'Share extensions, action extensions, and notification service extensions',
  },
  {
    id: 495,
    name: 'Deep Linking',
    category: 'Advanced App Features',
    description:
      'Handling URL schemes that launch users into specific in-app content',
  },
  {
    id: 496,
    name: 'Universal Links',
    category: 'Advanced App Features',
    description:
      'Domain-verified web links that seamlessly route into iOS apps',
  },
  {
    id: 497,
    name: 'In-App Purchases',
    category: 'Advanced App Features',
    description:
      'Digital goods, consumable items, and one-time purchases via app stores',
  },
  {
    id: 498,
    name: 'Subscription Management',
    category: 'Advanced App Features',
    description: 'Auto-renewable subscription tiers, free trials, and paywalls',
  },
  {
    id: 499,
    name: 'Remote Config',
    category: 'Advanced App Features',
    description:
      'Updating app behavior, strings, and appearance dynamically from cloud without app updates',
  },
  {
    id: 500,
    name: 'Feature Flags',
    category: 'Advanced App Features',
    description:
      'Toggling new features on or off remotely for specific user cohorts',
  },
  {
    id: 501,
    name: 'A/B Testing',
    category: 'Advanced App Features',
    description:
      'Running split tests comparing conversion between alternative UI variants',
  },
  {
    id: 502,
    name: 'Analytics',
    category: 'Advanced App Features',
    description:
      'Event tracking and user behavior analytics monitoring retention and usage',
  },
  {
    id: 503,
    name: 'Crash Reporting',
    category: 'Advanced App Features',
    description:
      'Immediate notification and diagnostic reports on production crashes',
  },
  {
    id: 504,
    name: 'OTA Updates',
    category: 'Advanced App Features',
    description:
      'Instant over-the-air code push updates bypassing app store review cycles',
  },
  {
    id: 505,
    name: 'App Version Management',
    category: 'Advanced App Features',
    description:
      'Enforcing minimum app version checks and prompting store updates',
  },
  {
    id: 506,
    name: 'Multi-Environment Configuration',
    category: 'Advanced App Features',
    description:
      'Managing staging, development, and production environment configs',
  },
  {
    id: 507,
    name: 'New Architecture',
    category: 'Advanced App Features',
    description:
      'React Native New Architecture with Fabric rendering and TurboModules',
  },
  {
    id: 508,
    name: 'Bridgeless Mode',
    category: 'Advanced App Features',
    description:
      'Running React Native without the legacy asynchronous JSON bridge',
  },
];

export const mlkitList: MLKitItem[] = [
  {
    id: 1,
    name: 'Face Detection',
    screen: 'FaceDetection',
    description:
      'Detect faces, facial landmarks, contours, and emotions in photos',
  },
  {
    id: 2,
    name: 'Image Labelling',
    screen: 'ImageLabelling',
    description: 'Identify 400+ categories of objects, entities, and scenes',
  },
  {
    id: 3,
    name: 'Food Detection',
    screen: 'FoodDetection',
    description:
      'Detect food items, estimate calories, and analyze nutritional macros',
  },
  {
    id: 4,
    name: 'Text Recognition (OCR)',
    screen: 'TextRecognition',
    description:
      'Extract text from images in Latin, Chinese, Devanagari, and Japanese',
  },
  {
    id: 5,
    name: 'Barcode & QR Scanning',
    description: 'Scan standard 1D and 2D barcode formats in any orientation',
  },
  {
    id: 6,
    name: 'Object Detection & Tracking',
    description:
      'Localize and track multiple objects in real-time camera streams',
  },
  {
    id: 7,
    name: 'Pose Detection',
    description:
      'Detect 33 skeletal body landmarks for fitness and motion tracking',
  },
  {
    id: 8,
    name: 'Selfie & Person Segmentation',
    description:
      'Separate background from subjects to apply blur or virtual backgrounds',
  },
  {
    id: 9,
    name: 'Digital Ink Recognition',
    description:
      'Recognize handwritten text and drawn sketches in 300+ languages',
  },
  {
    id: 10,
    name: 'Language Identification',
    description: 'Detect the language of text snippets from 100+ languages',
  },
  {
    id: 11,
    name: 'On-Device Translation',
    description:
      'Translate text dynamically between 50+ language pairs offline',
  },
  {
    id: 12,
    name: 'Smart Reply',
    description:
      'Generate contextual quick reply suggestions from chat conversations',
  },
  {
    id: 13,
    name: 'Entity Extraction',
    description:
      'Extract dates, addresses, flight numbers, and phone numbers from text',
  },
  {
    id: 14,
    name: 'Document Scanner',
    description:
      'Detect document edges, correct perspective, and produce clean scans',
  },
];

export const componentCategories = [
  'All',
  'Core React Native Components',
  'UI Components',
] as const;

export type ComponentCategory = (typeof componentCategories)[number];

export const componentsList: ComponentItem[] = featuresList.filter(
  item =>
    item.category === 'Core React Native Components' ||
    item.category === 'UI Components',
);
