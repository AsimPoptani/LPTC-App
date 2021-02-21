import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { withTheme, Text } from 'react-native-elements';


//     primary: '#000000',
// secondary: '#FFFFFF',
// tertiary: '#EFCEF5',
// quaternary: '#97DFAF',
// quinary: '#398D55'

const Button = (props) => {
    const { theme, updateTheme, replaceTheme } = props;
    const styles = StyleSheet.create({
        container: {
            borderWidth: 1,

            minHeight: 60,
            marginHorizontal: 10,
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            textAlign: 'center'
        },
        overlay: {
            width: 125,
            height: 0,
            borderBottomWidth: 60,
            borderBottomColor: theme.colors.quaternary,

            borderLeftColor: 'transparent',
            borderRightWidth: 60,
            borderRightColor: 'transparent',
            borderStyle: 'solid',

            // position: 'absolute',

        }

    });

    return (
        <TouchableOpacity onPress={props.onPress ? props.onPress : () => { }}>
            <View style={styles.container}>
                <View style={styles.overlay}></View>
                <Text h3>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );


}


export default withTheme(Button)