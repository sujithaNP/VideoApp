/**
 * VideoPlayer.Screen.tsx
 * @module VideoPlayer Prams screen
 * @desc Screen for video pip.
 * @author Sujitha NeoITO
 * @access public
 * ...
 */

import React, {useRef} from 'react';
import {Image} from 'react-native';
import Video from 'react-native-video';
import PipManager from '../components/PipManager';
import {usePipModeListener} from '../../usePipModuleListener';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function VideoPlayer() {
  const inPipMode = usePipModeListener();
  const videoRef = useRef(null);
  const handlePipButtonPress = () => {
    PipManager.enterPipMode();
  };
  if (inPipMode) {
    return (
      <View>
        <Text>PIP Mode</Text>
      </View>
    );
  }
  return (
    <View>
      <Video
        ref={videoRef}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        paused
        resizeMode="contain"
        style={styles.backgroundVideo}
        playInBackground={true}
        playWhenInactive={true}
        controls
      />
      <View>
        <TouchableOpacity style={styles.pip} onPress={handlePipButtonPress}>
          <Image
            style={styles.stretch}
            source={require('../assets/images/pip.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stretch: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
  backgroundVideo: {
    maxWidth: '100%',
    minHeight: 114,
  },
  pip: {
    position: 'absolute',
    bottom: 85,
    left: 100,
  },
  img: {
    position: 'absolute',
    bottom: 50,
    left: 180,
  },
});

export default VideoPlayer;
