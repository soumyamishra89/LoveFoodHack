import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';

export default class FoodItem extends React.PureComponent<any> {
    render() {
        return (
            <View style={{height: 72, width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 16, backgroundColor: colors.background, marginRight: 16}}>
                <Image source={this.props.image} style={{height: 72, width: 72, marginLeft: -16}} resizeMode='cover' />
                <View>
                    <Text style={{color: colors.appBlue, fontSize: 16}}>{this.props.foodName}</Text>
                    <Text style={{color: colors.appBlue, fontSize: 12, opacity: 0.6}}>{this.props.foodExpiry}</Text>
                </View>
                <TouchableOpacity onPress={this.props.actionSave}>
                <Icons name={'check'} size={24} color={colors.appGreen}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.props.actionCancel}>
                <Icons name={'close'} size={24} color={'red'}/>
                </TouchableOpacity>
            </View>
        );
    }
}