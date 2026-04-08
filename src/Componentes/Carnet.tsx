import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from "react";
import {
  Animated, Image, Modal, ScrollView,
  Text, TextInput, TouchableOpacity, View
} from "react-native";
import styles from "../css/Carnet";


type EstadoCarnet = 'Activo' | 'Prestamo';

const Carnet = ({ navigation }: any) => {
  const [volteado, setVolteado]   = useState(false);
  const [estado, setEstado]   = useState<EstadoCarnet>('Activo');
  const [modalCodigo, setModalCodigo]  = useState(false);
  const [codigo, setCodigo] = useState('');
  const [direccionCambio, setDireccionCambio] = useState<'activar' | 'prestar'>('prestar');
  const flipAnim  = useRef(new Animated.Value(0)).current;
  const posX = useRef(new Animated.Value(0)).current;
  const posY = useRef(new Animated.Value(0)).current;

  const voltear = () => {
    if (estado === 'Prestamo') return;
    Animated.spring(flipAnim, {
      toValue: volteado ? 0 : 1,
      useNativeDriver: true,
    }).start();
    setVolteado(!volteado);
  };

  const rotacionFrente = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const rotacionAtras = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const confirmarCodigo = () => {
    if (codigo === '1234') {
      if (direccionCambio === 'prestar') {
        setEstado('Prestamo');
        setVolteado(false);
      } else {
        setEstado('Activo');
      }
      setModalCodigo(false);
      setCodigo('');
    }
  };

  return (
    <View style={styles.fondoinicial}>
      

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity onPress={voltear} activeOpacity={1} style={styles.flipWrapper}>

          {/* FRENTE */}
          <Animated.View style={[
            styles.carnetCard,
            { transform: [{ rotateY: rotacionFrente }], backfaceVisibility: 'hidden' },
            estado === 'Prestamo' && styles.carnetBloqueado,
          ]}>
            {estado === 'Prestamo' ? (
              <View style={styles.bloqueadoWrapper}>
                <View style={styles.fotoRow}>
                  <Image source={require('../Img/logo_verde.png')} style={styles.logoCarnet} resizeMode="contain" />
                  <View style={styles.fotoPlaceholder}>
                    <Text style={styles.fotoText}>FOTOGRAFÍA</Text>
                  </View>
                </View>

                <View style={styles.alertaBox}>
                  <View style={styles.alertaIconWrapper}>
                    <Ionicons name="warning" size={36} color="#E53935" />
                  </View>
                  <Text style={styles.alertaTitulo}>Tu Carné se{'\n'}encuentra{'\n'}bloqueado</Text>
                  <View style={styles.estadoBadgePrestamo}>
                    <Text style={styles.estadoBadgeText}>En préstamo</Text>
                  </View>
                  <Text style={styles.alertaDesc}>
                    Si se trata de un error, debes comunicarte con el departamento administrativo.
                  </Text>
                </View>
              </View>
            ) : (
              <View style={{ flex: 1 }}>
                <View style={styles.fotoRow}>
                  <Image source={require('../Img/logo_verde.png')} style={styles.logoCarnet} resizeMode="contain" />
                  <View style={styles.fotoPlaceholder}>
                    <Text style={styles.fotoText}>FOTOGRAFÍA</Text>
                  </View>
                </View>

                <Animated.View style={[
                  styles.fechaVigencia,
                  { transform: [{ translateX: posX }, { translateY: posY }] }
                ]}>
                  <Text style={styles.fechaVigenciaText}>15/12/2025</Text>
                </Animated.View>

                <Text style={styles.rolLabel}>APRENDIZ</Text>
                <View style={styles.separador} />
                <Text style={styles.nombreCompleto}>Daniel Steeven{'\n'}Moreno Gamboa</Text>
                <Text style={styles.campo}>CC 1010240558</Text>
                <Text style={styles.campo}>RH:  O+</Text>

                <View style={styles.fechaRow}>
                  <Text style={styles.campo}>Fecha de{'\n'}vencimiento</Text>
                  <View style={styles.fechaBadge}>
                    <Text style={styles.fechaBadgeText}>10-02-2027</Text>
                  </View>
                </View>

                <View style={styles.separadorDelgado} />
                <Text style={styles.regional}>Regional Distrito Capital</Text>
                <Text style={styles.centro}>Centro para la industria{'\n'}de la Comunicación Gráfica</Text>
              </View>
            )}
          </Animated.View>

          {/*ATRÁS*/}
          <Animated.View style={[
  styles.carnetCard,
  styles.carnetAtras,
  { transform: [{ rotateY: rotacionAtras }], backfaceVisibility: 'hidden' },
]}>
  
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 10 }}
  >
    <Text style={styles.infoTitle}>Información del{'\n'}usuario</Text>

    {[
      { icon: 'people-outline', label: 'FICHA', valor: '3066747' },
      { icon: 'add-circle-outline', label: 'EPS', valor: 'Compensar EPS' },
      { icon: 'phone-portrait-outline', label: 'CELULAR', valor: '+57 316 6457890' },
      { icon: 'heart-outline', label: 'CONDICIÓN MÉDICA', valor: 'Discapacidad Auditiva' },
      { icon: 'people-circle-outline', label: 'CONTACTO DE EMERGENCIA', valor: 'Andrea Gamboa\n+57 311 500 1234' },
      { icon: 'settings-outline', label: 'PERFIL PROFESIONAL', valor: 'Desarrollador de software apasionado por crear soluciones escalables ' },
    ].map((item) => (
      <View key={item.label} style={styles.infoRow}>
        <View style={styles.infoIconWrapper}>
          <Ionicons name={item.icon as any} size={20} color="#2E7D32" />
        </View>
        <View style={styles.infoTextos}>
          <Text style={styles.infoLabel}>{item.label}</Text>
          <Text style={styles.infoValor}>{item.valor}</Text>
        </View>
      </View>
    ))}

  </ScrollView>

</Animated.View>

        </TouchableOpacity>
      </ScrollView>

      {estado === 'Activo' && (
        <TouchableOpacity style={styles.btnEstado} onPress={() => {
          setDireccionCambio('prestar');
          setModalCodigo(true);
        }}>
          <Text style={styles.btnEstadoText}>Estado</Text>
        </TouchableOpacity>
      )}

      {estado === 'Prestamo' && (
        <TouchableOpacity style={styles.btnCambiarEstado} onPress={() => {
          setDireccionCambio('activar');
          setModalCodigo(true);
        }}>
          <Text style={styles.btnCambiarEstadoText}>Cambiar estado</Text>
        </TouchableOpacity>
      )}


      {/*Modal código*/}
      <Modal visible={modalCodigo} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Ingresa el código</Text>
            <Text style={styles.modalSubtitle}>
              {direccionCambio === 'prestar'
                ? 'Ingresa el código para poner el carné en préstamo'
                : 'Ingresa el código para reactivar el carné'}
            </Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Código"
              placeholderTextColor="#8B9F8F"
              value={codigo}
              onChangeText={setCodigo}
              secureTextEntry
            />
            <TouchableOpacity style={styles.modalBtn} onPress={confirmarCodigo}>
              <Text style={styles.modalBtnText}>CONFIRMAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setModalCodigo(false); setCodigo(''); }}>
              <Text style={styles.modalCancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default Carnet;