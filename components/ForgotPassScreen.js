import { useState } from "react"
import { Image, ImageBackground, StyleSheet, View } from "react-native"
import { Button, HelperText, Text, TextInput } from "react-native-paper"

const ForgotPassScreen = ({navigation, route}) => {
  const {userEmail} = route.params
  
  const [password, setPassword] = useState("")
  const [repassword, setRePassword] = useState("")
  const [showPass, setShowPass] = useState(false)

  const checkPassword = ()=>{
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password) || password === ""
  }

  const checkRePassword = () => {
    return repassword == password
  }

  const handleReset = () => {
    alert("Your password has been changed !\n Please Sign in again !")
    navigation.navigate("Login")
  }

  return (
    <ImageBackground
      source={require("../image/background.png")}
      style={styles.container}>
        <Image source={require("../image/moon.png")} style={ styles.image }/>

        <View style={ styles.form }>
          <Text style={styles.header}>Forgot your password ?</Text>

          <Text style={{...styles.text, alignSelf:"center", marginBottom: 20}}>{userEmail}</Text>

          <Text style={styles.text}>New Password</Text>

          <TextInput 
            placeholder="Enter your password..."
            secureTextEntry={!showPass}
            style={styles.txtInput}
            onChangeText={(text) => setPassword(text)}
            left={<TextInput.Icon icon={"key"}/>}
            right={
              <TextInput.Icon 
                icon={(showPass)?"eye":"eye-off"} 
                onPress={() => setShowPass(!showPass)} />
            }
            value={password}/>

          <HelperText type="error" visible={!checkPassword()}>
            Please re-enter password !
          </HelperText>

          <Text style={styles.text}>Re-enter New Password</Text>

          <TextInput 
            placeholder="Enter your password..."
            secureTextEntry={!showPass}
            style={styles.txtInput}
            onChangeText={(text) => setRePassword(text)}
            left={<TextInput.Icon icon={"key"}/>}
            right={
              <TextInput.Icon 
                icon={(showPass)?"eye":"eye-off"} 
                onPress={() => setShowPass(!showPass)} />
            }
            value={repassword}/>
          <HelperText type="error" visible={!checkRePassword()}>
            Your re-enter password must be same with your Password!
          </HelperText>

          <Button 
            mode="contained-tonal" 
            style={styles.button}
            onPress={handleReset}>
              <Text style={styles.txtBtn}>Reset Password</Text>
          </Button>
        </View>
    </ImageBackground>
  )
}

export default ForgotPassScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aqua"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  form: {
    backgroundColor: "white", 
    padding: 30,
    borderRadius: 20
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#243b54",
    marginBottom: 20
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  txtInput: {
    paddingLeft: 10,
    marginTop: 5,
    width: 300,
    height: 40
  },

  button: {
    alignSelf: "center",
    width: 200,
    marginTop: 20
  },

  txtBtn: {
    fontSize: 20,
    fontWeight: "700",
  },
  forgotBtn: {
    alignSelf: "flex-end",
  }
})