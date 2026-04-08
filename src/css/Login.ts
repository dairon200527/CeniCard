import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({

  fondoinicial: {
    flex: 1,
    backgroundColor: '#007832',
  },

  containerfondo: {
    height: height * 0.3,
    backgroundColor: '#007832',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  chicaimg: {
    width: '70%',
    height: 200,
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
    paddingHorizontal: 28,
    paddingTop: 32,
    paddingBottom: 40,
  },

  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#4d4c4c',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },

  subtitleBold: {
    fontWeight: '900',
    color: '#4d4c4c',
  },

  inputLabel: {
    fontSize: 15,
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    backgroundColor: '#c8e6c99a',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
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

  forgotPassword: {
    color: '#007832',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 15,
  },

  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexWrap: 'wrap',
  },

  registerText: {
    fontSize: 14,
    color: '#666',
  },

  registerLink: {
    fontSize: 15,
    color: '#007832',
    fontWeight: '800',
  },

});

export default styles;