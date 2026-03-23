import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  fondoinicial: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },

  flipWrapper: {
    flex: 1,
  },

  carnetCard: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0F0E0',
  },

  carnetAtras: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  carnetBloqueado: {
    borderColor: '#FFCDD2',
  },

  fotoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },

  logoCarnet: {
    width: 100,
    height: 100,
  },

  fotoPlaceholder: {
    width: 160,
    height: 210,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fotoText: {
    color: '#999',
    fontSize: 12,
    fontWeight: '600',
  },

  fechaVigencia: {
   position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'transparent',
  borderRadius: 20,
  paddingHorizontal: 14,
  paddingVertical: 5,
  zIndex: 10,
  },

  fechaVigenciaText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    backgroundColor:'#bbc3cc',
    borderRadius:10,
    padding:3
  },

  rolLabel: {
    fontSize: 13,
    fontWeight: '800',
    color: '#555',
    letterSpacing: 1,
    marginBottom: 6,
  },

  separador: {
    height: 3,
    backgroundColor: '#2E7D32',
    marginBottom: 12,
    width: 340,
  },

  nombreCompleto: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2E7D32',
    marginBottom: 8,
    lineHeight: 24,
  },

  campo: {
    fontSize: 20,
    color: '#333',
    marginBottom: 6,
  },

  fechaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  fechaBadge: {
    backgroundColor: '#2E7D32',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },

  fechaBadgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },

  separadorDelgado: {
    height: 2,
    backgroundColor: '#2E7D32',
    marginBottom: 10,
  },

  regional: {
    fontSize: 19,
    color: '#555',
    marginBottom: 2,
    top:15
  },

  centro: {
    fontSize: 17,
    color: '#2E7D32',
    fontWeight: '700',
    top:20
  },

  btnEstado: {
    borderWidth: 1.5,
    borderColor: '#2E7D32',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignSelf: 'center',
    top:-10
  },

  btnEstadoText: {
    color: '#2E7D32',
    fontWeight: '700',
    fontSize: 13,
  },

  bloqueadoWrapper: {
    flex: 1,
    alignItems: 'center',
  },

  alertaBox: {
    backgroundColor: '#FFF3E0',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FFCCBC',
  },

  alertaIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  alertaTitulo: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 12,
  },

  estadoBadgePrestamo: {
    backgroundColor: '#FFA726',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginBottom: 12,
  },

  estadoBadgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },

  alertaDesc: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
  },

  btnCambiarEstado: {
    borderWidth: 1.5,
    borderColor: '#2E7D32',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignSelf: 'center',
    top:-10
  },

  btnCambiarEstadoText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 14,
  },

  infoTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 30,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#e5eee4a2',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },

  infoIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoTextos: {
    flex: 1,
  },

  infoLabel: {
    fontSize: 10,
    color: '#999',
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 2,
  },

  infoValor: {
    fontSize: 14,
    color: '#1A1A1A',
    fontWeight: '500',
    lineHeight: 20,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },

  modalCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 28,
    paddingBottom: 40,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 6,
  },

  modalSubtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20,
  },

  modalInput: {
    backgroundColor: '#c8e6c99a',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
  },

  modalBtn: {
    backgroundColor: '#2D6A2D',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },

  modalBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 1.2,
  },

  modalCancelar: {
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
    paddingTop: 4,
  },

});

export default styles;