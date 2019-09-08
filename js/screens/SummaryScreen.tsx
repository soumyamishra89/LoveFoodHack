import React from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../styles/Styles';
import FoodItem from '../components/FoodItem';
import colors from '../styles/colors';
import Dialog from '../components/Dialog';
import RecipeItem from '../components/RecipeItem';

export default class SummaryScreen extends React.PureComponent<any, any> {
    state = {
        foodItems,
        activeItemIndex: 0,
        currentIndex: 0,
        selectedFood: undefined,
        foodIndex: undefined,
        isCancel: undefined
    }
    private scrollView: any;
    private windowWidth = Dimensions.get('window').width;

    updateScrollPosition = (event?: any): void => {
        let scrollXPos = event ? event.nativeEvent.contentOffset.x : 0;
       
        let { currentIndex } = this.state;
        let updatedIndex = parseInt((scrollXPos / this.windowWidth).toFixed(0), 10);
        
        if (updatedIndex !== currentIndex) {
          this.setState({currentIndex: updatedIndex});         
        }
    }

    onTabSelection = (index: number) => {        
        this.setState({currentIndex: index});
        this.scrollView && this.scrollView.scrollTo({x: (index * this.windowWidth), y: 0, animated: true});
      
      }

    setFoodSelected = (foodItem: any, foodIndex: number, isCancel?: boolean) => this.setState({selectedFood: foodItem, foodIndex, isCancel});
    removeFoodSelected = () => {
        if (this.state.foodItems.length > 0 && this.state.foodIndex !== undefined) {
            const foodItems = this.state.foodItems.slice()
            // @ts-ignore
            foodItems.splice(this.state.foodIndex, 1);
            this.setState({foodItems: foodItems})
        }
        this.setState({selectedFood: undefined, foodIndex: undefined})
    };

    render() {
        return (
            <View style={[Styles.container]}>
                <View style={{height: 180, backgroundColor: colors.appGreen, paddingHorizontal: 16, paddingTop: 16}}>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name='ios-contact' size={36} color={colors.appOrange}/>
                        <Text style={{marginLeft: 16, color: colors.appBlue}}>{'Hello, \nSmith family'}</Text>
                    </View>
                    <Image source={require('../../assets/btn-our-kitchen.png')} style={{height: 48, width: 340, marginTop: 16}} resizeMode='contain'/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 16, left: 16, width: '100%'}}>
                        <Text onPress={() => this.onTabSelection(0)} style={{color: this.state.currentIndex === 0 ? colors.appPink : 'white', alignSelf: 'center', marginTop: 16}}>{'SUMMARY'}</Text>
                        <Text onPress={() => this.onTabSelection(1)} style={{color: this.state.currentIndex === 1 ? colors.appPink : 'white', alignSelf: 'center', marginTop: 16}}>{'CHALLENGES'}</Text>
                    </View>
                </View>
                <ScrollView 
                keyboardShouldPersistTaps="always" 
                ref={(ref: any) => this.scrollView = ref}
                onMomentumScrollEnd={this.updateScrollPosition}
                pagingEnabled 
                horizontal 
                style={{width: '100%', height: '100%'}}
                scrollEventThrottle={32}>
                    <View style={{width: this.windowWidth}}>
                        <View style={{width: '100%', height: 48, backgroundColor: '#00000023', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: colors.appBlue, fontSize: 16}}>{'You have now'}</Text>
                        </View>
                        <ScrollView keyboardShouldPersistTaps="always" style={{backgroundColor: '#00000023', width: '100%', height: '100%',}} contentContainerStyle={{paddingRight: 28}} nestedScrollEnabled >
                        {this.state.foodItems.map((foodItem, index) =>
                        <FoodItem key={index} {...foodItem} actionSave={() => this.setFoodSelected(foodItem, index)} actionCancel={() => this.setFoodSelected(foodItem, index, true)}/>)}
                        <View style={{height: 40}}></View>
                        </ScrollView>
                    </View>

                    <View style={{width: this.windowWidth}}>
                        
                        <ScrollView keyboardShouldPersistTaps="always" style={{backgroundColor: '#00000023'}} contentContainerStyle={{paddingRight: 28}} nestedScrollEnabled>
                        {suggestions.map((suggestion, index) =>
                        <RecipeItem key={index} {...suggestion} action={() => this.props.navigation.navigate('WebviewScreen', {url: suggestion.url})}/>)}
                        <View style={{height: 40}}></View>
                        </ScrollView>
                    </View>
                </ScrollView>
                {this.state.selectedFood && <Dialog hide={this.removeFoodSelected} data={this.state.selectedFood} isCancel={this.state.isCancel}/>}
                
            </View>
        )
    }
}

const foodItems = [
{
    image: require('../../assets/milk.png'),
    foodName: 'Milk',
    foodExpiry: '14/09/2019'
},
{
    image: require('../../assets/tomato.png'),
    foodName: 'Tomatoes',
    foodExpiry: '15/09/2019'
},
{
    image: require('../../assets/apple.png'),
    foodName: 'Apples',
    foodExpiry: '17/09/2019'
},
{
    image: require('../../assets/carrots.png'),
    foodName: 'Carrots',
    foodExpiry: '18/09/2019'
},
{
    image: require('../../assets/egg.png'),
    foodName: 'Eggs',
    foodExpiry: '24/09/2019'
}];

const suggestions = [
    {
        recipeName: 'Carrot Pickle',
        recipeImage: require('../../assets/carrot_pickles.png'),
        url: 'https://recipes.timesofindia.com/recipes/carrot-pickle/rs61850276.cms'
    },
    {
        recipeName: 'Carrot Soup',
        recipeImage: require('../../assets/carrotsoup.png'),
        url: 'http://www.eatingwell.com/recipe/249990/carrot-soup/'
    },
    {
        recipeName: 'Cottage Cheese',
        recipeImage: require('../../assets/paneer.png'),
        url: 'https://foodal.com/knowledge/how-to/make-cottage-cheese/'
    },
    {
        recipeName: 'Roasted Tomatoes',
        recipeImage: require('../../assets/roastedtomatoes.png'),
        url: 'https://www.bbcgoodfood.com/recipes/1575635/roast-tomatoes'
    },
    {
        recipeName: 'Apple Crumble',
        recipeImage: require('../../assets/apple_crumble.png'),
        url: 'https://www.bbc.co.uk/food/recipes/applecrumble_2971'
    },
    {
        recipeName: 'Apple Sauce',
        recipeImage: require('../../assets/apple_sauce.png'),
        url: 'https://theforkedspoon.com/homemade-cinnamon-apple-sauce/'
    },
    {
        recipeName: 'Tomato Soup',
        recipeImage: require('../../assets/tomato_soup.png'),
        url: 'https://happyhooligans.ca/best-homemade-tomato-soup-recipe/'
    },
    {
        recipeName: 'Spanish Omelette',
        recipeImage: require('../../assets/spanish_omlette.png'),
        url: 'https://www.bbcgoodfood.com/recipes/2738/real-spanish-omelette'
    },
    {
        recipeName: 'Scrambled Eggs',
        recipeImage: require('../../assets/scrambledeggs.png'),
        url: 'https://www.incredibleegg.org/recipe/basic-scrambled-eggs/'
    }
];