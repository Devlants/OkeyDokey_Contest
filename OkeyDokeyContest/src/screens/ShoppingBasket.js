import {
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CoffeeObject from '../components/CoffeeObject';
import CustomButton from '../components/CustomButton';
import {useSelector} from 'react-redux';
const ShoppingBasket = ({route, navigation}) => {
  const shoppings = useSelector(state => state.shopping.shoppings);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let newTotalPrice = 0;
    shoppings.forEach(item => {
      newTotalPrice += item.price * item.quantity;
    });
    setTotalPrice(newTotalPrice);
  }, [shoppings]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Image
          style={{width: 150, height: 50}}
          source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
        />
      </View>
      <View style={styles.div}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <CustomButton
            title={'뒤로가기'}
            onPress={() => navigation.popToTop()}
            width={'50%'}
            height={150}
            backgroundColor={'#6D6D6D'}
            textColor={'white'}
            fontSize={50}
          />
          <CustomButton
            title={'장바구니'}
            onPress={''}
            width={'50%'}
            height={150}
            backgroundColor={'#056CF2'}
            textColor={'white'}
            fontSize={50}
          />
        </View>
      </View>

      <View style={styles.grayDiv}></View>
      <View style={{width: '75%', height: '70%', position: 'absolute'}}>
        <View
          style={{
            backgroundColor: '#F5F7FB',
            alignItems: 'center',
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              fontWeight: 'bold',
            }}>
            장바구니확인
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            flex: 7,
            paddingHorizontal: 30,
            justifyContent: 'space-around',
          }}>
          <ScrollView>
            {shoppings.map(item => {
              return (
                <CoffeeObject
                  id={item.id}
                  width={'100%'}
                  height={220}
                  imageSize={200}
                  imgsrc={item.imgsrc}
                  title={item.title}
                  price={item.price}
                  ice={item.ice}
                  size={item.size}
                  quantity={item.quantity}
                />
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            height: 100,
            backgroundColor: '#F5F7FB',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
            }}>
            결제금액{'    '}
            {totalPrice}원
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <CustomButton
            title={'뒤로가기'}
            onPress={() => navigation.popToTop()}
            width={'50%'}
            height={80}
            backgroundColor={'#6D6D6D'}
            textColor={'white'}
            fontSize={20}
          />
          <CustomButton
            title={'결제하기'}
            onPress={() => navigation.push('InputPhoneNum')}
            width={'50%'}
            height={80}
            backgroundColor={'#056CF2'}
            textColor={'white'}
            fontSize={20}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingBasket;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  div: {
    flex: 9,
  },
  grayDiv: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    position: 'absolute',
    opacity: 0.3,
  },
});
