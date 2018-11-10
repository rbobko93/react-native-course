import React, {Component} from 'react';
import {View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {connect} from "react-redux";
import {deletePlace} from "../../store/actions";
import {withMappedNavigationAndConfigProps} from "react-navigation-props-mapper";

@withMappedNavigationAndConfigProps()
class PlaceDetail extends Component {
    static navigationOptions = ({navigation, title}) => {
        return {
            title: title
        };
    };

    itemDeleteHandler = () => {
      this.props.onDeletePlace(this.props.selectedPlace.key);
      this.props.navigation.goBack();
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={this.props.selectedPlace.image} style={styles.placeImage}/>
                    <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.itemDeleteHandler}>
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

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
