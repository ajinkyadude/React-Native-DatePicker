import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const TimePicker = () => {

    const [timePicker,setTimePicker]=useState(false); 
    const [selectedTime,setSelectedTime]=useState('Select Time');

    const showTimePicker=()=>{
      setTimePicker(true);
    }
    const hideTimePicker=()=>{
      setTimePicker(false);
    }
    const handleTime=(time)=>{
      //console.warn('A date has been picked: ',time);
      const dt=new Date(time);
      const x=dt.toLocaleTimeString();
      const x1=x.split(" ");
      const x2=x1[0].split(":");
      const x3=x2[0]+":"+x2[1]+" "+x1[1];
      setSelectedTime(x3);
      //console.log(x);
      hideTimePicker();
    }
  

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={showTimePicker}>
                <Text>{selectedTime}</Text>
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={timePicker}
                mode="time"
                onConfirm={handleTime}
                onCancel={hideTimePicker}
            />
        </>
    )
}

export default TimePicker

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