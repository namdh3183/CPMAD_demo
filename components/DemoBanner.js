import { useState } from "react"
import { View } from "react-native"
import { Banner, Button } from "react-native-paper"

const DemoBanner = () => {
    const [visible, setVisible] = useState(false)
    const openBanner = () => {setVisible(!visible)}
    return (
        <View style={{ flex: 1}}>
            <Banner
                visible={visible}
               
                actions={[
                    {
                        label: "OK",
                        onPress: () => setVisible(false),
                        icon: "check"
                    },
                    {
                        label: "Cancel",
                        onPress: () => setVisible(false),
                        icon: "cancel"
                    }
                ]}
                icon={"star"}>
                This is a banner !
            </Banner>
            <Button style={{alignSelf:"center", width: 200}} onPress={openBanner} buttonColor="lightgray">Open banner</Button>
        </View>
        
    )
}

export default DemoBanner