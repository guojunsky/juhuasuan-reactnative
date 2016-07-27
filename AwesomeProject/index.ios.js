/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SwipeHome from './components/pages/swipe.component';
import {NavComponent} from './components/pages/nav.component';
import {YourLink,FastOver,ProductListComponent} from './components/pages/home.component'



import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,Image,ScrollView
} from 'react-native';

class AwesomeProject extends Component {

  constructor(props){
     super(props);
     this.state = {
       selectedTab:'home'
     }
  }
  _renderPart(title){

      if(this.state.selectedTab === 'home'){
         return <View style={styles.container}>
                   <View style={styles.pageHeader}>
                   <View style={styles.topHeader}>
                     <Image source={require('./image/logo.png')} style={{width:120,height:30}} />
                   </View>
                   <NavComponent />
                   </View>
                    <ScrollView style={styles.pageContent} automaticallyAdjustContentInsets={false}> 
                     <SwipeHome />
                     <YourLink /> 
                      <FastOver />
                       <ProductListComponent />
                   </ScrollView>
                    
               </View>
      }
      return <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.instructions}>
            暂无记录~
          </Text>
        </View>
      </View>
  }
  render() {
    return (
         <TabBarIOS 
         unselectedTintColor="#333"
         
        tintColor="#bd50c8">
            <TabBarIOS.Item
              title="今日推荐"
              icon={require("./image/icon_bottomtag_home_n.png")}
              selectedIcon= {require("./image/icon_bottomtag_home_s.png")}
              selected={this.state.selectedTab ==='home'}
              onPress={()=>{
                  this.setState({
                    selectedTab: 'home'
                  });
              }}
              >
              {this._renderPart('今日推荐')}
            </TabBarIOS.Item>

            <TabBarIOS.Item
              title="超级超市"
              icon={require("./image/icon_bottomtag_market_n.png")}
              selected={this.state.selectedTab ==='market'}
              onPress={()=>{
                  this.setState({
                    selectedTab: 'market'
                  });
              }}
              >
              {this._renderPart('闪送超市')}
            </TabBarIOS.Item>

            <TabBarIOS.Item
              title="购物车"
              badge="4"
               icon={require("./image/icon_bottomtag_cart_n.png")}
              selected={this.state.selectedTab ==='shoppingcart'}
              onPress={()=>{
                  this.setState({
                    selectedTab: 'shoppingcart'
                  });
              }}
              >
              {this._renderPart('购物车')}
            </TabBarIOS.Item>

            <TabBarIOS.Item
              title="个人中心"
               icon={require("./image/icon_bottomtag_me_n.png")}
              selected={this.state.selectedTab ==='me'}
              onPress={()=>{
                  this.setState({
                    selectedTab: 'me'
                  });
              }}
              >
              {this._renderPart('个人中心')}
            </TabBarIOS.Item>
          </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    flex:1
  },
  pageHeader:{
    height:120,
  },
  pageContent:{
    flex:1,

  },
  topHeader:{
      height:60,
       
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      paddingTop:10
  },
  header:{
    height:50,
    paddingTop:25,
    backgroundColor:'#29e',
    
  },
  text:{
      textAlign: 'center',
      color:'#fff',
      fontSize:16

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    paddingTop:20,
    color:'#999'
  },
  content:{
    flex:4
  },
  footer:{
     flex:1,
     backgroundColor:'#333',
     
  },
  test:{
     color:'#fff',
     textAlign: 'center',
     paddingTop:45,
    
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
