import { View } from "react-native"
import { Appbar } from "react-native-paper"

const DemoAppbar = () => {
    const handleGoBack = () => {alert("Go back")}
    const handleSearch = () => {alert("Searching")}
    const handleShowMenu = () => {alert("Show menu")}
    
    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={handleGoBack}/>
            <Appbar.Content title="Appbar View"/>
            <Appbar.Action icon={"magnify"} onPress={handleSearch}/>
            <Appbar.Action icon={"dots-vertical"} onPress={handleShowMenu}/>
        </Appbar.Header>
    )
}

export default DemoAppbar