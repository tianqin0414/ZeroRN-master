import React, { Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';


// 橘色 #F94301


const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
    //marginVertical: 20,
    backgroundColor: '#ff2c44',
    height: 120,
    // paddingTop: 10,
    borderRadius: 7,
	  flexDirection: 'row-reverse',// TQ0826
  },
  flex_row: {
    flexDirection: 'row',
    flex: 1, // 充满父容器
  },
  flex_reverse: {
    flexDirection: 'row-reverse',
  },
  flex_column_reverse: {
    flexDirection: 'column-reverse',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
       <View>
         <Text
           style={styles.welcome}
           onPress={() => {
             this.goLogin();
           }}
         >
					登入!
         </Text>
         <Text
           style={styles.welcome}
           onPress={() => {
             this.goRegister();
           }}
         >
        注册!
         </Text>
       </View>
     </View>
   );
 }
}
