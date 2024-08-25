import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, Card, useTheme } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      try {
        // Aquí iría la lógica de autenticación real con su API
        await AsyncStorage.setItem('userToken', 'dummy-auth-token');
        navigation.navigate('Home');
      } catch (e) {
        setError('Error al iniciar sesión. Por favor, intente de nuevo.');
      }
    } else {
      setError('Por favor, complete todos los campos.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card containerStyle={styles.card}>
        <Card.Title h4>Iniciar Sesión</Card.Title>
        <Card.Divider />
        <Input
          placeholder="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope', color: theme.colors.primary }}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input
          placeholder="Contraseña"
          leftIcon={{ type: 'font-awesome', name: 'lock', color: theme.colors.primary }}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        {error ? <Text style={[styles.errorText, { color: theme.colors.error }]}>{error}</Text> : null}
        <Button 
          title="Iniciar Sesión" 
          onPress={handleLogin} 
          buttonStyle={[styles.button, { backgroundColor: theme.colors.primary }]} 
        />
        <Button 
          title="¿No tienes cuenta? Regístrate" 
          onPress={() => navigation.navigate('Register')} 
          type="clear"
          titleStyle={{ color: theme.colors.primary }}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 10,
  },
  button: {
    borderRadius: 5,
    marginTop: 20,
  },
  errorText: {
    textAlign: 'center',
    marginBottom: 10,
  },
});