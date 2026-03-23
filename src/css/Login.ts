import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

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
    right :10,
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
  backgroundColor: '#FFFFFF',
  borderTopLeftRadius: 92,
  paddingHorizontal: 28,
  paddingTop: 32,
  paddingBottom: 520, 
  marginTop: 0,
},

  title: {
    fontSize: 48,
    fontWeight: '800',
    color: '#4d4c4c',
    textAlign: 'center',
    lineHeight: 44,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 19,
    color: '#666',
    textAlign: 'center',
    marginBottom: 28,
    top:15
  },

  subtitleBold: {
    fontWeight: '900',
    color: '#4d4c4c',
  },

  inputLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
    marginLeft: 2,
    top:10
  },

  input: {
    backgroundColor: '#c8e6c99a',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
    top:10
  },

  
  button: {
    backgroundColor: '#2D6A2D',
    borderRadius: 30,
    paddingVertical: 16,
    marginHorizontal:50,
    top:30,
    alignItems: 'center',
    marginBottom: 20,
  },

  forgotPassword: {
    color: '#007832',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    top:40
    
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 1.6,
  },

  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    top:50,
   
  },

  registerText: {
    fontSize: 14,
    color: '#666',
  },

  registerLink: {
    fontSize: 17,
    color: '#007832',
    fontWeight: '800',
    
  },

});

export default styles;