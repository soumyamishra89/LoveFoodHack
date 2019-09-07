import React from 'react';
import { View, Text, Image } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FoodItem extends React.PureComponent<any> {
    render() {
        return (
            <View style={{height: 72, width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Image source={this.props.image} style={{height: 36, width: 36}} resizeMode='contain' />
                <View>
                    <Text style={{color: colors.appBlue, fontSize: 16}}>{this.props.foodName}</Text>
                    <Text style={{color: colors.appBlue, fontSize: 12, opacity: 0.6}}>{this.props.foodExpiry}</Text>
                </View>
                <TouchableOpacity>
                <Icons name={'check'} size={24} color={colors.appGreen}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Icons name={'close'} size={24} color={'red'}/>
                </TouchableOpacity>
            </View>
        );
    }
}