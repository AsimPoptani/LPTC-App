import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { withTheme, Text, Header as Head, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Logo from '../Logo'

// primary: '#000000',
// secondary: '#FFFFFF',
// tertiary: '#EFCEF5',
// quaternary: '#97DFAF',
// quinary: '#398D55'


function Header(props) {
    const { theme, updateTheme, replaceTheme, goBack } = props;
    const navigation = useNavigation();
    return (
        <View>
            <Head backgroundColor={'#FFF'}
                centerComponent={<Logo />}
                rightComponent={<Icon type="material-community" name="account-cog" size={30} />}
                leftComponent={goBack ? <TouchableOpacity onPress={() => navigation.goBack()}><Icon type="material-community" name="arrow-left-circle" size={30} /></TouchableOpacity> : <></>}
            />
        </View>
    )
}
export default withTheme(Header)