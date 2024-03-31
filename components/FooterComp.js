import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FooterComp() {
  return (
    <View style={styles.div_style}>
      <Text style={styles.text}>Кормиш Роман Іванович, ІПЗ-20-4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  div_style: {
    height: 20,
    width: 'auto',
    backgroundColor:'gray',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  text: {
    margin: 'auto',
    fontSize: 15,
  },
});