import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator  } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';




class App extends React.Component {
  
  renderNavigations()
  {

    return {
      screen: createAppContainer(createBottomTabNavigator({
        map : MapScreen,
        deck: DeckScreen,
        review : this.renderStackNavigation()
      }))
    };

  }

  renderStackNavigation()
  {
    return {
      screen : createAppContainer(createStackNavigator({
        review : ReviewScreen,
        settings : SettingsScreen
      }))
    };
  }

  render() {

    const MainNavigator = createBottomTabNavigator({
      welcome:  WelcomeScreen ,
      auth: AuthScreen, 
      main: this.renderNavigations()
    });

    const Navigation = createAppContainer(MainNavigator);

    return (
        <Navigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


