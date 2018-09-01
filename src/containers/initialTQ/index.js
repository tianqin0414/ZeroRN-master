import React, { Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';


// 橘色 #F94301

const Dimensions = require('Dimensions');
let h = 80;
let BHeight= 50;
const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
    marginVertical: Dimensions.get('window').height - 80,
    backgroundColor: '#0e0204',
    height: 80,
    // borderRadius: 7,
	  flexDirection: 'row',
	  // alignItems:'stretch',
    justifyContent: 'space-around',
  },

  right: {
	  marginLeft: 0,
	  borderRadius: 7,
	  height: 50,
	  backgroundColor: '#F94301',
  },
  left: {
    fontSize: 20,
    marginRight: 10,
  },

  textRight: {
	  fontSize: 20,
    color: '#f3f6f9',
  },
});
export default class Rule extends Component {
 static navigationOptions = {
   header: null,
 };

 goLogin = () => {
   const { navigation, } = this.props;
   navigation.navigate('Login');
 };

 goRegister = () => {
   const { navigation, } = this.props;
   navigation.navigate('Register');
 };


 render() {
   return (
     <View style={styles.wrapper}>

       <View
         style={styles.right}
         onPress={() => {
		     this.goLogin();
	     }}
       >
         <Text style={styles.textRight}>登入</Text>

       </View>
       <View
         style={styles.right}
         onPress={() => {
			     this.goLogin();
		     }}
       >
         <Text style={styles.textRight}>注册</Text>

       </View>
       {/* <View */}
       {/* style={styles.left} */}
       {/* onPress={() => { */}
       {/* this.goRegister(); */}
       {/* }} */}
       {/* > */}
       {/* 注册 */}
       {/* </View> */}
     </View>
   );
 }
}
