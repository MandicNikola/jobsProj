import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';



class SettingsScreen extends Component {

    render()
    {
        return (
            <View>
              <Button 
                title = 'Reset liked jobs'
                icon={ { name: 'delete-forever' } }
                onPress = { this.props.clearLikedJobs }
              />
            </View>
        );
    }

}

export default connect(null, actions)(SettingsScreen);