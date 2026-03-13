import {StyleSheet} from "react-native";

const ACTIVE_COLOR = '#2E7D32';
const INACTIVE_COLOR = '#9E9E9E';
const ICON_ACTIVE_COLOR ='#fff'

export { ACTIVE_COLOR, INACTIVE_COLOR, ICON_ACTIVE_COLOR }

export default  StyleSheet.create({

  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
    paddingBottom: 8,
    paddingTop: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapperActive: {
    backgroundColor: ACTIVE_COLOR,
  },
  label: {
    fontSize: 10,
    color: INACTIVE_COLOR,
    fontWeight: '400',
  },
  labelActive: {
    color: ACTIVE_COLOR,
    fontWeight: '600',
  },
});
