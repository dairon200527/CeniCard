import React from "react";
import {
  Image, Text, TextInput,
  TouchableOpacity, View
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../css/Registro";

const Registro = () => {
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
          <Text style={styles.title}>Formulario de{'\n'}registro</Text>

          {/* Fila 1 */}
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.inputLabel}>Primer nombre</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.col}>
              <Text style={styles.inputLabel}>Segundo nombre</Text>
              <TextInput
                style={styles.input}
                placeholder="OPCIONAL"
                placeholderTextColor="#8B9F8F"
              />
            </View>
          </View>

          {/* Fila 2 */}
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.inputLabel}>Primer apellido</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.col}>
              <Text style={styles.inputLabel}>Segundo apellido</Text>
              <TextInput style={styles.input} />
            </View>
          </View>

          {/* Fila 3 */}
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.inputLabel}>Identificación</Text>
              <TextInput style={styles.input} keyboardType="numeric" />
            </View>
            <View style={styles.col}>
              <Text style={styles.inputLabel}>Código de ficha</Text>
              <TextInput style={styles.input} keyboardType="numeric" />
            </View>
          </View>

          {/* Fila 4 */}
          <View style={styles.row}>
            <View style={styles.colWide}>
              <Text style={styles.inputLabel}>Centro de formación</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.colNarrow}>
              <Text style={styles.inputLabel}>RH</Text>
              <TextInput style={styles.input} />
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ENVIAR</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
};

export default Registro;