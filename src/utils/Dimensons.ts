import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function height(percent: number) {
  if (percent >= 100) return windowHeight;
  if (percent <= 0) return 0;
  return (percent / 100) * windowHeight;
}

export function width(percent: number) {
  if (percent >= 100) return windowWidth;
  if (percent <= 0) return 0;
  return (percent / 100) * windowWidth;
}
