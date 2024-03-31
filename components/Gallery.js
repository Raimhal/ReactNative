import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Gallery() {
  return (
    <View style={styles.div_style}>
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      <Image style={styles.gallery} source={require('../assets/Gallery.png')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  gallery: {
    height: 140,
    width: 140,
    margin: 10
  },
  div_style: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'center'
  },
 
});