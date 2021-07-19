import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Card from './components/Card/Card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card
        title="NED THE KİNG"
        text="lorem ipsum vasdfd dsf ds"
        buttontext="selam "
      />
      <Card title="MFK HAHAHA" text="naber kanska" buttontext="selam " />
      <Card
        title="asdfadsf"
        text="nabeasdasd kanska"
        buttontext="tıkla AGAA "
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
  },
});
export default App;
