import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import Styles from '../styles/Styles';
import colors from '../styles/colors';

export default class WelcomeScreen extends React.PureComponent<any> {
    render() {
        return (<View style={[Styles.container, styles.container]}>
            <Image source={require('../../assets/icon-zero-kitchen.png')} style={{height: 64, width: 64}} resizeMode='contain' />
            <View style={{width: '100%', paddingHorizontal: 16, marginBottom: 16}}>
                <Text style={{fontSize: 48, color: colors.appBlue, marginTop: 16}}>Welcome</Text>
            </View>
            <View style={[Styles.descriptionContainer, {width: '100%'}]}>
            <Text style={{fontSize: 36, marginTop: 24, width: '80%', color: colors.appBlue}}>{
                `Make kitchen zero waste again`
            }</Text>
            <View style={styles.ellipse}></View>
            </View>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', position: 'absolute', bottom: 48}}>
                <View style={{width: '100%', alignItems: 'center'}}>
                    <TouchableOpacity style={{position: 'absolute', left: 16}} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Main')}>
                        <IoniconIcon name='ios-contact' size={96} color={colors.appBlue}/>
                    </TouchableOpacity>   
                   
                    <Text style={{color: colors.appBlue, marginBottom: 16}}>{'Tell us what you have'}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('FoodEntryScreen')}>
                        <IoniconIcon name='ios-add-circle' size={96} color={colors.appPink}/>
                    </TouchableOpacity>
                   
                                
                </View>
            </View>
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