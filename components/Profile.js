import * as React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View>
      <Text style={styles.h1}>Реєстрація</Text>

      <Text style={styles.h3}>Електронна пошта</Text>
      <TextInput style={styles.input} />

      <Text style={styles.h3}>Пароль</Text>
      <TextInput style={styles.input} />

      <Text style={styles.h3}>Пароль (ще раз)</Text>
      <TextInput style={styles.input} />

      <Text style={styles.h3}>Прізвище</Text>
      <TextInput style={styles.input} />

      <Text style={styles.h3}>Ім'я </Text>
      <TextInput style={styles.input} />

      <Button  title="Зареєструватися"/>
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
  input: {
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  h3: {
    marginLeft: 12,
    marginRight: 12,
  },
});
