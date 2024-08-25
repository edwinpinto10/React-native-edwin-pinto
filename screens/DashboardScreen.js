import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title>Dashboard SENA Empleos</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>Bienvenido a tu dashboard de SENA Empleos</Text>
        <Button
          title="Buscar Empleos"
          onPress={() => navigation.navigate('JobSearch')}
          containerStyle={styles.button}
        />
        <Button
          title="Mi Perfil"
          onPress={() => navigation.navigate('Profile')}
          containerStyle={styles.button}
        />
        <Button
          title="Postulaciones Activas"
          onPress={() => {/* Implementar en el futuro */}}
          containerStyle={styles.button}
        />
        <Button
          title="Cursos Recomendados"
          onPress={() => {/* Implementar en el futuro */}}
          containerStyle={styles.button}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});