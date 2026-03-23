import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../css/Barrasup';

const Barrasup = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
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
          source={require('../Img/logo_verde.png')}
          style={{ width: 45, height: 45 }}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default Barrasup;