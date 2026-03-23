import { StyleSheet } from "react-native";

const ACTIVE_COLOR = '#2E7D32';
const INACTIVE_COLOR = '#9E9E9E';
const ICON_ACTIVE_COLOR ='#fff'

export { ACTIVE_COLOR, ICON_ACTIVE_COLOR, INACTIVE_COLOR };

export default  StyleSheet.create({

  container: {
    flexDirection: 'row',
    backgroundColor: '#dfeee25e',
    paddingBottom: 8,
    paddingTop: 8,
    shadowOpacity: 0.06,
    shadowRadius: 4,
    borderRadius:50,
    marginHorizontal: 6,
    
  },

  safeArea: {
  backgroundColor: '#dfeee25e',
  borderRadius:40
  
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  iconWrapper: {
    width: 65,
    height: 45,
    borderRadius: 300,
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'hidden'
    
  },
  iconWrapperActive: {
    backgroundColor: ACTIVE_COLOR,
  },
  label: {
    fontSize: 13,
    color: INACTIVE_COLOR,
    fontWeight: '400',
  },
  labelActive: {
    color: ACTIVE_COLOR,
    fontWeight: '600',
  },
});
