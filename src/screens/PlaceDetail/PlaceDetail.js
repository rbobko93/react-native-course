import React, {Component} from 'react';
import {View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class PlaceDetail extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('title', 'PlaceDetail')
        };
    };

    render() {
        const selectedPlace = this.props.navigation.getParam('selectedPlace');

        return (
            <View style={styles.container}>
                <View>
                    <Image source={selectedPlace.image} style={styles.placeImage}/>
                    <Text style={styles.placeName}>{selectedPlace.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.props.onItemDeleted}>
                        <View style={styles.deleteButton}>
                            <Ionicons name="ios-trash" size={30} color="red"/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton: {
        justifyContent: "center",
        alignItems: "center"
    }
});
