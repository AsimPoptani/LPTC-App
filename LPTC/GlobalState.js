import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { DatabaseContext } from './DatabaseContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default class GlobalState extends Component {
    
    DATABASE_TOKEN = "@LPTC_database"
    USER_TOKEN = "@LPTC_user"

    state = {
        database: {},
        user: {}
    }
    parseJson = (json) => {
        return json != null ? JSON.parse(json) : null;
    }
    parseToJson = (object) => {
        return JSON.stringify(object)
    }
    setDatabase = (database) => {
        this.setState({ database: database })
    }

    setUser = (user) => {
        this.setState({ user: user })
    }

    save = async () => {
        try {
            let data = [
                [this.DATABASE_TOKEN, this.parseToJson(this.state.database)],
                [this.USER_TOKEN, this.parseToJson(this.state.user)]
            ]
            await AsyncStorage.multiSet(data)
        } catch (e) {
            alert("cannot save " + e)
        }
    }
    retrieve = async () => {
        let databaseToken = await AsyncStorage.getItem(this.DATABASE_TOKEN)
        let userToken = await AsyncStorage.getItem(this.USER_TOKEN)
        this.setState({ database: this.parseJson(databaseToken) });
        this.setState({ user: this.parseJson(userToken) });
    }


    render() {
        return (
            <DatabaseContext.Provider
                value={{
                    database: this.state.database,
                    setDatabase: this.setDatabase,
                    user: this.state.user,
                    setUser: this.setUser,
                    save: this.save,
                    retrieve: this.retrieve,
                    clear: () => { },
                }}
            >
                {this.props.children}
            </DatabaseContext.Provider>
        )
    }
}
