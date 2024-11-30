import React from 'react';
import { View, Text, TextInput, ScrollView, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Hey look emojis! I'm sure we can find a way to make these the nicer logos but now I think its fun lol -RJ

const HomeScreen = () => {
  const categories = [
    { id: '1', title: 'Beer', icon: '🍺' },
    { id: '2', title: 'Wines', icon: '🍷' },
    { id: '3', title: 'Cocktails', icon: '🍹' },
    { id: '4', title: 'Burgers', icon: '🍔' },
    { id: '5', title: 'Promos', icon: '🏷️' },
  ];

  // For some reason the images don't populate... I've tried a bunch of stuff

  const featuredBars = [
    { id: '1', title: 'Istmo Brew Hub', rating: '4.5', image: require('../assets/Drink.png'), time: '10-15 mins', },
    { id: '2', title: 'Feroz', rating: '4.7', image: require('../assets/two-cocktails-by-restaurant-open-fire-royalty-free-image-1680877011.jpg'), time: '15-20 mins', },
  ];
  

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>What's the plan for the night?</Text>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Look for food or bar..." />
          <TouchableOpacity style={styles.bellIcon}>
            <Text>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryItem}>
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text>{category.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Featured Bars */}
      <Text style={styles.sectionTitle}>Featured Bars</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredBars}>
        {featuredBars.map((bar) => (
          <View key={bar.id} style={styles.barCard}>
            <Image source={bar.image} style={styles.barImage} />
            <Text>{bar.title}</Text>
            <Text>{bar.rating} ⭐</Text>
            <Text>{bar.time}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Popular Places */}
      <Text style={styles.sectionTitle}>Popular Places</Text>
      <FlatList
        data={featuredBars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <View style={styles.popularPlaceCard}>
          <Image source={item.image} style={styles.popularImage} />
          <Text>{item.title}</Text>
          <Text>{item.rating} ⭐</Text>
        </View>
  )}
/>


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

export default HomeScreen;