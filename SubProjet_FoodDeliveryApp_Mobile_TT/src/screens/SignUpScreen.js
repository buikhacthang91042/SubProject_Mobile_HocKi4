import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import auth, { firebase } from '@react-native-firebase/auth'
export default function SignUpScreen() {
 const initialValues = {sdt:'', HoVaTenDem:'',Ten:'', email:'', password:''}
 const [showPass, setShowPass] = useState(false);
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
 const [confirmpassword,setConfirmpassword] = useState('');
 const [phone,setPhone] = useState('');
 const [name,setName] = useState('');
 const [address,setAddress] = useState('');
 const navigation = useNavigation();
 const [customError, setCustomError] = useState('');
 const [successmsg, setSuccessmsg] = useState(null);
  const SignUp = () => {
      const FormData = {
        email: email,
        password:password,
        phone: phone,
        name: name,
        address: address
      }
      if(password != confirmpassword) {
       setCustomError('Mật khẩu không khớp !');
       return;

      }
      else if(phone.length != 10) {
        setCustomError('Số điện thoại phải là 10 só');
        return;
      }
        try{
          firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(()=> {
            console.log("Đã tạo nguười dùng");
            setSuccessmsg("Đã tạo thành công")
            //navigation.navigate('Login')     
               const userRef = firebase.firestore().collection('UserData')
                userRef.add(FormData)
              })
            .catch((error) => {
              console.log('Đăng kí lỗi', error.message);
          
          })
        }catch(error) {
            
          console.log(error.message);
        }
       
      

  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Tạo tài khoản</Text>
      <Text style={styles.subHeaderText}>Vui lòng nhập thông tin cá nhân</Text>

      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          SignUp(values);
        }}>
        {props => (
          <View>
            <View style={styles.inputContainer}>
              <View style={styles.inputField}>
                <Icon name="phone-portrait-outline" size={20} color="#888" />
                <TextInput
                  style={styles.input}
                  placeholder="Số điện thoại"
                  keyboardType='number-pad'
                  autoFocus={true}
                  onChangeText={(text) => setPhone(text)}
                  
                />
              </View>
            
              <View style={styles.inputField}>
                <Icon name="person-outline" size={20} color="#888" />
                <TextInput
                  style={styles.input}
                  placeholder="Họ và tên"
                  onChangeText={(text) => setName(text)}
                />
              </View>
              <View style={styles.inputField}>
                <Icon name="mail-outline" size={20} color="#888" />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={styles.inputField}>
                <Icon name="lock-closed-outline" size={20} color="#888" />
                <TextInput
                  style={styles.input}
                  placeholder="Mật khẩu"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={!showPass}
                
                />
               <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                  <Icon
                    name={showPass ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.inputField}>
                <Icon name="lock-closed-outline" size={20} color="#888" />
                <TextInput
                  style={styles.input}
                  placeholder="Xác thực mật khẩu"
                  onChangeText={(text) => setConfirmpassword(text)}
                  secureTextEntry={!showPass}
                
                />
               <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                  <Icon
                    name={showPass ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.inputField}>
                <Icon name="mail-outline" size={20} color="#888" />
                <TextInput
                  style={styles.input}
                  placeholder="Địa chỉ"
                  onChangeText={(text) => setAddress(text)}
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.createAccountButton}
              onPress={() => SignUp() }>
              <Text style={styles.createAccountText}>Tạo tài khoản</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <Text style={styles.orText}>Hoặc</Text>

      <View style={styles.luaChonKhac}>
        <Text >Bạn đã có tài khoản ?</Text>
          <TouchableOpacity style={{marginLeft:5}}
            onPress={navigation.goBack}
          >

            <Text style={{color:"blue"}}>Đăng nhập</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',

  },
  input: {
    height:50,
    width:"85%",
    padding: 10,
  },
  createAccountButton: {
    backgroundColor: '#009966',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    marginTop:10
  },
  createAccountText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 10,
  },

  luaChonKhac: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '100%',
    
  },
});
