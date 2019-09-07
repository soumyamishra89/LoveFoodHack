import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors';

export default class RecipeItem extends React.PureComponent<any> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.action} style={{height: 72, width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 16, backgroundColor: colors.background, marginRight: 16}}>
                <Image source={this.props.recipeImage} style={{height: 72, width: 72, marginLeft: 8}} resizeMode='cover' />
                <View style={{marginLeft: 16}}>
                    <Text style={{color: colors.appBlue, fontSize: 16}}>{this.props.recipeName}</Text>
                    <Text style={{color: colors.appBlue, fontSize: 12, opacity: 0.6}}>{this.props.foodExpiry}</Text>
                </View>
                <Icon name='ios-arrow-forward' style={{position: 'absolute', right: 16}} size={36}/>
            </TouchableOpacity>
        );
    }
}
