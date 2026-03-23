import React from "react";
import {
    Image, Text, TextInput,
    TouchableOpacity, View
} from "react-native";
import styles from "../css/RecuperarPassword";

const RecuperarPassword = () => {
  return (
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
          placeholder="Ingresa tu Correo electrònico"
          placeholderTextColor="#8B9F8F"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default RecuperarPassword;