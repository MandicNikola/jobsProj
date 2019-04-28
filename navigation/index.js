import React from 'react';
import { Icon } from 'react-native-elements';

export const reviewNavigationOptions = { 
    title : 'Review',
    tabBarIcon :({ tintColor }) => {
        return  <Icon name='favorite' color={tintColor} />;
    } ,
    tabBarOptions : {
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
    }
};