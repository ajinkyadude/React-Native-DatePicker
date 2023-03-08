import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import DatePicker from './src/DatePicker';
import TimePicker from './src/TimePicker';

function App(): JSX.Element {



  return (
    <View style={styles.root}>
      <DatePicker />
      <TimePicker />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  button: {
    width: "50%",
    height: 50,
    borderWidth: .5,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
}

})
