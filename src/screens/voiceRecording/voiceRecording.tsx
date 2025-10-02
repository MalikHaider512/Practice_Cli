import React, { useState } from "react";
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import Ionicons from "react-native-vector-icons/Ionicons";
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioSet,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
} from "react-native-audio-recorder-player";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components";
import Colors from "../../utils/AppColors";
import styles from "./styles";

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function VoiceRecording() {
  const [recording, setRecording] = useState(false);
  const [recordedUri, setRecordedUri] = useState<string | null>(null);

  const [currentPosition, setCurrentPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Request permission for Android
  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
    }
  };

  // Start Recording
  const startRecording = async () => {
    try {
      await requestPermissions();

      const audioSet: AudioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
      };

      const uri = await audioRecorderPlayer.startRecorder(undefined, audioSet);
      setRecording(true);
      console.log("Recording started: ", uri);
    } catch (err) {
      console.log(err);
    }
  };

  // Stop Recording
  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setRecording(false);
      setRecordedUri(result);
      console.log("Recording stopped. File saved at: ", result);
    } catch (err) {
      console.log(err);
    }
  };

  // Play Recording
  const playRecording = async () => {
    if (recordedUri) {
      try {
        await audioRecorderPlayer.startPlayer(recordedUri);
        setIsPlaying(true);

        audioRecorderPlayer.addPlayBackListener((e) => {
          setCurrentPosition(e.currentPosition);
          setDuration(e.duration);

          if (e.currentPosition >= e.duration) {
            audioRecorderPlayer.stopPlayer();
            setIsPlaying(false);
          }
          return;
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const pauseRecording = async () => {
    await audioRecorderPlayer.pausePlayer();
    setIsPlaying(false);
  };

  const resumeRecording = async () => {
    await audioRecorderPlayer.resumePlayer();
    setIsPlaying(true);
  };

  const onSeek = async (value: number) => {
    await audioRecorderPlayer.seekToPlayer(value);
    setCurrentPosition(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Voice Recording"} />
      {/* Recorder Buttons */}
      <View style={styles.recorderControls}>
        {!recording ? (
          <TouchableOpacity style={styles.recBtn} onPress={startRecording}>
            <Ionicons
              name="mic-circle-outline"
              size={60}
              color={Colors.redOrange}
            />
            <Text style={styles.recText}>Record</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.recBtn} onPress={stopRecording}>
            <Ionicons
              name="stop-circle-outline"
              size={60}
              color={Colors.pizazz}
            />
            <Text style={styles.recText}>Stop</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Audio Player Card */}
      {recordedUri && (
        <View style={styles.card}>
          <Text style={styles.title}>Recorded Voice</Text>

          {/* Progress Bar */}
          <Slider
            style={{ width: "100%" }}
            minimumValue={0}
            maximumValue={duration}
            value={currentPosition}
            onSlidingComplete={onSeek}
            minimumTrackTintColor={Colors.dogerBlue}
            maximumTrackTintColor={Colors.alto}
            thumbTintColor={Colors.dogerBlue}
          />

          {/* Time Display */}
          <View style={styles.timeRow}>
            <Text>{Math.floor(currentPosition / 1000)}s</Text>
            <Text>{Math.floor(duration / 1000)}s</Text>
          </View>

          {/* Play / Pause Controls */}
          <View style={styles.controls}>
            {!isPlaying ? (
              <TouchableOpacity onPress={playRecording}>
                <Ionicons
                  name="play-circle"
                  size={64}
                  color={Colors.dodgerBlue}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={pauseRecording}>
                <Ionicons
                  name="pause-circle"
                  size={64}
                  color={Colors.dodgerBlue}
                />
              </TouchableOpacity>
            )}

            {isPlaying && (
              <TouchableOpacity onPress={resumeRecording}>
                <Ionicons
                  name="play-forward-circle"
                  size={50}
                  color="#34C759"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
