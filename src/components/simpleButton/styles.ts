import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/Dimensions';
import AppColors from '../../utils/AppColors';

const styles = StyleSheet.create({
  btnTouch: {
    width: width(80),
    height: height(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.lightGrey,
    borderRadius: height(3),
    marginVertical: height(2),
  },
  textStyle: {
    fontSize: 18,
    color: AppColors.black,
    fontWeight: '600',
  },
});

export default styles;
