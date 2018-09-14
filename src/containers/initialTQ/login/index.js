import React, { Component, } from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';
import { fontSizePD, } from '../../../commons/utils/Tool';


export default class Login extends Component {
 static navigationOptions = {
   header: null,
 };

 goTab = () => {
   const { navigation, } = this.props; // TQ0825
   navigation.navigate('Main');
 };


 render() {
   return (
     <View style={styles.container}>
       <View style={styles.loginView}>
         <View style={styles.titleView}>
           <Text style={[ { fontSize: FONT_SIZE(30), marginLeft: MD, }, ]}>手机号登录</Text>
         </View>
         <View style={styles.inputView}>
           <Text style={styles.inputTitle}>手机号</Text>
           <TextInput style={styles.textInput} />
         </View>
         <View style={styles.inputView}>
           <Text style={styles.inputTitle}>验证码</Text>
           <TextInput style={styles.textInput} />
         </View>
         <View style={styles.loginBView}>
           <Text style={{color: '#FFFFFF', fontSize: FONT_SIZE(20)}}>登录</Text>
         </View>
       </View>
     </View>
   );
 }
}
const NH = px2dp(120);
const TFS = FONT_SIZE(20);
const MD = px2dp(10);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#1155ff',
  },
  loginView: {
	  alignItems: 'stretch',
	  marginTop: px2dp(100),
    marginLeft: px2dp(40),
	  marginRight: px2dp(40),
  },
  titleView: {
  	justifyContent: 'center',
	  backgroundColor: '#fff22b',
    height: px2dp(180),
  },
  inputView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: px2dp(20),
	  backgroundColor: '#eef8ff',
	  height: NH,
  },
  inputTitle: {
    marginLeft: MD,
    fontSize: TFS,
  },
  textInput: {
    flex: 1,
    marginLeft: px2dp(50),
    fontSize: TFS,
  },
  pwdView: {
    justifyContent: 'center',
    marginTop: px2dp(20),
	  backgroundColor: '#fff22b',
    height: NH,
  },
  loginBView: {
    marginTop: px2dp(50),
    height: px2dp(120),
    borderRadius: 4,
    backgroundColor: '#F94301',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
