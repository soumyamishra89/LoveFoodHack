import React from 'react';
import {
    View, StyleSheet, BackHandler, TouchableOpacity, ImageBackground, Image, Text, Share
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../styles/colors';

export default class Dialog extends React.PureComponent<any> {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBack);
    }

    onBack = () => {
        this.props.hide && this.props.hide()
        return true
    }

    share = () => {
        this.props.data;
        Share.share({
            message: this.props.data.foodName + ' Saved',        
            title: 'Achievement'
        });
    }

    render() {
        return (
            <View  style={[StyleSheet.absoluteFill, {backgroundColor: '#00000033', justifyContent: 'center', alignItems: 'center'}]}>
                <View style={{elevation: 8, height: '80%', width: '90%', backgroundColor: 'white'}}>
                    {this.props.backgroundImage ? <ImageBackground source={this.props.backgroundImage} style={{height: '100%', width: '100%'}}> 
                    <TouchableOpacity style={{position: 'absolute', right: 0, top: 0}} onPress={this.props.hide}>
                        <Icon name='close' size={24} />
                    </TouchableOpacity>
                    </ImageBackground> :
                <ImageBackground source={this.props.isCancel ? require('../../assets/point-lose.png') : require('../../assets/points-won.png')} style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}} resizeMode='cover'>
                    <Image source={this.props.data.image} style={{height: 48, width: 48, borderRadius: 24}} resizeMode='cover' />
                    <Text style={{color: colors.appBlue, marginTop: 16}}>{this.props.data.foodName + (this.props.isCancel ? '\nWasted' : '\nSaved')}</Text>
                    <TouchableOpacity style={{position: 'absolute', right: 0, top: 0}} onPress={this.props.hide}>
                        <Icon name='close' size={24} />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', marginTop: 36, alignItems: 'center', marginBottom: 24}}>
                        <View style={{height: 36, width: 36, borderRadius: 18, backgroundColor: colors.appOrange, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name='star' size={24} color='white' />
                        </View>

                        <Text style={{color: colors.appBlue, fontSize: 36, marginLeft: 8}}>{this.props.isCancel ? '-20' : '+50'}</Text>
                        <Text style={{color: colors.appOrange, alignSelf: 'flex-end', marginBottom: 8, marginLeft: 8}}>points</Text>
                    </View>
                    <Icon name='camera' size={36} color={colors.appBlue}/>
                    <View style={{position: 'absolute', bottom: 24, width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: 16}}>
                        <Text style={{color: colors.appBlue, fontSize: 18, maxWidth: '80%'}}>{'SHARE YOUR STATS'}</Text>
                        <TouchableOpacity onPress={this.share} style={{backgroundColor: colors.appGreen, height: 48, width: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name={'share-variant'} color='white' size={36}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>}
                </View>
            </View>
        )
    }
}