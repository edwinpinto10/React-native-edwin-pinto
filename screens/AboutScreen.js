import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Image, useTheme } from 'react-native-elements';

export default function AboutScreen() {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card containerStyle={styles.card}>
        <Card.Title h4>Acerca de SENA Empleos</Card.Title>
        <Card.Divider />
        <Image
          source={require('../assets/sena_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[styles.text, { color: theme.colors.text }]}>
          SENA Empleos es una plataforma diseñada para conectar a los aprendices y egresados del Servicio Nacional de Aprendizaje (SENA) con oportunidades laborales en todo Colombia.
        </Text>
        <Text style={[styles.text, { color: theme.colors.text }]}>
          Nuestra misión es facilitar la inserción laboral de los profesionales formados por el SENA, contribuyendo al desarrollo económico y social del país.
        </Text>
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
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
});
