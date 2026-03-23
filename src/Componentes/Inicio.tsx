import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../css/Inicio";

const noticiaDestacada = {
  id: '1',
  categoria: 'PRIMERA CONVOCATORIA',
  titulo: 'Inicio a la Primera Convocatoria de Apoyo de Transporte 2026.',
  descripcion: 'Se abren nuevas convocatoria para el apoyo de transporte hasta el 10 de marzo.',
  tiempo: 'Hace 2 horas',
};

const noticias = [
  {
    id: '2',
    titulo: 'Nuevo subdirector en Cenigraf',
    descripcion: 'Se abren nuevas convocatoria para el apoyo de transporte hasta el 10 de marzo.',
    categoria: 'Noticias del centro',
    tiempo: 'Hace 2 días',
  },
  {
    id: '3',
    titulo: 'Nuevo subdirector en Cenigraf',
    descripcion: 'Se abren nuevas convocatoria para el apoyo de transporte hasta el 10 de marzo.',
    categoria: 'Noticias del centro',
    tiempo: 'Hace 2 días',
  },
    {
    id: '4',
    titulo: 'Nuevo subdirector en Cenigraf',
    descripcion: 'Se abren nuevas convocatoria para el apoyo de transporte hasta el 10 de marzo.',
    categoria: 'Noticias del centro',
    tiempo: 'Hace 2 días',
  },
    {
    id: '5',
    titulo: 'Nuevo subdirector en Cenigraf',
    descripcion: 'Se abren nuevas convocatoria para el apoyo de transporte hasta el 10 de marzo.',
    categoria: 'Noticias del centro',
    tiempo: 'Hace 2 días',
  },
];

const Inicio = ({ navigation }: any) => {
  return (
    <View style={styles.fondoinicial}>
      

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.sectionTitle}>Noticias Recientes</Text>

        {/* Noticia destacada */}
        <View style={styles.cardDestacada}>
          <View style={styles.cardDestacadaImgWrapper}>
            <Image
              source={require('../Img/logo_sena.png')}
              style={styles.cardDestacadaImg}
              resizeMode="cover"
            />
            <View style={styles.badgeCategoria}>
              <Text style={styles.badgeCategoriaText}>{noticiaDestacada.categoria}</Text>
            </View>
          </View>

          <View style={styles.cardDestacadaBody}>
            <Text style={styles.cardDestacadaTitulo}>{noticiaDestacada.titulo}</Text>
            <Text style={styles.cardDestacadaDesc}>{noticiaDestacada.descripcion}</Text>
            <View style={styles.cardDestacadaFooter}>
              <View style={styles.tiempoRow}>
                <Ionicons name="time-outline" size={13} color="#888" />
                <Text style={styles.tiempoText}>{noticiaDestacada.tiempo}</Text>
              </View>
              <TouchableOpacity style={styles.btnLeerMas}>
                <Text style={styles.btnLeerMasText}>Leer más</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Noticias pequeñas */}
        {noticias.map((n) => (
          <View key={n.id} style={styles.cardSmall}>
            <Image
              source={require('../Img/logo_sena.png')}
              style={styles.cardSmallImg}
              resizeMode="cover"
            />
            <View style={styles.cardSmallBody}>
              <Text style={styles.cardSmallTitulo}>{n.titulo}</Text>
              <Text style={styles.cardSmallDesc}>{n.descripcion}</Text>
              <View style={styles.cardSmallFooter}>
                <Text style={styles.cardSmallCategoria}>{n.categoria}</Text>
                <View style={styles.tiempoRow}>
                  <Ionicons name="time-outline" size={12} color="#888" />
                  <Text style={styles.tiempoText}>{n.tiempo}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}

      </ScrollView>

    </View>
  );
};

export default Inicio;