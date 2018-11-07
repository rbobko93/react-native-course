import React from 'react';
import configureStore from "./src/store/configureStore";
import {Provider} from "react-redux";
import Places from "./src/components/Places/Places";

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Places/>
            </Provider>
        );
    }
}
