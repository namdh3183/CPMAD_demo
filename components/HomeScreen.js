import { useLayoutEffect } from "react"
import { Image, View } from "react-native"
import { Button, Text } from "react-native-paper"

const HomeScreen = ({navigation, route}) => {
    const {userEmail} = route.params

    const renderAvatar = () => {
        return (
            <Image source={require("../image/moon.png")} style={{height: 50, width: 50}}/>
        )
    }

    const renderButton = () => {
        return (
            <Button mode="contained-tonal">Set count</Button>
            
        )
    }

    const renderHeader = () => {
        return (
            <Text numberOfLines={1} ellipsizeMode="tail">Hello {userEmail}</Text>
        )
    }

    useLayoutEffect( () => {
        navigation.setOptions({
            title: userEmail,
            headerLeft: renderAvatar,
            headerRight: renderButton
        })
    }, [navigation]) 

    return (
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            <Text>Hello {userEmail}</Text>
            
        </View>
    )
}

export default HomeScreen