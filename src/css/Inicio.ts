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
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
  },

  sectionTitle: {
     fontSize: 22,
  fontWeight: '800',
  color: '#1A1A1A',
  marginBottom: 16,
  borderBottomWidth: 2,
  borderBottomColor: '#000000',
  paddingBottom: 8,
  },

  // Noticia destacada 
  cardDestacada: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
  },

  cardDestacadaImgWrapper: {
    height: 160,
    backgroundColor: '#C8E6C9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardDestacadaImg: {
    width: '100%',
    height: '100%',
  },

  badgeCategoria: {
    position: 'absolute',
    bottom: 10,
    left: 12,
    backgroundColor: '#007832',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  badgeCategoriaText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  cardDestacadaBody: {
    padding: 14,
  },

  cardDestacadaTitulo: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 6,
  },

  cardDestacadaDesc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 19,
    marginBottom: 12,
  },

  cardDestacadaFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btnLeerMas: {
    backgroundColor: '#2D6A2D',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },

  btnLeerMasText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },

  // Noticias pequeñas
  cardSmall: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
  },

  cardSmallImg: {
    width: 90,
    height: 100,
    backgroundColor: '#C8E6C9',
  },

  cardSmallBody: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },

  cardSmallTitulo: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 4,
  },

  cardSmallDesc: {
    fontSize: 12,
    color: '#666',
    lineHeight: 17,
    marginBottom: 8,
  },

  cardSmallFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardSmallCategoria: {
    fontSize: 11,
    color: '#007832',
    fontWeight: '700',
  },

  tiempoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  tiempoText: {
    fontSize: 11,
    color: '#888',
  },

});

export default styles;