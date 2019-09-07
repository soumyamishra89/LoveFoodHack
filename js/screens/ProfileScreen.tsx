import React from 'react';
import { View } from 'react-native';
import Styles from '../styles/Styles';
import FoodItem from '../components/FoodItem';

export default class FoodSelectionScreen extends React.PureComponent<any> {
    render() {
        return (
            <View style={Styles.container}>
                {foodItems.map(foodItem =>
                <FoodItem {...foodItem}/>)}
            </View>
        )
    }
}

const foodItems = [{
    image: require('../../assets/carrots.png'),
    foodName: 'Carrot',
    foodExpiry: '18/09/2019'
},
{
    image: require('../../assets/milk.png'),
    foodName: 'Milk',
    foodExpiry: '14/09/2019'
},
{
    image: require('../../assets/apple.png'),
    foodName: 'Apple',
    foodExpiry: '17/09/2019'
},
{
    image: require('../../assets/tomato.png'),
    foodName: 'Tomato',
    foodExpiry: '15/09/2019'
},
{
    image: require('../../assets/egg.png'),
    foodName: 'Egg',
    foodExpiry: '24/09/2019'
}]