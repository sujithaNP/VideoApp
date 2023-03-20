/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import {
  NativeModules,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {usePipModeListener} from './usePipModuleListener';
import PipManager from './src/components/PipManager';
import {Image} from 'react-native';
import VideoPlayer from './src/screens/VideoPlayer';

function App() {
  // const inPipMode = usePipModeListener();
  // const videoRef = useRef(null);
  // const [paused, setPaused] = useState(false);
  // const [pipEnabled, setPipEnabled] = useState(false);

  // const {PipAndroid, PipIOS} = NativeModules;

  // const handlePipButtonPress = () => {
  //   PipManager.enterPipMode();
  // };

  // const togglePip = async () => {
  //   if (Platform.OS === 'android') {
  //     PipHandler.enterPipMode(300, 214);
  //     // NativeModules.AppState.enterPictureInPictureMode();
  //     // NativeModules.PictureInPicture.enterPictureInPictureMode();
  //   } else if (Platform.OS === 'ios') {
  //     NativeModules.AVKitManager.togglePip(!pipEnabled);
  //     setPipEnabled(!pipEnabled);
  //     // Implement iOS PIP mode
  //   }
  // };
  // if (inPipMode) {
  //   return (
  //     <View style={{}}>
  //       <Text>PIP Mode</Text>
  //     </View>
  //   );
  // }
  return (
    <VideoPlayer />
    // </View>
    // <View>
    //   <Video
    //     ref={videoRef}
    //     source={{
    //       uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    //     }}
    //     paused={paused}
    //     // onEnd={onEnd}
    //     resizeMode="contain"
    //     // style={styles.backgroundVideo}
    //     style={{maxWidth: '100%', minHeight: 114}}
    //     playInBackground={true}
    //     playWhenInactive={true}
    //     controls
    //   />
    //   <View>
    //     {/* <TouchableOpacity
    //       style={styles.img}
    //       // style={{position: 'absolute', top: 50}}
    //       onPress={() => setPaused(!paused)}>
    //       <Text>
    //         {paused ? (
    //           <Image
    //             style={styles.stretch}
    //             source={require('./src/assets/images/play.png')}
    //           />
    //         ) : (
    //           <Image
    //             style={styles.stretch}
    //             source={require('./src/assets/images/pause.png')}
    //           />
    //         )}
    //       </Text>
    //     </TouchableOpacity> */}
    //     <TouchableOpacity style={styles.pip} onPress={handlePipButtonPress}>
    //       {/* <Text>Toggle PIP</Text> */}
    //       <Image
    //         style={styles.stretch}
    //         source={require('./src/assets/images/pip.png')}
    //       />
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: 200,
  },
  pip: {
    position: 'absolute',
    // marginTop: -32,
    bottom: 85,
    left: 100,
    // top:0

    // paddingHorizontal: 24,
  },
  img: {
    position: 'absolute',
    // marginTop: -32,
    bottom: 50,
    left: 180,
    // alignSelf: 'center',
    // top:0

    // paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
