import {StyleSheet} from 'react-native';
import {height, width} from '../../../utils/Dimensions';

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  inputStyle: {
    width: width(90),
    height: height(6),
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: width(2),
    borderWidth: 1,
    marginBottom: height(1),
  },
});

export default styles;

// import {StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   parentView: {
//     flex: 1,
//   },
// });

// export default styles;
