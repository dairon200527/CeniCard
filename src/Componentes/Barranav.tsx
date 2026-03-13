import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles, {INACTIVE_COLOR } from '../css/Barranav';

type TabItem = {
  name: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconActive: keyof typeof Ionicons.glyphMap;
};

const TABS: TabItem[] = [
  { name: 'Inicio',         label: 'Inicio',          icon: 'home-outline',          iconActive: 'home' },
  { name: 'Servicios',      label: 'Servicios',        icon: 'grid-outline',          iconActive: 'grid' },
  { name: 'Carnet',         label: 'Carnet',           icon: 'card-outline',          iconActive: 'card' },
  { name: 'Notificaciones', label: 'Notificaciones',   icon: 'notifications-outline', iconActive: 'notifications' },
];

const Barranav = ({ navigation }: any) => {
  const currentRoute = useNavigationState(state =>
    state?.routes[state.index]?.name
  );

  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = currentRoute === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => navigation.navigate(tab.name)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconWrapper, isActive && styles.iconWrapperActive]}>
              <Ionicons
                name={isActive ? tab.iconActive : tab.icon}
                size={22}
                color={isActive ? '#fff' : INACTIVE_COLOR}
              />
            </View>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Barranav;