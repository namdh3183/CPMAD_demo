import "react-native-gesture-handler"
import DemoAppbar from "./components/DemoAppbar.js"
import DemoBanner from "./components/DemoBanner.js"
import DemoDarkLightTheme from "./components/DemoDarkLightTheme.js"
import { PaperProvider } from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native"
import MyStack from "./routers/MyStack.js"
import MyDrawer from "./routers/MyDrawer.js"

const App = () => {

  return (
    <NavigationContainer>
      <PaperProvider>
      <MyStack/>
      </PaperProvider>
     
    </NavigationContainer>
  )
}

export default App
