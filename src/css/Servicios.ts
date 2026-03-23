import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const cardW = (width - 48) / 2;

const styles = StyleSheet.create({

  fondoinicial: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },

  scroll: { flex: 1 },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },

  // Header
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },

  pageTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1A1A1A',
  },

  pageSubtitle: {
    fontSize:15,
    color: '#666',
    marginTop: 20,
    maxWidth: '100%',
  },

  btnCodigo: {
    borderWidth: 1.5,
    borderColor: '#2E7D32',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },

  btnCodigoText: {
    color: '#2E7D32',
    fontWeight: '700',
    fontSize: 13,
  },

  // Categorías
  categoriasRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  categoriaItem: {
    alignItems: 'center',
    gap: 6,
  },

  categoriaImgWrapper: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: '#E8F5E9',
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  categoriaImgWrapperActive: {
    borderColor: '#2E7D32',
  },

  imgPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C8E6C9',
  },

  categoriaLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },

  categoriaLabelActive: {
    color: '#2E7D32',
    fontWeight: '700',
  },

  // Tabs
  tabsRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 16,
  },

  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },

  tabLabel: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },

  tabLabelActive: {
    color: '#2E7D32',
    fontWeight: '700',
  },

  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: '60%',
    backgroundColor: '#2E7D32',
    borderRadius: 4,
  },

  // Ver préstamos
  btnPrestamos: {
    backgroundColor: '#2E7D32',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center',
    marginBottom: 16,
  },

  btnPrestamosText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13, 
  },

  // Grid equipos
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  equipoCard: {
    width: cardW,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    elevation: 2,
  },

  estadoBadge: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 8,
    alignSelf: 'flex-end',
  },

  estadoText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '700',
  },

  equipoImgPlaceholder: {
    width: '100%',
    height: 80,
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
    marginBottom: 8,
  },

  equipoNumero: {
    fontSize: 22,
    fontWeight: '800',
    color: '#333',
    marginBottom: 8,
  },

  btnSolicitar: {
    borderWidth: 1,
    borderColor: '#C8E6C9',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },

  btnSolicitarText: {
    fontSize: 12,
    color: '#555',
  },

  // Modales
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

  prestamosEmpty: {
    paddingVertical: 30,
    alignItems: 'center',
  },

  prestamosEmptyText: {
    color: '#999',
    fontSize: 14,
  },

});

export default styles;