import React from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import configureStore from "./src/store/configureStore";
import {Provider} from "react-redux";

const store = configureStore();

export default class App extends React.Component {
    state = {
        places: [],
        selectedPlace: null
    };

    placeAddedHandler = placeName => {
        this.setState(prevState => {
            return {
                places: prevState.places.concat({
                    key: Math.random(),
                    name: placeName,
                    image: {
                        uri: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    }
                })
            };
        })
    };

    placeSelectedHandler = key => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => {
                    return place.key === key;
                })
            };
        })
    };

    placeDeletedHandler = () => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter(place => {
                    return place.key !== prevState.selectedPlace.key;
                }),
                selectedPlace: null
            };
        });
    };

    modalClosedHandler = () => {
        this.setState({
            selectedPlace: null
        });
    };

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <PlaceDetail
                        selectedPlace={this.state.selectedPlace}
                        onItemDeleted={this.placeDeletedHandler}
                        onModalClosed={this.modalClosedHandler}
                    />
                    <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
                    <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});
