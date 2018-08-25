import React, { Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Login from './Login/LoginNavigation';
import Register from './Register/RegisterNavigation';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1155ff',
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
     <View style={styles.container}>
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
   );
 }
}
