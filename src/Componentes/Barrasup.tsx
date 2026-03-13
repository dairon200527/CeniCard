import React from "react";
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../css/Barrasup'

const Barrasup = ()=>{
    return(
        <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.iconWrapper}>
          <Ionicons name="card-outline" size={24} color="#fff" />
        </View>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Cenicard</Text>
          <Text style={styles.subtitle}>CARNÉ DIGITAL</Text>
        </View>
      </View>

      <Image
        source={require('../Img/logo_sema_cenmicard.png')}
        style={{ width: 38, height: 38 }}
        resizeMode="contain"
      />
    </View>
    );

};
    
export default Barrasup;
