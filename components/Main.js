import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Main() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://github.com/Raimhal/ReactNative/tree/master/news.json');
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <View>
      <Text style={styles.h1}>Новини</Text>
      {news.map(item => (
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
