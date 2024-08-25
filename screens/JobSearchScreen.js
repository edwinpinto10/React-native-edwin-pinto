import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SearchBar, ListItem, Text, useTheme } from 'react-native-elements';

const mockJobs = [
  { id: '1', title: 'Desarrollador Frontend', company: 'TechCo', location: 'Bogotá' },
  { id: '2', title: 'Ingeniero Backend', company: 'DataSystems', location: 'Medellín' },
  { id: '3', title: 'Diseñador UX/UI', company: 'CreativeApps', location: 'Cali' },
  { id: '4', title: 'Analista de Datos', company: 'InfoTech', location: 'Barranquilla' },
  { id: '5', title: 'Gerente de Proyectos', company: 'ProjectPro', location: 'Cartagena' },
];

export default function JobSearchScreen() {
  const { theme } = useTheme();
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState(mockJobs);

  const updateSearch = (search) => {
    setSearch(search);
    const filteredJobs = mockJobs.filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
    );
    setJobs(filteredJobs);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <SearchBar
        placeholder="Buscar empleos..."
        onChangeText={updateSearch}
        value={search}
        platform="default"
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
      />
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title style={{ color: theme.colors.text }}>{item.title}</ListItem.Title>
              <ListItem.Subtitle style={{ color: theme.colors.text }}>{item.company} - {item.location}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color={theme.colors.primary} />
          </ListItem>
        )}
        ListEmptyComponent={<Text style={[styles.emptyList, { color: theme.colors.text }]}>No se encontraron empleos</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInput: {
    backgroundColor: 'white',
  },
  emptyList: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});