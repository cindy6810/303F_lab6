import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const [animation] = useState(new Animated.Value(1));
  const [easterEggVisible, setEasterEggVisible] = useState(false);

  const handleNamePress = () => {
    setEasterEggVisible(true);
    Animated.sequence([
      Animated.spring(animation, {
        toValue: 2,
        useNativeDriver: true,
      }),
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Todo List App</Text>
        <Pressable onPress={handleNamePress}>
          <Animated.Text 
            style={[
              styles.name,
              { transform: [{ scale: animation }] }
            ]}
          >
            Created by Your Name
          </Animated.Text>
        </Pressable>
        <Text style={styles.date}>
          {new Date().toLocaleDateString()}
        </Text>
        {easterEggVisible && (
          <Text style={styles.easterEgg}>
            🎉 You found the secret message! 🎉
          </Text>
        )}
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    color: '#f4511e',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  easterEgg: {
    marginTop: 20,
    fontSize: 16,
    color: '#f4511e',
    fontStyle: 'italic',
  },
});

export default AboutScreen;
