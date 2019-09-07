import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import Styles from '../styles/Styles';
import colors from '../styles/colors';
import Dialog from '../components/Dialog';

export default class WelcomeScreen extends React.PureComponent<any, any> {

    state = {
        dialog: false
    }

    showDialog = () => this.setState({dialog: true});

    hideDialog = () => this.setState({dialog: false});

    render() {
        return (
        <View style={[Styles.container, styles.container]}>
            <Image source={require('../../assets/icon-zero-kitchen.png')} style={{height: 64, width: 64}} resizeMode='contain' />
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={{fontSize: 32, color: colors.appBlue, marginTop: 16}}>{'Welcome\nSmith Family'}</Text>
            </View>
            
            <Image source={require('../../assets/intro-img.png')} style={{height: 240, width: '80%'}} resizeMode='cover' />
            <TouchableOpacity onPress={this.showDialog}><Image source={require('../../assets/tip-btn.png')} style={{width: 180, height: 72}} resizeMode='contain' /></TouchableOpacity>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', position: 'absolute', bottom: 0}}>
                <View style={{width: '100%', alignItems: 'center'}}>
                    {/* <TouchableOpacity style={{position: 'absolute', left: 16}} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('SummaryScreen')}>
                        <IoniconIcon name='ios-contact' size={96} color={colors.appBlue}/>
                    </TouchableOpacity>    */}
                   
                    <Text style={{color: colors.appBlue, marginBottom: 0}}>{'Tell us what you have'}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('FoodEntryScreen')}>
                        <IoniconIcon name='ios-add-circle' size={96} color={colors.appPink}/>
                    </TouchableOpacity>
                </View>
            </View>
            {!!this.state.dialog && <Dialog backgroundImage={require('../../assets/tip-open.png')} hide={this.hideDialog}/>}
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 16,
        backgroundColor: colors.background
    },
    ellipse: {
        position: 'absolute', 
        height: 36, 
        width: 36, 
        borderRadius: 36, 
        backgroundColor: colors.appOrange, 
        right: -12, top: -12, 
        transform: [ {scaleX: 2}, {rotate: '135deg'}]}
})