import React from 'react';
import WebView from 'react-native-webview';
import Styles from '../styles/Styles';

const WebviewScreen = (props: any) => <WebView source={{ uri: props.navigation.state.params.url }} style={Styles.container}/>

export default WebviewScreen;