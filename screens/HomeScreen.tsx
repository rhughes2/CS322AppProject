import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBgG5AZgI5-zIAvU0n_GXj_1a0FY4gmRdI';

const HomeScreen = () => {
  const [popularBars, setPopularBars] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPopularBars = async () => {
    try {
      const { data } = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
        {
          params: {
            location: '41.998638, -87.660658',
            radius: 5000,
            type: 'bar',
            key: GOOGLE_PLACES_API_KEY,
          },
        }
      );

      const bars = data.results.map((place) => ({
        id: place.place_id,
        title: place.name,
        rating: place.rating || 'N/A',
        image: place.photos
          ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${GOOGLE_PLACES_API_KEY}`
          : 'https://via.placeholder.com/150',
        address: place.vicinity,
      }));
      setPopularBars(bars);
    } catch (error) {
      console.error('Error fetching popular bars:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularBars();
  }, []);

  const categories = [
    { id: '1', title: 'Beer', icon: '🍺' },
    { id: '2', title: 'Wines', icon: '🍷' },
    { id: '3', title: 'Cocktails', icon: '🍹' },
    { id: '4', title: 'Burgers', icon: '🍔' },
    { id: '5', title: 'Promos', icon: '🏷️' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>What's the plan for the night?</Text>
          <View style={styles.searchBar}>
            <TextInput style={styles.searchInput} placeholder="Look for food or bar..." />
            <TouchableOpacity style={styles.bellIcon}>
              <Text>🔔</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          {categories.map((category) => (
            <View key={category.id} style={styles.categoryItem}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text>{category.title}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Popular Bars</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#f8ce46" />
        ) : (
          <FlatList
            data={popularBars}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.barCard}>
                <Image source={{ uri: item.image }} style={styles.barImage} />
                <Text style={styles.barTitle}>{item.title}</Text>
                <Text>{item.rating} ⭐</Text>
                <Text>{item.address}</Text>
              </View>
            )}
          />
        )}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity><Text style={styles.bottomNavIcon}>🔍</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.bottomNavIcon}>📍</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.bottomNavIcon}>🏠</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.bottomNavIcon}>👤</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.bottomNavIcon}>☰</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 70, // Ensures scroll content doesn't overlap the bottom navigation
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
  barCard: {
    marginRight: 10,
    width: 150,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  barImage: {
    width: '100%',
    height: 100,
  },
  barTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  bottomNavIcon: {
    fontSize:20,
  }
});

export default HomeScreen;
