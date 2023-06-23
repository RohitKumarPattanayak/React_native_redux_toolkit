import {Linking} from 'react-native';
import React from 'react';
import {View, StyleSheet, Button, TextInput, Text} from 'react-native';
import {useState} from 'react';
import CheckBox from 'expo-checkbox';
const HomeForm = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.formContainer}>
      <Text style={styles.textFont1}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        placeholderTextColor="#8595A5"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#8595A5"
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Remember me</Text>
      </View>
      <View style={styles.parentButton}>
        <Button title="Login" color="#5C67E5" />
      </View>

      <Text style={styles.textFont2}>
        Please contact{' <'}
        <Text
          style={{color: 'blue'}}
          onPress={() => Linking.openURL('rohitkumarpattanayak@gmail.com')}>
          support mail id
        </Text>
        {'> '}
        to reset your password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    position: 'relative',
    marginTop: '6%',
  },
  input: {
    height: '15%',
    paddingStart: '6%',
    backgroundColor: '#F6F7FB',
    marginBottom: '5%',
    marginLeft: '7%',
    marginRight: '7%',
  },
  textFont1: {
    color: '#1E2225',
    fontFamily: 'Gotham',
    fontSize: 22,
    fontWeight: '700',
    marginLeft: '7%',
    marginBottom: '5%',
  },
  textFont2: {
    color: '#1E2225',
    fontFamily: 'Inter',
    fontSize: 12,
    margin: '7%',
    marginTop: '10%',
  },
  parentButton: {
    width: '35%',
    marginLeft: '7%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginLeft: '7%',
    marginBottom: '7%',
    marginTop: '2%',
  },
  checkbox: {
    marginRight: '3%',
    width: 18,
    height: 18,
    borderColor: '#D0DAE6',
    borderWidth: 1,
  },
  label: {
    fontFamily: 'Inter',
    color: '#9198A5',
    fontSize: 13,
  },
});

export default HomeForm;
