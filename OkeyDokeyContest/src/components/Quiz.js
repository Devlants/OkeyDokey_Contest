import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Quiz = ({QuizText, handleEvent}) => {
  return (
      <TouchableOpacity onPress={handleEvent} style={styles.left}>
        <Text style={{fontSize: 40, color:'black', fontWeight:'bold', textAlign: 'center', fontFamily: 'Pretendard'}}>{QuizText}</Text>
      </TouchableOpacity>
  );
};

export default Quiz;

const styles = StyleSheet.create({
    left: {
        backgroundColor:'white',
        height: '60%',
        // marginLeft: 30,
        flex: 1,
        // marginRight: 5,
        marginHorizontal: 30,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
    
        elevation: 3,
      },
});
