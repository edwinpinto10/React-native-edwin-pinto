import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card, Image, useTheme } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card containerStyle={styles.card}>
        <Image
          source={require('../assets/sena_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Card.Title h4 style={styles.title}>SENA Empleos</Card.Title>
        <Text style={[styles.welcomeText, { color: theme.colors.text }]}>Bienvenido a SENA Empleos</Text>
        <Button
          title="Buscar Empleos"
          onPress={() => navigation.navigate('JobSearch')}
          buttonStyle={[styles.button, { backgroundColor: theme.colors.primary }]}
        />
        <Button
          title="Mi Perfil"
          onPress={() => navigation.navigate('Profile')}
          buttonStyle={[styles.button, { backgroundColor: theme.colors.primary }]}
        />
        <Button
          title="Acerca de"
          onPress={() => navigation.navigate('About')}
          buttonStyle={[styles.button, { backgroundColor: theme.colors.primary }]}
        />
        <Button
          title="Cerrar Sesión"
          onPress={handleLogout}
          buttonStyle={[styles.button, { backgroundColor: theme.colors.secondary }]}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
    marginTop: 10,
  },
});