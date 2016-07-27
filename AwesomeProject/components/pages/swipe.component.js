import  Swiper  from 'react-native-swiper';
import React ,{Component} from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

class SwiperHome extends Component{
	 render(){
	 	 return (
	 	 	<Swiper style={styles.wrapper} height={200} horizontal={true} autoplay={true}>
	          <View style={styles.slide1}>
	           <Image source={{uri:'http://localhost:3000/images/slide0.jpg'}} style={styles.image} />
	          </View>
	          <View style={styles.slide2}>
	            <Image source={{uri:'http://localhost:3000/images/slide1.jpg'}} style={styles.image} />
	          </View>
	          <View style={styles.slide3}>
	           <Image source={{uri:'http://localhost:3000/images/slide2.jpg'}} style={styles.image} />
	          </View>
        </Swiper>);
	 }
} 

const styles = StyleSheet.create({
	wrapper: {
		
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

 

  image: {
    flex: 1,
    width:375,
    height:200,
    
  }
})
module.exports = SwiperHome;