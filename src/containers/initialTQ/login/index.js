import { Toast, } from 'teaset';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { fontSizePD, } from '../../../commons/utils/Tool';


export default class Login extends Component {
 static navigationOptions = {
   header: null,
 };

  state = { inputUsername: '', };
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //         inputUsername: '',
  //       };

 goTab = () => {
   const { navigation, } = this.props; // TQ0825
   navigation.navigate('Main');
 }

 login() {
   if (this.state.inputPhoneNum === '111') {
     Toast.message('登入成功');
   } else {
     Toast.message('失败');
   }
 }


 render() {
   return (
     <View style={styles.container}>
       <View style={styles.loginView}>
         <View style={styles.titleView}>
           <Text style={[ { fontSize: FONT_SIZE(30), marginLeft: MD, }, ]}>手机号登录</Text>
         </View>
         <View style={styles.inputView}>
           <Text style={styles.inputTitle}>手机号</Text>
           <TextInput
             style={styles.textInput}
             keyboardType="numeric"
             placeholder="请输入您的手机号"
             underlineColorAndroid="transparent"
             onChangeText={(text) => {
               this.setState({ inputPhoneNum: text, });
             }}
           />
         </View>
         <View style={styles.inputView}>
           <Text style={styles.inputTitle}>验证码</Text>
           <TextInput style={styles.textInput} />
         </View>
         <TouchableOpacity onPress={() => this.login()}>
           <View style={styles.loginBView}>
             <Text style={{ color: '#FFFFFF', fontSize: FONT_SIZE(20), }}>登录</Text>
           </View>
         </TouchableOpacity>
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
