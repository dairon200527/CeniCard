import { Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";
import {
  Image,
  Modal, ScrollView, Text,
  TextInput, TouchableOpacity, View
} from "react-native";
import styles from "../css/Servicios";

type Categoria = 'Portatiles' | 'Tablets' | 'Otros';
type TabActivo = 'Trabajo' | 'Entretenimiento';

const CATEGORIAS: { name: Categoria; label: string; icon: keyof typeof Ionicons.glyphMap; img: any }[] = [
  { name: 'Portatiles', label: 'Portátiles', icon: 'laptop-outline',           img: require('../Img/computador.png') },
  { name: 'Tablets',    label: 'Tablets',    icon: 'tablet-portrait-outline',  img: require('../Img/tablet_dibujo.png') },
  { name: 'Otros',      label: 'Otros',      icon: 'cube-outline',             img: require('../Img/computador.png') },
];

const equipos = [
  { id: '1', numero: 59, estado: 'Disponible' },
  { id: '2', numero: 56, estado: 'No disponible' },
  { id: '3', numero: 58, estado: 'Ocupado' },
  { id: '4', numero: 20, estado: 'Disponible' },
];

const estadoColor: Record<string, string> = {
  'Disponible':    '#2E7D32',
  'No disponible': '#C62828',
  'Ocupado':       '#F57F17',
};

const Servicios = ({ navigation }: any) => {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('Portatiles');
  const [tabActivo, setTabActivo]             = useState<TabActivo>('Trabajo');
  const [modalCodigo, setModalCodigo]         = useState(false);
  const [modalPrestamos, setModalPrestamos]   = useState(false);
  const [codigo, setCodigo]                   = useState('');

  return (
    <View style={styles.fondoinicial}>
      

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={{ flex: 1, marginRight:12 }}>
            <Text style={styles.pageTitle}>Servicios</Text>
            <Text style={styles.pageSubtitle}>Gestión de recursos y préstamos institucionales</Text>
          </View>
          <TouchableOpacity style={styles.btnCodigo} onPress={() => setModalCodigo(true)}>
            <Text style={styles.btnCodigoText}>Código</Text>
          </TouchableOpacity>
        </View>

        {/* Categorías */}
        <View style={styles.categoriasRow}>
          {CATEGORIAS.map((cat) => (
            <TouchableOpacity
              key={cat.name}
              style={styles.categoriaItem}
              onPress={() => setCategoriaActiva(cat.name)}
            >
              <View style={[
                styles.categoriaImgWrapper,
                categoriaActiva === cat.name && styles.categoriaImgWrapperActive
              ]}>
                <Ionicons
                  name={cat.icon}
                  size={34}
                  color={categoriaActiva === cat.name ? '#2E7D32' : '#888'}
                />
              </View>
              <Text style={[
                styles.categoriaLabel,
                categoriaActiva === cat.name && styles.categoriaLabelActive
              ]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tabs */}
        <View style={styles.tabsRow}>
          {(['Trabajo', 'Entretenimiento'] as TabActivo[]).map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tabItem}
              onPress={() => setTabActivo(tab)}
            >
              <Text style={[styles.tabLabel, tabActivo === tab && styles.tabLabelActive]}>
                {tab}
              </Text>
              {tabActivo === tab && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Ver préstamos */}
        <TouchableOpacity style={styles.btnPrestamos} onPress={() => setModalPrestamos(true)}>
          <Text style={styles.btnPrestamosText}>Ver préstamos</Text>
        </TouchableOpacity>

        {/* Grid equipos */}
        <View style={styles.grid}>
          {equipos.map((eq) => (
            <View key={eq.id} style={styles.equipoCard}>
              <View style={[styles.estadoBadge, { backgroundColor: estadoColor[eq.estado] }]}>
            <Text style={styles.estadoText}>{eq.estado}</Text>
            </View>
              <Image
            source={CATEGORIAS.find(c => c.name === categoriaActiva)?.img}
            style={styles.equipoImgPlaceholder}
            resizeMode="contain"
            />
            <Text style={styles.equipoNumero}>{eq.numero}</Text>
              <TouchableOpacity style={styles.btnSolicitar}>
                <Text style={styles.btnSolicitarText}>Solicitar</Text>
              </TouchableOpacity>
        </View>
      ))}
      </View>

    </ScrollView>

      {/* Modal Código */}
      <Modal visible={modalCodigo} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Ingresar código</Text>
            <Text style={styles.modalSubtitle}>Ingresa el código del equipo para continuar</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Código"
              placeholderTextColor="#8B9F8F"
              value={codigo}
              onChangeText={setCodigo}
            />
            <TouchableOpacity style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>CONFIRMAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalCodigo(false)}>
              <Text style={styles.modalCancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal Préstamos */}
      <Modal visible={modalPrestamos} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Mis préstamos</Text>
            <Text style={styles.modalSubtitle}>Aquí aparecerán tus préstamos activos</Text>
            <View style={styles.prestamosEmpty}>
              <Text style={styles.prestamosEmptyText}>No tienes préstamos activos</Text>
            </View>
            <TouchableOpacity onPress={() => setModalPrestamos(false)}>
              <Text style={styles.modalCancelar}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default Servicios;