import { useState } from "react"
import { Image, ImageBackground, StyleSheet, View } from "react-native"
import { Button, HelperText, Text, TextInput } from "react-native-paper"

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)

  const checkEmail = () => {
    return email.includes("@") || email === ""
  }
  const checkPassword = ()=>{
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password) || password === ""
  }

  const handleLogin = () => {
    if (email === "hoainam@gmail.com" && password === "&Namdh123")
      navigation.navigate("Home", {userEmail: email})
  }

  const handleForgot = () => {
    navigation.navigate("ForgotPass", {userEmail: email})
  }

  const handleCreate = () => {
    navigation.navigate("CreateAcc")
  }

  return (
    <ImageBackground
      source={require("../image/background.png")}
      style={styles.container}>
        <Image source={require("../image/moon.png")} style={ styles.image }/>
        <View style={ styles.form }>
          <Text style={styles.header}>Sign up with your account</Text>
          <Text style={styles.text}>Email address</Text>
          <TextInput 
            placeholder="Enter your email..."
            style={styles.txtInput}
            onChangeText={(text) => (setEmail(text))}
            left={<TextInput.Icon icon={"email"}/>}
            value={email}/>
          <HelperText type="error" visible={!checkEmail()} style={styles.helpertext}>
              Please re-enter email !
          </HelperText>
          <Text style={styles.text}>Password</Text>
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
          <HelperText type="error" visible={!checkPassword()} style={styles.helpertext}>
            Please re-enter password !
          </HelperText>
          <Button mode="text" style={styles.forgotBtn} onPress={handleForgot}>Forgot your password ?</Button>
          <Button 
            mode="contained-tonal" 
            style={styles.button}
            onPress={handleLogin}>
              <Text style={styles.txtBtn}>Sign in</Text>
          </Button>
          <Button mode="text" style={styles.createBtn} onPress={handleCreate}>or Create new account</Button>
        </View>
    </ImageBackground>
  )
}

export default LoginScreen

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
  },

  txtBtn: {
    fontSize: 20,
    fontWeight: "700",
  },
  forgotBtn: {
    alignSelf: "flex-end",
  },
  createBtn: {
    alignSelf: "center",
  },
  helpertext: {
    margin: -7
  }
})