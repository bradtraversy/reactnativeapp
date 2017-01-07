import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';

export default class Component6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.user.name,
            email: this.props.user.email
        }
    }

    onPress(){
        this.props.navigator.push({
            id:'component5'
        });
    }

    render(){
        return(
        <View>
            <Text>{this.state.name}</Text>
            <Text>{this.state.email}</Text>
            <Button 
                onPress={this.onPress.bind(this)}
                title="Go Back"
            />
        </View>
        );
    }
}

AppRegistry.registerComponent('Component6', () => Component6);