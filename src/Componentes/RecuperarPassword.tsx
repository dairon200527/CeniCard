import React from "react";
import {
  Image, Text, TextInput,
  TouchableOpacity, View
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../css/RecuperarPassword";

const RecuperarPassword = () => {
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
          <Text style={styles.title}>Recuperar{'\n'}contraseña</Text>

          <Text style={styles.subtitle}>
            No te preocupes,{'\n'}¡eso le pasa hasta a los mejores!
          </Text>

          <Text style={styles.subtitle2}>
            Ingresa tu correo electrónico para{'\n'}restablecer tu contraseña.
          </Text>

          <Text style={styles.inputLabel}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu Correo electrónico"
            placeholderTextColor="#8B9F8F"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ENVIAR</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
};

export default RecuperarPassword;