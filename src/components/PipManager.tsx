import {NativeModules, Platform} from 'react-native';

const {PipAndroid, PipIOS} = NativeModules;

const PipManager = {
  enterPipMode: (width = 0, height = 0) => {
    if (Platform.OS === 'android') {
      PipAndroid.enterPipMode(width, height);
    } else if (Platform.OS === 'ios') {
      PipIOS.enterPipMode();
    }
  },
};

export default PipManager;
