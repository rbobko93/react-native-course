import React, {Component} from 'react';
import {Button, TextInput, View, StyleSheet} from "react-native";

export default class PlaceInput extends Component {

    state = {
        placeName: ''
    };

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if(this.state.placeName.trim() === ''){
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);
        this.setState({
            placeName: ''
        });
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput placeholder="An awesome place"
                           style={styles.placeInput}
                           value={this.state.placeName}
                           onChangeText={this.placeNameChangedHandler}/>
                <Button title="Add" style={styles.placeButton}
                        onPress={this.placeSubmitHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});
