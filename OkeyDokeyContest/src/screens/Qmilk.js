import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Quiz from '../components/Quiz';
import CustomButton from '../components/CustomButton';
import Toggle from '../components/Toggle';


const Qmilk = ({ route, navigation  }) => {
  const { qdata } = route.params;
  const [data, setData] = useState(
    {
      nonMilk: "우유가 안 들어간 것",
      milk: "우유가 들어간 것",
    }, 
    );
  // const handleHere = textValue => {
  //   if (textValue !== undefined) {
  //     setData({...data, eatin:true});
  //   }
  // };
  const handleHere = () => {
    navigation.push('EasyMenu', {
      qdata : data.nonMilk,
    })
  }
  const handleTakeOut = () => {
    navigation.push('EasyMenu', {
      qdata : data.milk,
    })
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F5F7FB'}}>
      <View style={styles.header}>
        <Text>{qdata}</Text>
        <Image
          style={{width: 150, height: 50}}
          source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
        />
      </View>
      <View style={{alignItems:'center', justifyContent: 'center', width: '100%'}}>
        <Toggle />
      </View>
      <View style={{flex: 9}}>
        <View style={styles.mid}>
          <Quiz handleEvent={handleHere} QuizText={"우유가 안 들어간 것"}/>
          <Quiz handleEvent={handleTakeOut} QuizText={"우유가 들어간 것"}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <CustomButton title={"뒤로가기"} onPress={() => navigation.pop()} width={"50%"} height={150} backgroundColor={"#6D6D6D"} textColor={'white'} fontSize={50}/>
          <CustomButton title={"장바구니"} onPress={""} width={"50%"} height={150} backgroundColor={"#056CF2"} textColor={'white'} fontSize={50}/>
        </View>
      </View>
    </View>
  );
};

export default Qmilk;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mid: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    height: '60%',
    marginLeft: 30,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    marginRight: 5,
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
  right: {
    height: '60%',
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
