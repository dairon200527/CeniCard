import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import RecuperarPassword from '../Componentes/RecuperarPassword';

const PageRecuperarPassword = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <RecuperarPassword />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PageRecuperarPassword;