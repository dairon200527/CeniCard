import { Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold, useFonts } from '@expo-google-fonts/nunito';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../css/Login';

const Login = () => {

    ///estilo letras
    const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return null;


  return (
    

    <View>

      {/* ── Header verde con fotos ── */}
      <View style={styles.containerfondo}>
        <Image style={styles.chicaimg}
          source={require('../Img/chica_logins.png')}
        />
        <Image style={styles.logoimg}
          source={require('../Img/logo_sena.png')}
        />
      </View>

      {/* ── Tarjeta blanca ── */}
      <View style={styles.LoginContainer}>

        <Text style={styles.title}>Iniciar{'\n'}sesión</Text>

        <Text style={styles.subtitle}>
          ¡Bienvenido a <Text style={styles.subtitleBold}>CENICARD</Text>!
        </Text>

        <Text style={styles.inputLabel}>Documento</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#8B9F8F"
          keyboardType="numeric"
        />

        <Text style={styles.inputLabel}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#8B9F8F"
          secureTextEntry={true}
        />

         <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

       

        <View style={styles.registerRow}>
          <Text style={styles.registerText}>¿No tienes una cuenta aún? </Text>
          <TouchableOpacity>
            <Text style={styles.registerLink}>Regístrate ahora</Text>
          </TouchableOpacity>
        </View>

      </View>
      

    </View>
   
   
  );
};

export default Login;