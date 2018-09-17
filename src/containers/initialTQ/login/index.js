import { Toast, } from 'teaset';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import { fontSizePD, } from '../../../commons/utils/Tool';


const api = 'http://118.25.105.109:8001/Help/Api/POST-Customer-LoginCustomer';

export default class Login extends Component {
 static navigationOptions = {
   header: null,
 };

  state = { inputPhoneNum: '', };
  state = { inputVerifyCode: '', };
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //         inputUsername: '',
  //       };

 goTab = () => {
   const { navigation, } = this.props; // TQ0825
   navigation.navigate('Main');
 };

 login() {
   const CellphoneNo = this.state.inputPhoneNum;
   const PassWord = this.state.inputVerifyCode;

   const reg = new RegExp('^[0-9]*$');
   const regLen = new RegExp('^1\\d{10}$');
   const headers = {
     Body: {
       CellphoneNo: "15257325583",
       PassWord: "12345",
     },
   };
   // const formData = new FormData();
   // formData.append('CellphoneNo', CellphoneNo);
   // formData.append('PassWord', PassWord);

   if ((reg.test(CellphoneNo) && regLen.test(CellphoneNo))) {
     Toast.message('正确');
   } else {
     Toast.message('手机号格式不正确');
   }

   fetch(api, { method: 'POST', Body: headers, })
     .then((response) => response.text())
     .then((responseText) => {
       // const json = JSON.parse(responseText);
       // Toast.message(responseText);
       // console.log(responseText);
       // if (responseText.HasError) {
       //   Toast.message('登入成功');
       // } else {
       //   Toast.message('失败');
       // }
     })
     .catch((error) => {
       console.error(error);
     });
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
             placeholder="请填写手机号"
             underlineColorAndroid="transparent"
             onChangeText={(text) => {
               this.setState({ inputPhoneNum: text, });
             }}
           />
         </View>
         <View style={styles.inputView}>
           <Text style={styles.inputTitle}>验证码</Text>
           <TextInput
             style={styles.textInput}
             keyboardType="numeric"
             placeholder="请填写验证码"
             underlineColorAndroid="transparent"
             onChangeText={(text) => {
               this.setState({ inputVerifyCode: text, });
             }}
           />
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
