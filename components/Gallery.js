import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function Gallery() {
  const [imageURLs, setImageURLs] = React.useState([]);

  React.useEffect(() => {
    fetchGitHubImages();
  }, []);

  const fetchGitHubImages = async () => {
    try {
      const response = await fetch('https://api.github.com/repos/Raimhal/ReactNative/contents/images');
      const data = await response.json();
      const imageUrls = data.map(image => image.download_url);
      setImageURLs(imageUrls);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.div_style}>
      {imageURLs.map((url, index) => (
        <Image key={index} source={{ uri: url }} style={styles.gallery} />
      ))}
    </ScrollView>
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
    justifyContent: 'center'
    // justifyContent: 'center'
  },
 
});