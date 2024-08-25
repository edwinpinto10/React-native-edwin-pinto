import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Button, Text, Avatar, useTheme } from 'react-native-elements';

export default function ProfileScreen() {
  const { theme } = useTheme();
  const [name, setName] = useState('Usuario Ejemplo');
  const [email, setEmail] = useState('usuario@ejemplo.com');
  const [bio, setBio] = useState('Desarrollador de software apasionado');

  const handleSave = () => {
    // Aquí iría la lógica para guardar los cambios del perfil
    console.log('Perfil actualizado');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.avatarContainer}>
        <Avatar
          size="large"
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          containerStyle={[styles.avatar, { backgroundColor: theme.colors.primary }]}
        />
      </View>
      <Input
        label="Nombre"
        value={name}
        onChangeText={setName}
        labelStyle={{ color: theme.colors.text }}
      />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        labelStyle={{ color: theme.colors.text }}
      />
      <Input
        label="Biografía"
        value={bio}
        onChangeText={setBio}
        multiline
        labelStyle={{ color: theme.colors.text }}
      />
      <Button
        title="Guardar Cambios"
        onPress={handleSave}
        containerStyle={styles.button}
        buttonStyle={{ backgroundColor: theme.colors.primary }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: 'grey',
  },
  button: {
    marginTop: 20,
  },
});