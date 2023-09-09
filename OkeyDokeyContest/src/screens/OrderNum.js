import {StyleSheet, Image, View, Text, StatusBar, BackHandler} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {resetShopping} from '../redux/slices/shoppingSlice';
import WebviewContainer from '../pages/WebviewContainer';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderNum = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const orderNumber = useSelector(state => state.shopping.orderNumber); //order number

  const navigateHome = () => {
    //쇼핑 배열 초기화함
    dispatch(resetShopping());
    //홈으로 돌아감
    navigation.reset({
      index: 0,
      routes: [{name: 'Welcome'}],
    });
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('access');
        const refreshToken = await AsyncStorage.getItem('refresh');
        const nonmember = await AsyncStorage.getItem('nonmember');
        if ((!accessToken || !refreshToken) && !nonmember) {
          console.log('처음으로 화면 돌아가기');
          navigation.popToTop();
        }
      } catch (error) {
        console.error('Error while checking token:', error);
      }
    };
    checkToken();

    const interval = setInterval(() => {
      checkToken();
    }, 5000);
  
    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const onBackPress = () => {
      return true; // 뒤로가기 막음
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, []);

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
          style={{width: 160, height: 80}}
          source={require('OkeyDokeyContest/assets/images/OkDkLogo.png')}
        />
      </View>
      <View style={styles.div}></View>
      <View style={styles.grayDiv}></View>

      <View
        style={{
          position: 'absolute',
          top: '20%',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: '75%', height: '100%', position: 'absolute'}}>
          <View style={styles.main}>
            <View style={styles.modalHeader}>
              <Text style={styles.headerTitle}>주문번호</Text>
            </View>
            <View style={styles.subtitleView}>
              <Text style={styles.orderNumber}>{orderNumber}</Text>
              <Text style={styles.subtitle}>주문이 완료되었습니다</Text>
            </View>
            <View style={styles.inputView}></View>
          </View>
         
        <View style={{flexDirection:'row'}}>
          <CustomButton
            title={'확인'}
            onPress={() => navigateHome()}
            width={'50%'}
            height={110}
            backgroundColor={'#056CF2'}
            textColor={'white'}
            fontSize={35}
          />
            <WebviewContainer />
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderNum;

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
  modalHeader: {
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '15%',
    marginTop: 0,
  },
  headerTitle: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
  },
  main: {
    backgroundColor: 'white',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtitleView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  orderNumber: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#F25D07',
  },
});
