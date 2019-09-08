import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { RNCamera } from 'react-native-camera';
import Styles from '../styles/Styles';
import colors from '../styles/colors';

interface State {
    focusedScreen: boolean,
    scannedItem?: any,
    value: number,
    index: number
}

export default class FoodEntryCameraScreen extends React.PureComponent<any, State> {
    private camera: any | null;
    state: State = {
        focusedScreen: false,
        index: 0,
        value: 1
    }
    componentDidMount() {
        const { navigation } = this.props;
        navigation.addListener('willFocus', () =>
          this.setState({ focusedScreen: true })
        );
        navigation.addListener('willBlur', () =>
          this.setState({ focusedScreen: false })
        );
    }

    addmore = async () => {
      await this.takePicture();
      this.setState({value: 1, index: (this.state.index >= (foodItems.length - 1)) ? 0 : this.state.index + 1});
    }

    render() {
        const { focusedScreen } = this.state;
        if (!focusedScreen) {
            return null;
        }
       
        return (
            <View style={[Styles.container, {paddingHorizontal: 16}]}>
              <View style={styles.cameraContainer}>
                 <View style={{padding: 16}}>
                    <View style={[styles.cameraPlaceholder, styles.rightBottom]}/>
                    <View style={[styles.cameraPlaceholder, styles.leftBottom]}/>
                    <View style={[styles.cameraPlaceholder, styles.leftTop]}/>
                    <View style={[styles.cameraPlaceholder, styles.rightTop]}/>
                  <View style={styles.cameraView}>
                  <RNCamera
                  ref={ref => {
                      this.camera = ref;
                  }}
                  autoFocus={RNCamera.Constants.AutoFocus.off}
                  style={styles.preview}
                  type={RNCamera.Constants.Type.back}
                  flashMode={RNCamera.Constants.FlashMode.off}
                  androidCameraPermissionOptions={{
                      title: 'Permission to use camera',
                      message: 'We need your permission to use your camera',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancel',
                  }}
                  androidRecordAudioPermissionOptions={{
                      title: 'Permission to use audio recording',
                      message: 'We need your permission to use your audio',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancel',
                  }}
                  onTextRecognized={this.onTextRecognised}
                  // onGoogleVisionBarcodesDetected={({ barcodes }) => {
                  //     console.log(barcodes);
                  // }}
                  />
                  </View>
                </View>
              </View>
              <View style={[{backgroundColor: colors.appGreen, alignItems: 'center', height: 212, justifyContent: 'center', marginHorizontal: 16, width: '100%', alignSelf: 'center', marginTop: 16 }]}>
                  <View style={{paddingHorizontal: 24, alignItems: 'flex-start'}}><Text style={{color: colors.appBlue, fontSize: 36}}>{this.state.scannedItem ? foodItems[this.state.index].funFact : 'Scan food items that you want to add to the list'}</Text>
                  {this.state.scannedItem && <Text style={{fontSize: 16}}>{'\n(Shelf life: ' + foodItems[this.state.index].shelfLife + ')'}</Text>}
                  </View>
              </View>
              {this.state.scannedItem && <Slider
                style={{width: '100%', height: 40}}
                minimumValue={1}
                maximumValue={10}
                step={1}
                minimumTrackTintColor={colors.appBlue}
                maximumTrackTintColor="#000000"
                onValueChange={(value: number) => this.setState({value})}
              />}
              {this.state.scannedItem && <Text style={{fontSize: 24, color: colors.appPink, }}>
              <Text style={{fontSize: 18, color: colors.appBlue}}>{'How Many: '}</Text>{this.state.value}</Text>}
              <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
                  <Text style={{ fontSize: 8, color: colors.appBlue }}> {!!this.state.scannedItem && 'RESCAN' || 'SCAN'} </Text>
                </TouchableOpacity>
                {!!this.state.scannedItem && <TouchableOpacity onPress={this.addmore} style={styles.capture}>
                  <Text style={{ fontSize: 8,color: colors.appBlue }}> {'ADD MORE'} </Text>
                </TouchableOpacity>}
                {!!this.state.scannedItem && <TouchableOpacity onPress={this.addToList} style={styles.capture}>
                  <Text style={{ fontSize: 8,color: colors.appBlue }}> {'SUMMARY'} </Text>
                </TouchableOpacity>}
              </View>
            </View>
        );
  }

  addToList = () => {
    this.props.navigation.navigate('SummaryScreen', {scannedItem: this.state.scannedItem})
  }

  onTextRecognised = ({textBlocks}: any) => {
    console.log('textBlock', textBlocks)
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5 };
      const data = await this.camera.takePictureAsync(options);
      this.setState({scannedItem: data});
      console.log(data.uri);
    }
  };
}

const foodItems = [
  {
      foodName: 'Apples',
      funFact: `Don't put the apples in the refrigerator`,
      shelfLife: '1.5 weeks'
  },
  {
      foodName: 'Milk',
      funFact: 'Put the milk in the refrigerator',
      shelfLife: '1 week'
  },
  {
      foodName: 'Tomatoes',
      funFact: `Don't put the tomatoes in the refrigerator`,
      shelfLife: '1.5 weeks'
  },
  {
      foodName: 'Carrots',
      funFact: `Don't put the carrots in the refrigerator`,
      shelfLife: '1.5 weeks'
  },
  {
      foodName: 'Eggs',
      funFact: 'Put the eggs in the refrigerator',
      shelfLife: '2 weeks'
  }];

const styles = StyleSheet.create({
    cameraContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',      
    },
    cameraView: {
      width: 196,
      height: 196,
      overflow: 'hidden'
    },
    preview: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-end'
    },
    capture: {
      width: 88,
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
      elevation: 4
    },
    rightTop: {
      borderTopWidth: 2,
      borderRightWidth: 2,
      borderColor: colors.appPink,
      right: 0,
      top: 0
    },
    rightBottom: {
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderColor: colors.appPink,
      right: 0,
      bottom: 0
    },
    leftTop: {
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderColor: colors.appPink,
      left: 0,
      top: 0
    },
    leftBottom: {      
      borderBottomWidth: 2,
      borderLeftWidth: 2,
      borderColor: colors.appPink,      
      left: 0,
      bottom: 0
    },
    cameraPlaceholder: {
      position: 'absolute',
      width: 24,
      height: 24,
    }
  });