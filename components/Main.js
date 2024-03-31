import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function Main() {
  const [news, setNews] = React.useState(null);

  React.useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/Raimhal/ReactNative/master/news.json', {cache: "no-store"});
      const data = await response.json();
      setNews(data?.news);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <View>
      <ScrollView>
      <Text style={styles.h1}>Новини</Text>
      {news?.map(item => (
        <View key={item.id} style={styles.info_div}>
          <Image
            style={styles.picture}
            source={require('../assets/picture.png')}
          />
          <View>
            <Text style={styles.info_h2}>{item.title}</Text>
            <Text style={styles.data_p}>{item.date}</Text>
            <Text style={styles}>{item.text}</Text>
          </View>
        </View>
      ))}
      </ScrollView>
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
    width: "70%",
    marginBottom: 10,
  },
  info_h2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  data_p:{
    color:'grey',

  }
});
