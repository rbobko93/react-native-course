import React, { Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class AuthScreen extends Component {
    static navigationOptions = {
      title: 'Please sign in'
    };

    login = () => {
      this.props.navigation.navigate('Places');
    };

    render(){
        return (
            <View style={styles.authScreen}>
                <Text>Auth Screen</Text>
                <Button title='Sign in' color='blue' onPress={this.login}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    authScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AuthScreen;
