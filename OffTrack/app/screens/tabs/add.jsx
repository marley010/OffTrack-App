import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const AddTripScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState(null);
  const [duration, setDuration] = useState(''); // Toegevoegd
  const [entry, setEntry] = useState(''); // Toegevoegd
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    const tripData = { title, description, duration, entry };
    console.log('Trip added:', tripData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a New Trip</Text>

      <TextInput
        style={styles.input}
        placeholder="Location of vacation"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Banner image"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        style={[styles.input]}
        placeholder="Duration"
        value={duration}
        onChangeText={setDuration} // Correcte setter
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Diary entry"
        value={entry}
        onChangeText={setEntry} // Correcte setter
        multiline
      />

      <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 6,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  label: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  dropdown: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  modalHeader: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalItem: {
    fontSize: 18,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    color: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: 'black',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default AddTripScreen;
