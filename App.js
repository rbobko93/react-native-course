import React, {Component} from 'react';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from "react-navigation";
import AuthScreen from "./src/screens/Auth/Auth";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import SharePlace from "./src/screens/SharePlace/SharePlace";
import {Ionicons} from "@expo/vector-icons";
import {Provider} from "react-redux";
import configureStore from "./src/store/configureStore";
import PlaceDetail from "./src/screens/PlaceDetail/PlaceDetail";

const store = configureStore();

export default class App extends Component {
    render(){
        return (
          <Provider store={store}>
              <SwitchNavigator />
          </Provider>
        );
    }
}

const AuthStack = createStackNavigator({
    Auth: AuthScreen
});

const FindPlaceStack = createStackNavigator({
    FindPlace: FindPlace,
    PlaceDetail: PlaceDetail
});

const SharePlaceStack = createStackNavigator({
    SharePlace: SharePlace
});

const MainStack = createBottomTabNavigator({
        FindPlace: {
            screen: FindPlaceStack,
            navigationOptions: {
                tabBarLabel: "Find place",
                tabBarIcon: ({focused, tintColor}) => {
                    return (<Ionicons name='ios-map' size={20} color={tintColor}/>)
                }
            }
        },
        SharePlace: {
            screen: SharePlaceStack,
            navigationOptions: {
                tabBarLabel: "Share Place",
                tabBarIcon: ({focused, tintColor}) => {
                    return (<Ionicons name='ios-share-alt' size={20} color={tintColor}/>);
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'grey'
        }
    });

const SwitchNavigator = createSwitchNavigator(
    {
        Auth: AuthStack,
        Places: MainStack
    },
    {
        initialRouteName: 'Auth'
    }
);
