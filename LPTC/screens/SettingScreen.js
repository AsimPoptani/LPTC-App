import React from 'react'
import { SafeAreaView } from 'react-native'
import {Text, Card} from 'react-native-elements'
export default function SettingScreen({navigation}) {
    navigation.setOptions({title:"Settings"})
    return (
        <SafeAreaView>
            <Text h2>Settings</Text>
            <Card >
                
                </Card>
        </SafeAreaView>
    )
}
