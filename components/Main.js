import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Main() {
  return (
    <View>
      <Text style={styles.h1}>Новини</Text>
      <View style={styles.info_div}>
        <Image
          style={styles.picture}
          source={require('../assets/picture.png')}
        />
        <View>
          <Text style={styles.info_h2}>Заголовок новини</Text>
          <Text style={styles.data_p}>Дата новини</Text>
          <Text style={styles}>Коротки текст новини</Text>
        </View>
      </View>
      <View style={styles.info_div}>
        <Image
          style={styles.picture}
          source={require('../assets/picture.png')}
        />
        <View>
          <Text style={styles.info_h2}>Заголовок новини</Text>
          <Text style={styles.data_p}>Дата новини</Text>
          <Text style={styles}>Коротки текст новини</Text>
        </View>
      </View>
      <View style={styles.info_div}>
        <Image
          style={styles.picture}
          source={require('../assets/picture.png')}
        />
        <View>
          <Text style={styles.info_h2}>Заголовок новини</Text>
          <Text style={styles.data_p}>Дата новини</Text>
          <Text style={styles}>Коротки текст новини</Text>
        </View>
      </View>
      <View style={styles.info_div}>
        <Image
          style={styles.picture}
          source={require('../assets/picture.png')}
        />
        <View>
          <Text style={styles.info_h2}>Заголовок новини</Text>
          <Text style={styles.data_p}>Дата новини</Text>
          <Text style={styles}>Коротки текст новини</Text>
        </View>
      </View>
      <View style={styles.info_div}>
        <Image
          style={styles.picture}
          source={require('../assets/picture.png')}
        />
        <View>
          <Text style={styles.info_h2}>Заголовок новини</Text>
          <Text style={styles.data_p}>Дата новини</Text>
          <Text style={styles}>Коротки текст новини</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 7,
  },
  picture: {
    height: 100,
    width: 100,
  },
  info_div: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  info_h2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  data_p:{
    color:'grey',

  }
});
