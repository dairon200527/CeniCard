import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  fondoinicial: {
    flex: 1,
    backgroundColor: '#007832',
  },

  containerfondo: {
    height: 260,
    backgroundColor: '#007832',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  chicaimg: {
    width: '68%',
    height: 220,
    resizeMode: 'contain',
    right: 10,
  },

  logoimg: {
    position: 'absolute',
    top: 30,
    right: 13,
    width: 78,
    height: 88,
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
    fontSize: 38,
    fontWeight: '800',
    color: '#4d4c4c',
    textAlign: 'center',
    lineHeight: 44,
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 12,
  },

  subtitle2: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
    top:10
  },

  inputLabel: {
    fontSize: 16,
    color: '#007832',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
    top:10
  },

  input: {
    backgroundColor: '#c8e6c99a',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: '#333',
    marginBottom: 28,
    top:10
  },

  button: {
    backgroundColor: '#2D6A2D',
    borderRadius: 30,
    paddingVertical: 16,
    marginHorizontal: 50,
    alignItems: 'center',
    top:10
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 1.6,
  },

});

export default styles;