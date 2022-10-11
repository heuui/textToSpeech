import React, {useState} from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState('');

  const convertToSpeak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Enter text'
        onChangeText={text => setText(text)} value={text}
      />
      <Button
        title='Press to hear text'
        onPress={convertToSpeak}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 200,
    marginBottom: 5,
    width: 200,
    height: 50,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  }
});