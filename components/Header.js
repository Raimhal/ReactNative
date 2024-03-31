import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.div_style}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 135,
    marginLeft: 10
  },
  div_style: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    margin: 'auto',
    fontSize: 18,
    fontWeight:'bold'
  },
});
