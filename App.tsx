/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
          {/* Will most likely not want to use section element here but not sure what to replace with, just dont want the title ya feel? -RJ */}
          <Section title="">
            {/* Will change to more than just burgers later lol -RJ*/}
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
              // Isn't it brew pub not brew hub? or maybe I just haven't been to this one :p -RJ
              source={require('./assets/brew-hub.png')}
              />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
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

  }


});

export default App;
