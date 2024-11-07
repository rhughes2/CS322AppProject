import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const PubRegistration = () => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Register a Pub</Text>
        <View style={styles.searchBar}>
            <Text style={styles.title}>Name of the Pub</Text>
          <TextInput style={styles.searchInput} placeholder="Name of the Pub..." />
        {/* Next button */}
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation (I'm not sure this works at all lol -RJ*/}
      <View style={styles.bottomNav}>
        <TouchableOpacity><Text>🔍</Text></TouchableOpacity>
        <TouchableOpacity><Text>📍</Text></TouchableOpacity>
        <TouchableOpacity><Text>🏠</Text></TouchableOpacity>
        <TouchableOpacity><Text>👤</Text></TouchableOpacity>
        <TouchableOpacity><Text>☰</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  nextButton: {
    backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  featuredBars: {
    paddingLeft: 10,
  },
  barCard: {
    marginRight: 10,
    width: 150,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
  },
  barImage: {
    width: '100%',
    height: 100,
  },
  popularPlaceCard: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
  },
  popularImage: {
    width: '100%',
    height: 100,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default PubRegistration;
