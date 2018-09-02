import React, { Component, } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { global, } from '../../commons/utils/Global';


// 橘色 #F94301


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
     <View style={styles.entire}>
       <View style={styles.wrapper}>
         <TouchableOpacity
           onPress={() => {
			       this.goLogin();
		       }}
         >
           <View
             style={styles.button}
             backgroundColor={'#F94301'}
           >
             <Text
               style={[ styles.buttonFont, { color: 'white', }, ]}
             >
	         登录
             </Text>

           </View>
         </TouchableOpacity>
         <View
           style={styles.button}
           backgroundColor={'#F8F8F8'}
           onPress={() => {
			     this.goRegister();
		     }}
         >
           <Text
             style={[ styles.buttonFont, { color: 'black', }, ]}
           >
             注册
           </Text>

         </View>
       </View>
     </View>
   );
 }
}

const FH = px2dp(180);
const CH = px2dp(100);
const CW = px2dp(250);
// let BHeight= 50;
const styles = StyleSheet.create({
  entire: {
    backgroundColor: '#aeff93',
  },

  wrapper: {
    marginHorizontal: px2dp(40),
    marginVertical: SCREEN_HEIGHT - FH,
    height: FH,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    borderRadius: 7,
	  height: CH,
	  width: CW,
    alignItems: 'center',
	  justifyContent: 'center',
  },

  buttonFont: {
    fontSize: FONT_SIZE(18),
  },
});
