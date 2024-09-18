import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../components/LoginScreen"
import CreateAccScreen from "../components/CreateAccScreen"
import ForgotPassScreen from "../components/ForgotPassScreen"
import HomeScreen from "../components/HomeScreen"

const Stack = createStackNavigator()

const MyStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name = "Login" component={LoginScreen}/>
            <Stack.Screen name = "CreateAcc" component={CreateAccScreen}/>
            <Stack.Screen name = "ForgotPass" component={ForgotPassScreen}/>
            <Stack.Screen 
                name = "Home" 
                component={HomeScreen} 
                />
        </Stack.Navigator>
    )
}

export default MyStack