import React from 'react'
import { View } from 'react-native'
import { withTheme, Text } from 'react-native-elements';


// primary: '#000000',
// secondary: '#FFFFFF',
// tertiary: '#EFCEF5',
// quaternary: '#97DFAF',
// quinary: '#398D55'


function Logo(props) {
    const { theme, updateTheme, replaceTheme } = props;
    return (
        <View style={{ width: '100%', backgroundColor: theme.colors.secondary, }}>
            <Text style={{ alignSelf: 'center' }}><Text h1 style={{ color: theme.colors.quinary }}>Your</Text><Text style={{ color: theme.colors.primary }} h1>Hub</Text></Text>
        </View>
    )
}
export default withTheme(Logo)