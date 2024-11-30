import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
