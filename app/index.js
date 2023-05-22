import {  View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';


const Home = () =>{
    return (
        <SafeAreaView>
            <ImageBackground source={require('./assets/home_bg.jpg')} style={{width:"100%", height: "100%"}}>
                <View style={styles.container}>
                    <View style={styles.logo_container}>
                        <Image source={require('./assets/panda-icon.png')} style={styles.logo} resizeMode='contain'/>
                        <Text style={styles.logo_font}>Geek Profiles</Text>
                        <TextInput style={styles.input} placeholder='Email' inputMode='email' textAlign='center' />
                        <TextInput style={styles.input} placeholder='Password' textAlign='center' secureTextEntry={true}/>
                        <TouchableOpacity style={[styles.login_button]}><Text style={styles.button_text}>Sign in</Text></TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    input:{
        backgroundColor: '#fff',
        marginBottom:5,
        padding: 4,
        borderBottomWidth: 0.3,
        borderBottomColor: 'lightgray',
        width: 200
    },

    logo: {
        width: 150,
        height: 150
    },
    logo_container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 45,
        borderRadius: 10
    },
    logo_font:{
        fontWeight: 'bold',
        borderBottomWidth: 10,
        marginBottom: 20
    },
    login_button:{
        backgroundColor:'#000',
        marginVertical: 10,
        padding:10,
        borderRadius: 7,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    button_text:{
        color: 'white'
    }
})