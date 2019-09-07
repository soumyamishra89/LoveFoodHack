/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StatisticsScreen from './screens/StatisticsScreen';
import FoodEntryScreen from './screens/FoodEntryScreen';
import ProfileScreen from './screens/ProfileScreen';
import Styles from './styles/Styles';
import WelcomeScreen from './screens/WelcomeScreen';

const AppContainer = createAppContainer(
  createStackNavigator({
    Welcome: WelcomeScreen,
    FoodEntryScreen: FoodEntryScreen,
    Main: createBottomTabNavigator({
        Home: ProfileScreen,       
        Challenges: StatisticsScreen
      }, {
        tabBarOptions: {
          style: Styles.navBottomBar,
          tabStyle: Styles.bottomTabBar,
          keyboardHidesTabBar: true
      },
      defaultNavigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state;
        return {
          tabBarIcon: ({ focused, tintColor }) => {
            let imageSource;
            if (routeName === 'Home') {
              imageSource = <MaterialIcon name={'food'} style={[Styles.tabBarIcon, {opacity: focused ? 1 : 0.8}]} color={'white'} size={focused ? 28 : 24} />;
            } else if (routeName === "Camera") {
              imageSource = <IoniconIcon name={'md-camera'} style={[Styles.tabBarIcon, {opacity: focused ? 1 : 0.8}]} color={'white'} size={focused ? 28 : 24} />;
            } else if (routeName === 'Challenges') {
              imageSource = <IoniconIcon name={'ios-contact'} style={[Styles.tabBarIcon, {opacity: focused ? 1 : 0.8}]} color={'white'} size={focused ? 28 : 24} />;
            } else {
              return null;
            }
            return imageSource;
          },
          tabBarLabel: ({ focused, tintColor }) => {
            let text;
            if (routeName === 'Home') {
              text = 'Food';
            } else if (routeName === "Camera") {
              text = 'Scan';
            } else if (routeName === 'Challenges') {
              text = 'Challenges';
            } else {
              return null;
            }
            return (
              <Text
                style={[focused ? Styles.tabBarActiveLabel : Styles.tabBarInActiveLabel]}>
                {text}
              </Text>
            );
          },
        }
      }
      })
    }, {
      headerMode: 'none'
    })
)

const App = () => (
  <AppContainer />
)

export default App;
