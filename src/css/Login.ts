import { Dimensions, StyleSheet } from 'react-native';
 
const { width, height } = Dimensions.get('window');

const GREEN_DARK  = '#007A3D';
const GREEN_MID   = '#009A4E';
const GREEN_LIGHT = '#D6EFE0';
const WHITE       = '#FFFFFF';
const GRAY_TEXT   = '#5A6B5A';
const GRAY_LABEL  = '#3D3D3D';

const styles = StyleSheet.create({

    screen: {
    flex: 1,
  },
  
    scroll: {
    flexGrow: 1,
  },

   containerfondo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#007A3D',
    overflow: 'visible',
    position: 'relative',
    marginBottom: -28,
  },

  chicaimg: {
    position: 'absolute',
    top:'-34%',
    left: '15%',
    width: '65%',
    height: '100%',
    resizeMode: 'contain',
  },
 
  // Logo SENA — esquina superior derecha
  logoimg: {
    position: 'absolute',
    top: 30,
    right: 16,
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },

  LoginContainer: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: WHITE,
  borderTopLeftRadius: 80,
  paddingHorizontal: 28,
  paddingTop: 72,
  paddingBottom: 40,
},



//////////////////////////////////

title: {
    fontSize: 50,
    fontFamily: 'Nunito_800ExtraBold', 
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
    top:-40
  },
 
  // Subtítulo 
  subtitle: {
    fontSize: 20,
    color: GRAY_TEXT,
    fontFamily: 'Nunito_400Regular',
    textAlign: 'center',
    marginBottom: 28,
    top:-30
  },
 
  subtitleBold: {
    fontWeight: '800',
    color: '#1A1A1A',
    fontFamily: 'Nunito_800ExtraBold'
  },
 
  // Labels 
  inputLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: GRAY_LABEL,
    marginBottom: 6,
    marginLeft: 4,
    top:-40
  },
 
  // Inputs 
  input: {
    backgroundColor: GREEN_LIGHT,
    borderRadius: 50,
    height: 48,
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#1A1A1A',
    marginBottom: 16,
    top:-40
  },
 
  // Olvidaste contraseña 
  forgotPassword: {
    color: GREEN_MID,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 26,
    marginTop: -8,
    top:-10


  },
 
  // Botón INGRESAR 
  button: {
    backgroundColor: GREEN_DARK,
    borderRadius: 50,
    height: 52,
    width:'70%',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
    shadowRadius: 8,
    elevation: 6,
    top:-25
  },
 
  buttonText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 2,
  },
 
  // Fila registro 
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
 
  registerText: {
    fontSize: 13,
    color: GRAY_TEXT,
  },
 
  registerLink: {
    fontSize: 13,
    fontWeight: '800',
    color: GREEN_MID,
  },



})

export default styles;