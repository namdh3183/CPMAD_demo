import { createDrawerNavigator } from "@react-navigation/drawer"
import LoginScreen from "../components/LoginScreen"
import CreateAccScreen from "../components/CreateAccScreen"
import ForgotPassScreen from "../components/ForgotPassScreen"
import HomeScreen from "../components/HomeScreen"


const Drawer = createDrawerNavigator()
const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name = "Login" component={LoginScreen}/>
            <Drawer.Screen name = "CreateAcc" component={CreateAccScreen}/>
            <Drawer.Screen name = "ForgotPass" component={ForgotPassScreen}/>
            <Drawer.Screen name = "Home" component={HomeScreen}/>
        </Drawer.Navigator>
    )
}

export default MyDrawer