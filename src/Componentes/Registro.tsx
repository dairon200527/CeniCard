import ract from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, navigation } from 'react-native';
 import styles from '../css/Registro';

const Login = () => {
  return (
    <View>


        <View style={styles.containerfondo}>
            <Image>
                source={require('aca va el logo en una equina .-.')} >
            </Image>

            <Image>
                source={require('aca va la imagen')} >
            </Image>

        </View>

        <View style={styles.RegistroContainer}>
            <Text>Formulario de registro </Text>


            <Text style={styles.inputLabel}>Primer Nombre</Text>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#8B9F8F"
            />

            <Text style={styles.inputLabel}>Segundo Nombre</Text>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#8B9F8F"
            />

             <Text style={styles.inputLabel}>Primer apellido</Text>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#8B9F8F"
            />

            <Text style={styles.inputLabel}>Segundo apellido</Text>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#8B9F8F"
            />


            <Text style={styles.inputLabel}>Identificacion</Text>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#8B9F8F"
            />

            <Text style={styles.inputLabel}>Codigo de ficha</Text>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#8B9F8F"
            />

             <Text style={styles.inputLabel}>Centro de formacion</Text>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#8B9F8F"
            />

             <Text style={styles.inputLabel}>RH</Text>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor="#8B9F8F"
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('aca va la pagina de inicio')}>
                    <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>


            

        </View>

    </View>
    
    
  );
};

export default Login;