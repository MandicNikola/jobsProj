import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';



class SettingsScreen extends Component {

    static navigationOptions = {
      title : 'Settings'
    }

    render()
    {
        return (
            <View>
              <Button 
                title = 'Reset liked jobs'
                icon={ { name: 'delete-forever' } }
                onPress = { this.props.clearLikedJobs }
                buttonStyle = {{ marginTop : 20, marginLeft : 20, marginRight : 20 }}
              />
            </View>
        );
    }

}

export default connect(null, { clearLikedJobs })(SettingsScreen);