import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({

  fondoinicial: {
    flex: 1,
    backgroundColor: '#007832',
  },

  containerfondo: {
    height: height * 0.25, // 👈 más pequeño porque hay más contenido
    backgroundColor: '#007832',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  chicaimg: {
    width: '65%',
    height: 180,
    resizeMode: 'contain',
  },

  logoimg: {
    position: 'absolute',
    top: 20,
    right: 15,
    width: 70,
    height: 80,
    resizeMode: 'contain',
  },

  LoginContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 92,
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 40,
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#4d4c4c',
    textAlign: 'center',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // 👈 clave
    marginBottom: 12,
  },

  col: {
    flex: 1,
    marginRight: 8,
  },

  colWide: {
    flex: 2,
    marginRight: 8,
  },

  colNarrow: {
    flex: 1,
  },

  inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },

  input: {
    backgroundColor: '#c8e6c99a',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: '#333',
  },

  button: {
    backgroundColor: '#2D6A2D',
    borderRadius: 30,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 1.5,
  },

});

export default styles;