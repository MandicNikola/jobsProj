import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, Platform } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';


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

    renderLikedJobs()
    {
        return this.props.likedJobs.map(job => {
            const { 
                company, formattedRelativeTime, url,
                longitude, latitude, jobtitle, jobkey
            } = job;

            const initialRegion = {
               longitude,
               latitude,
               latitudeDelta : 0.045,
               longitudeDelta : 0.02 

            };
            
            return (
                <Card
                    title = {jobtitle}
                    key = {jobkey}
                >
                    <View style={{ height: 200 }} >
                        <MapView 
                            style = {{ flex: 1 }}
                            cacheEnabled={Platform.OS === 'android' }
                            scrollEnabled={false}
                            initialRegion = {initialRegion}
                        />

                        <View style={style.detailWrapper} >
                            <Text style={style.italics} >{ company }</Text>
                            <Text style={style.italics} >{ formattedRelativeTime }</Text>
                        </View>

                    </View>
                    <View>
                        <Button 
                            title='Apply Now' 
                            buttonStyle = { style.buttonStyle } 
                            onPress = { () => Linking.openURL(url) } 
                        />
                    </View>
                </Card>
            );
        });
    }

    render()
    {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }

}


const style = {
    buttonStyle: {
        backgroundColor : 'rgba(0,0,0,0)',
        paddingRight : 20
    },
    titleStyle: { 
        color: 'rgba(0, 122, 255, 1)'
    },
    detailWrapper: {
        marginTop : 10,
        marginBottom : 10,
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    italics: {
        fontStyle: 'italic',
    }

};

function mapStateToProps(state)
{
    return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);