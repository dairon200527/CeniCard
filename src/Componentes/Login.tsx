import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, navigation } from 'react-native';
 import styles from '../css/Login';

const Login = () => {
  return (
    <View>

        <View style={styles.containerfondo}>
            <Image
                source={require('../Img/chicha_logins.png')} >
            </Image>

            <Image
                source={require('../Img/chicha_logins.png')} >
            </Image>

        </View>

        <View style={styles.LoginContainer}>
            <Text>Iniciar sesion</Text>

            <Text>Bienvenido a cenicard</Text>

            <Text style={styles.inputLabel}>Documento</Text>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#8B9F8F"
            />

            <Text style={styles.inputLabel}>Contraseña</Text>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#8B9F8F"
                    secureTextEntry={true}
            />

            <TouchableOpacity onPress={() => navigation.navigate('aca va el el formu para recuperar contraseña')}>
                    <Text style={styles.forgotPassword}>¿Olvidaste la{'\n'}contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('aca va la pagina de inicio')}>
                    <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('aca va el el formu para registrarce')}>
                    <Text style={styles.forgotPassword}>no tiebes cuenta aun registrate ahora</Text>
            </TouchableOpacity>

        </View>

    </View>
    
    
  );
};

export default Login;