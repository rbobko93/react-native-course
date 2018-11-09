import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import PlaceList from "../../components/PlaceList/PlaceList";
import {connect} from "react-redux";

class FindPlaceScreen extends Component {
    static navigationOptions = {
        title: "Find a place!",
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            return <Ionicons name='ios-map' size={25} color={tintColor}/>
        }
    };

    itemSelectedHandler = key => {
        const place = this.props.places.find(p => {
           return p.key === key;
        });

        this.props.navigation.navigate('PlaceDetail', {
            selectedPlace: place,
            title: place.name
        });
    };

    render() {
        return (
            <View style={styles.findPlace}>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    findPlace: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
};

export default connect(mapStateToProps, null)(FindPlaceScreen);
