import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function() {
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    function handleLogin() {
        const taiKhoan = "thang";
        const mk = "123";
        if((email == taiKhoan) && (password == mk) ){
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeTabs' }],
              });
        }
        else{
            Alert.alert("Lá»—i Ä‘Äƒng nháº­p","Sai tÃ i khoáº£n hoáº·c máº­t kháº©u ");
        }
    };
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image  source={require("../assets/images/HinhDaiDien.png")} style={{ height:150, width:150}}/>
            </View>
            <View style={style.title}>
                <Text style={{fontSize:40, fontWeight:'bold'}}>TT Delivery </Text>
                
                <Text style={{opacity:0.4}}>Log into your account</Text>
            </View>
            <View style={style.content}>
                <View style={style.content1}>
                    <Icon name='mail-outline' size={20}></Icon>
                    <TextInput
                    style={style.input}
                    placeholder='Enter your email'
                    value={email}
                    onChangeText={setEmail}
                    />
                </View>
                <View style={style.content2}>
                    <Icon name='lock-closed-outline' size={20}></Icon>
                    <TextInput
                    style={style.input}
                    placeholder='Enter your password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPass}
                    />
                <TouchableOpacity onPress={() => setShowPass(!showPass)} style={style.eyeButton}>
                    <Icon name='eye' size={20} ></Icon>
                </TouchableOpacity>
                
                </View>
                <View style={style.content3}>
                    <Text style={{color:"blue"}}>Forgot password?</Text>
                   
                </View>
            </View>
            <View style={style.button}>
                <TouchableOpacity style={style.opacity} onPress={handleLogin}>
                    <Text style={style.buttonContinue}>Continue</Text>

                </TouchableOpacity>
                
            </View>
            <View style={{flex:0.2,flexDirection:'row',backgroundColor:"white",alignItems:'center',justifyContent:'center'}}>
                 <View style={style.line} />
                <Text style={{fontSize:20}}>or</Text>
                <View style={style.line} />
            </View>
            <View style={{flex:1,flexDirection:"row",alignItems:'flex-start',justifyContent:'center',backgroundColor:"white"}}>
                <View style={{flexDirection:'row',marginTop:40,justifyContent:"space-between",marginRight:40,width:"40%"}}>
                <View style={style.iconContainer}><Icon name="logo-google" size={32} color="#EA4335" /></View>
                <View style={style.iconContainer}>
                <Icon name="logo-facebook" size={32} color="#4267B2" />
                </View>
                <View style={style.iconContainer}><Icon name="logo-apple" size={32} color="#000000" /></View>
                
                </View>
                

            </View>
        

        </View>
    );
}
const style = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:1,
        backgroundColor:"white",
        justifyContent:'center',
        alignItems:"center",

    },

    title: {
        flex:0.7,
        backgroundColor:"white",
        alignItems:"center", 
    },
    content:{
        flex:1.5,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"white",
    },
    content1:{
        flex:0.3,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginVertical:10,
        width:'80%'
    },
    content2:{
        flex:0.3,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginVertical:10,
        width:'80%'
    },
    content3:{
    
        alignSelf:'flex-end',
        marginRight:50
    },
    input:{
        marginLeft:10,
        width:'100%',
        height:40,
    },
    button:{
        flex:0.5,
      
        alignItems:"center",
        backgroundColor:"white"
    },
    opacity:{
        borderWidth:0.5,
        borderRadius:10,
        backgroundColor:'#5DB1F5',
        alignItems:"center",
        width:"80%",
        padding: 10,
    },
    buttonContinue:{
        fontSize:20,
        color:'white'

    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#000', // MÃ u cá»§a Ä‘Æ°á»ng káº»
        marginHorizontal: 15, // Khoáº£ng cÃ¡ch giá»¯a Ä‘Æ°á»ng káº» vÃ  chá»¯ "or"
        opacity:0.2
      },
      iconContainer: {
        width: 50, 
        height: 50, 
        borderRadius: 25, 
        borderWidth: 1,
        borderColor: 'black', // MÃ u viá»n cá»§a vÃ²ng trÃ²n
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10, // Khoáº£ng cÃ¡ch giá»¯a cÃ¡c vÃ²ng trÃ²n
    },
    eyeButton: {
        position: 'absolute', // Äáº·t vá»‹ trÃ­ tuyá»‡t Ä‘á»‘i
        right: 10, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})
