import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Styles from '../styles/Styles';
import colors from '../styles/colors';

interface State {
    focusedScreen: boolean,
    scannedItem?: any
}

export default class FoodEntryCameraScreen extends React.PureComponent<any, State> {
    private camera: any | null;
    state: State = {
        focusedScreen: false
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
    render() {
        const { focusedScreen } = this.state;
        if (!focusedScreen) {
            return null;
        }
        console.log('this.state.scannedItem', this.state.scannedItem)
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
              {/* {!!this.state.scannedItem ? <View style={styles.cameraView}>
                  <Image source={this.state.scannedItem} style={{width: '100%', height: '100%'}}/></View> :  */}
                  <View style={{paddingHorizontal: 24, alignItems: 'flex-start'}}><Text style={{color: colors.appBlue, fontSize: 36}}>{this.state.scannedItem ? foodItems[0].funFact : 'Scan food items that you want to add to the list'}</Text>
                  {this.state.scannedItem && <Text style={{fontSize: 16}}>{'\n(Shelf life: ' + foodItems[0].shelfLife + ')'}</Text>}
                  </View>
              </View>
              <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
                  <Text style={{ fontSize: 14, color: colors.appBlue }}> {!!this.state.scannedItem && 'RESCAN' || 'SCAN'} </Text>
                </TouchableOpacity>
                {!!this.state.scannedItem && <TouchableOpacity onPress={this.addToList} style={styles.capture}>
                  <Text style={{ fontSize: 14,color: colors.appBlue }}> {'ADD'} </Text>
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
      const options = { quality: 0.5, base64: true };
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
      width: 112,
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