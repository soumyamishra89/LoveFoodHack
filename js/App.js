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
import {Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import FoodEntryScreen from './screens/FoodEntryScreen';
import SummaryScreen from './screens/SummaryScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import WebviewScreen from './screens/WebviewScreen';
import ProfileScreen from './screens/ProfileScreen';
import Styles from './styles/Styles';
const AppContainer = createAppContainer(
  createStackNavigator({
    Welcome: createBottomTabNavigator({
      Home: WelcomeScreen,       
      SummaryScreen: SummaryScreen,
      ProfileScreen: ProfileScreen
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
              imageSource = <MaterialIcon name={'home-outline'} style={[Styles.tabBarIcon, {opacity: focused ? 1 : 0.8}]} color={'white'} size={focused ? 28 : 24} />;
            } else if (routeName === "ProfileScreen") {
              imageSource = <IoniconIcon name={'md-contact'} style={[Styles.tabBarIcon, {opacity: focused ? 1 : 0.8}]} color={'white'} size={focused ? 28 : 24} />;
            } else if (routeName === 'SummaryScreen') {
              imageSource = <MaterialIcon name={'food'} style={[Styles.tabBarIcon, {opacity: focused ? 1 : 0.8}]} color={'white'} size={focused ? 28 : 24} />;
            } else {
              return null;
            }
            return imageSource;
          },
          tabBarLabel: ({ focused, tintColor }) => {
            let text;
            if (routeName === 'Home') {
              text = 'Home';
            } else if (routeName === "ProfileScreen") {
              text = 'Profile';
            } else if (routeName === 'SummaryScreen') {
              text = 'Summary';
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
    }),
    FoodEntryScreen: FoodEntryScreen,
    WebviewScreen: WebviewScreen    
    }, {
      headerMode: 'none',
      // initialRouteName: 'Home'
    })
)

const App = () => (
  <AppContainer />
)

export default App;
