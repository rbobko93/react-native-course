import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import {connect} from "react-redux";
import {addPlace} from "../../store/actions";

class SharePlaceScreen extends Component {
    static navigationOptions = {
        title: "Share a place!"
    };

    placeAddedHandler = placeName => {
      this.props.onAddPlace(placeName);
    };

    render() {
        return (
            <View style={styles.sharePlace}>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sharePlace: {
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
