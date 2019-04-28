import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator  } from 'react-navigation';

import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

import { reviewNavigationOptions } from './navigation';



class App extends React.Component {
  
  renderNavigations()
  {

    return {
      screen: createAppContainer(createBottomTabNavigator({
        map : MapScreen,
        deck: DeckScreen,
        review : this.renderStackNavigation()
      })),
      navigationOptions : {
        tabBarVisible : false
      }
    };

  }

  renderStackNavigation()
  {
    return {
      screen : createAppContainer(createStackNavigator({
        review : ReviewScreen,
        settings : SettingsScreen
      })),
      navigationOptions : reviewNavigationOptions
    };
  }

  render() {

    const MainNavigator = createBottomTabNavigator({
      welcome:  {
        screen : WelcomeScreen,
        navigationOptions : {
          tabBarVisible : false
        }
      } ,
      auth: {
        screen: AuthScreen,
        navigationOptions : {
          tabBarVisible : false
        }
      }, 
      main: this.renderNavigations()
    }, {
      navigationOptions : {
        tabBar : { visible : false }
      }
    });

    const Navigation = createAppContainer(MainNavigator);

    return (
      <Provider store={ store }>
        <Navigation />
      </Provider>
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


