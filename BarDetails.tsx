import React from 'react';
import { View, Text, TextInput, ScrollView, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BarDetails = () => {
    const interationCategories = [
        { id: '1', title: 'Call', icon: '' },
        { id: '2', title: 'Rate', icon: '' },
        { id: '3', title: 'Photo', icon: '' },
        { id: '4', title: 'Visited', icon: '' }
      ];  

      const informationCategories = [
        { id: '1', title: 'Food', icon: '' },
        { id: '2', title: 'Service', icon: '' },
        { id: '3', title: 'Ambiance', icon: '' },
        { id: '4', title: 'Price Avg', icon: '' }
      ]
  
    const selectedBar = [
        { id: '1', title: 'Istmo Brew Hub', rating: '4.5', image: './Drinkea Images/Drinks/Drink.png', time: '10-15 mins' }
    ];

  return (
    <ScrollView style={styles.container}>
        {/* Selected Bar */}
        <Text style={styles.sectionTitle}>PLACEHOLDER FOR NAME OF BAR</Text>
        <ScrollView style={styles.selectedBar}>
        {selectedBar.map((bar) => (
            <View key={bar.id} style={styles.barCard}>
            <Image source={{ uri: bar.image }} style={styles.barImage} />
            <Text>{bar.title}</Text>
            <Text>{bar.rating} ⭐</Text>
            <Text>{bar.time}</Text>
            </View>
        ))}
        </ScrollView>

      {/* Interaction Categories */}
      <ScrollView  style={styles.categories}>
        {interationCategories.map((category) => (
          <View key={category.id} style={styles.categoryItem}>
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text>{category.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Information Categories */}
      <ScrollView  style={styles.categories}>
        {informationCategories.map((category) => (
          <View key={category.id} style={styles.categoryItem}>
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text>{category.title}</Text>
          </View>
        ))}

        {/* Reserve button */}
        <TouchableOpacity style={styles.reserveButton}>
          <Text style={styles.reserveButtonText}>Reserve a Table</Text>
        </TouchableOpacity>
      </ScrollView>
        
        {/* Time Drop Down */}
    

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
  reserveButton: {
    backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  reserveButtonText: {
    color: 'black',
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
  bellIcon: {
    marginLeft: 10,
  },
  categories: {
    padding: 10,
    flexDirection: 'row',
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryIcon: {
    fontSize: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  selectedBar: {
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

export default BarDetails;