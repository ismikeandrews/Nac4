import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

class Button extends Component{
    
    render(){
        return(
            <View>
                <TouchableOpacity style={ styles.btn } onPress={this.props.handler}>
                    <Text style={ styles.btnText }>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export { Button }