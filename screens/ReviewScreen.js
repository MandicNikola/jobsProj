import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {

    static navigationOptions = ({ navigation }) => {
       
       return {
            title: 'Review Jobs',
            headerRight : (
                    <Button 
                        title='Settings'  
                        onPress={ () => navigation.navigate('settings') } 
                        buttonStyle = { style.buttonStyle }
                        titleStyle = { style.titleStyle }
                    />
                )
       };
    }


    render()
    {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }

}


const style = {
    buttonStyle : {
        backgroundColor : 'rgba(0,0,0,0)',
        paddingRight : 20
    },
    titleStyle: { 
        color: 'rgba(0, 122, 255, 1)'
    }


};


export default ReviewScreen;