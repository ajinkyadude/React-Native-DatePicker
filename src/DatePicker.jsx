import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const DatePicker = () => {
    const [datePicker, setDatePicker] = useState(false);
    const [selectedDate,setSelectedDate]=useState('Select Date');

    const showDatePicker = () => {
        //console.log("Hello")
        setDatePicker(true);
    }
    const hideDatePicker = () => {
        setDatePicker(false);
    }
    const handleDate = (date) => {
        const dt = new Date(date);
        const x = dt.toString().split(" ");
        const x1=[];
        for(let i=1;i<=3;i++)
        {
            x1.push(x[i])
        }
        setSelectedDate(x1[1] + "/" + x1[0] + "/" + x1[2])
        hideDatePicker();
    }

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={()=>{showDatePicker()}}>
                <Text>{selectedDate}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={datePicker}
                mode="date"
                onConfirm={handleDate}
                onCancel={hideDatePicker}
            />
        </>
    )
}

export default DatePicker;

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