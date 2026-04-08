import { CommonActions } from '@react-navigation/native';
import React from "react";
import {
  Image, Text, TextInput,
  TouchableOpacity, View
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../css/Login";

const Login = ({navigation}: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.fondoinicial}>

        {/* Fondo */}
        <View style={styles.containerfondo}>
          <Image
            style={styles.chicaimg}
            source={require('../Img/chica_logins.png')}
          />
          <Image
            style={styles.logoimg}
            source={require('../Img/logo_sena.png')}
          />
        </View>

        {/* Card */}
        <View style={styles.LoginContainer}>
          <Text style={styles.title}>Iniciar{'\n'}sesión</Text>

          <Text style={styles.subtitle}>
            ¡Bienvenido a <Text style={styles.subtitleBold}>CENICARD</Text>!
          </Text>

          <Text style={styles.inputLabel}>Documento</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu documento"
            placeholderTextColor="#8B9F8F"
            keyboardType="numeric"
          />

          <Text style={styles.inputLabel}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu contraseña"
            placeholderTextColor="#8B9F8F"
            secureTextEntry
          />

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'PageInicio' }],
                })
              );
            }}
          >
            <Text style={styles.buttonText}>INGRESAR</Text>
          </TouchableOpacity>
 
          <TouchableOpacity onPress={() => navigation.navigate('RecuperarPassword')}>
            <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <View style={styles.registerRow}>
            <Text style={styles.registerText}>¿No tienes una cuenta aún?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
              <Text style={styles.registerLink}> Regístrate ahora</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </SafeAreaView>
  );
};

export default Login;