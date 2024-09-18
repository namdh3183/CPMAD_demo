import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { ActivityIndicator, Button, MD3DarkTheme, MD3LightTheme, Switch, Text, useTheme } from "react-native-paper"


const DemoDarkLightTheme = () => {
    const [darkMode, setDarkMode] = useState(false)
    const myTheme = (darkMode) ? MD3DarkTheme : MD3LightTheme
    const onToggleSwitch = () => {
        setDarkMode(!darkMode)
    }   
    return (
        <View style={{
            ...styles.container, 
            backgroundColor: myTheme.colors.primary,
            }}>
            <View style={{backgroundColor: myTheme.colors.primary}}>
                <Text style={{fontSize: 20, fontWeight:700, color: myTheme.colors.onPrimary}}>Set dark mode</Text>
            </View>

            <View style={{margin:10}}></View>

            <Switch value={!darkMode} onValueChange={onToggleSwitch} color={myTheme.colors.onPrimary}/>

            <View style={{margin:10}}></View>

            <Button icon={"camera"} buttonColor={myTheme.colors.onPrimary} textColor={myTheme.colors.primary}>Button</Button>
            
            <View style={{margin:10}}></View>

            <ActivityIndicator animating={true} size={30} color="black"/>
        </View>
    )
}

export default DemoDarkLightTheme

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
  })