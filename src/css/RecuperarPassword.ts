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
    paddingTop: 36,
    paddingBottom: 40,
  },

  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#4d4c4c',
    textAlign: 'center',
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 17,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle2: {
    fontSize: 17,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },

  inputLabel: {
    fontSize: 15,
    color: '#007832',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: '#c8e6c99a',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#2D6A2D',
    borderRadius: 30,
    paddingVertical: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 1.5,
  },

});

export default styles;