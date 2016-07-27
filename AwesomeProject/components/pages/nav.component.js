import React ,{Component} from 'react';
import {View,Image,Text,StyleSheet,ScrollView} from 'react-native';

/**
 * 导航
 */
export class NavComponent extends Component{
   render(){
   	  return (
   	  	        
              <View style = {styles.nav}>
                 
                 <View style={[styles.navItem,styles.firstItem]}>
                    <Image source={require('../../image/wifi.png')}  style={styles.navImg}/>
                    <Text style={styles.navtext}>推荐</Text>
                 </View>
                 <View style={[styles.navItem]}>
                    <Image source={require('../../image/plane.png')}  style={styles.navImg}/>
                    <Text style={styles.navtext}>机票</Text>
                 </View>
                 <View style={[styles.navItem]}>
                    <Image source={require('../../image/moon.png')}  style={styles.navImg}/>
                    <Text style={styles.navtext}>旅游</Text>
                 </View>
                 <View style={[styles.navItem]}>
                    <Image source={require('../../image/message.png')}  style={styles.navImg}/>
                    <Text style={styles.navtext}>管家</Text>
                 </View>
                 <View style={[styles.navItem]}>
                    <Image source={require('../../image/link.png')}  style={styles.navImg}/>
                    <Text style={styles.navtext}>接送</Text>
                 </View>
                 <View style={[styles.navItem]}>
                    <Image source={require('../../image/sound.png')}  style={styles.navImg}/>
                    <Text style={styles.navtext}>戏曲</Text>
                 </View>
                 <View style={[styles.navItem]}>
                    <Image source={require('../../image/sun.png')}  style={styles.navImg}/>
                    <Text style={styles.navtext}>海滩</Text>
                 </View>
                  <View style={[styles.navItem]}>
                    <Image source={require('../../image/user.png')}  style={styles.navImg}/>
                    <Text style={styles.navtext}>向导</Text>
                 </View>
                  <View style={[styles.navItem]}>
                    <Image source={require('../../image/search.png')}  style={styles.navImg}/>
                    <Text style={styles.navtext}>搜索</Text>
                 </View>
               
              </View>
               
   	  	);

   }
}

const  styles = StyleSheet.create({
        nav:{
        	flexDirection:'row',
        	 height:60,
        	 backgroundColor:'#7C4DFF',
        	 zIndex:1
        	 
        },
        navItem:{
        	width:48,
        	height:60,
        	paddingHorizontal:8,
        	paddingTop:10
        },
        navImg:{
           alignSelf:'center',
           width:20,
           height:20,
           marginBottom:6
        },
        firstItem:{
           backgroundColor:'#6334E5'
        },
        navtext:{
        	color:'#fff',
        	textAlign:'center'
        }

});