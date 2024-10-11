/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* !!! THIS IS THE OLD VERSION JUST FOR SAFE KEEPING !!! 

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="What's the plan for tonight?">
          Insert Search Bar Here 
          <Image 
            style={styles.bell}
            source={require('./assets/bell-button.png')}>
          </Image>
          </Section>
          <Section title="">
            <Image
              style={styles.button}
              source={require('./assets/burger-button.png')}
              />
              <Image
              style={styles.button}
              source={require('./assets/burger-button.png')}
              />
              <Image
              style={styles.button}
              source={require('./assets/burger-button.png')}
              />
              <Image
              style={styles.button}
              source={require('./assets/burger-button.png')}
              />
              <Image
              style={styles.button}
              source={require('./assets/burger-button.png')}
              />
              <Image
              style={styles.button}
              source={require('./assets/burger-button.png')}
              />
          </Section>
          <Section title="Featured Bars">
          <Image
              style={styles.bar}
              source={require('./assets/brew-hub.png')}
              />
          </Section>
          <Section title="Popular Places">
          <Image
              style={styles.place}
              source={require('./assets/popular-place.png')}
              />
          <Image
              style={styles.place}
              source={require('./assets/popular-place.png')}
              />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },


  bell: {
    width: 51,
    height: 57,
    top: 25,
    left: 310,
    gap: 0,
    opacity: 0,

  },
  button : {
    width: 58.57,
    height: 98,
    top: 185,
    left: 243.87,
    gap: 0,
    opacity: 0,

  },

  bar: {
    width: 266,
    height: 229,
    top: 346,
    left: 26,
    gap: 0,
    opacity: 0,

  },

  place: {
    width: 154.43,
    height: 216,
    top: 632,
    left: 26,
    gap: 0,
    opacity: 0,

  },

});

export default App; */

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
    { id: '1', title: 'Istmo Brew Hub', rating: '4.5', image: './Drinkea Images/Drinks/Drink.png', time: '10-15 mins' },
    { id: '2', title: 'Feroz', rating: '4.7', image: './Drinkea Images/Drinks/two-cocktails-by-restaurant-open-fire-royalty-free-image-1680877011.jpg', time: '15-20 mins' },
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
            <Image source={{ uri: bar.image }} style={styles.barImage} />
            <Text>{bar.title}</Text>
            <Text>{bar.rating} ⭐</Text>
            <Text>{bar.time}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Popular Places */}
      <Text style={styles.sectionTitle}>Popular Places</Text>
      <FlatList
        data={featuredBars} // If we get non-demo data it would go here -RJ
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.popularPlaceCard}>
            <Image source={{ uri: item.image }} style={styles.popularImage} />
            <Text>{item.title}</Text>
            <Text>{item.rating} ⭐</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
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
