import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "../css/Notificaciones";

type Notificacion = {
  id: string;
  titulo: string;
  descripcion: string;
  hora: string;
  icono: keyof typeof Ionicons.glyphMap;
};

const HOY: Notificacion[] = [
  {
    id: 'n1',
    titulo: 'Perfil actualizado',
    descripcion: 'Tus datos de Cenicard han sido actualizados correctamente en el sistema SENA.',
    hora: '10:30 AM',
    icono: 'checkmark-circle-outline',
  },
  {
    id: 'n2',
    titulo: 'Vencimiento de carné',
    descripcion: 'Tu identificación digital expira en 5 días. ¡Gracias por todo!',
    hora: '10:30 AM',
    icono: 'warning-outline',
  },
];

const AYER: Notificacion[] = [
  {
    id: 'n3',
    titulo: 'Nuevo mensaje: Coordinación',
    descripcion: 'Se ha publicado el nuevo horario para el próximo trimestre académico.',
    hora: '10:30 AM',
    icono: 'notifications-outline',
  },
];

const Notificaciones = () => {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageTitle}>Notificaciones</Text>

      {/* HOY */}
      <Text style={styles.seccionLabel}>HOY</Text>
      {HOY.map((n) => (
        <View key={n.id} style={styles.card}>
          <View style={styles.iconWrapper}>
            <Ionicons name={n.icono} size={22} color="#2E7D32" />
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitulo}>{n.titulo}</Text>
              <Text style={styles.cardHora}>{n.hora}</Text>
            </View>
            <Text style={styles.cardDesc}>{n.descripcion}</Text>
          </View>
        </View>
      ))}

      {/* AYER */}
      <Text style={styles.seccionLabel}>AYER</Text>
      {AYER.map((n) => (
        <View key={n.id} style={styles.card}>
          <View style={styles.iconWrapper}>
            <Ionicons name={n.icono} size={22} color="#2E7D32" />
          </View>
          <View style={styles.cardBody}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitulo}>{n.titulo}</Text>
              <Text style={styles.cardHora}>{n.hora}</Text>
            </View>
            <Text style={styles.cardDesc}>{n.descripcion}</Text>
          </View>
        </View>
      ))}

      {/* Sin notificaciones */}
      <View style={styles.emptyRow}>
        <Ionicons name="notifications-off-outline" size={28} color="#CCC" />
        <Text style={styles.emptyText}>No hay más notificaciones</Text>
      </View>

    </ScrollView>
  );
};

export default Notificaciones;