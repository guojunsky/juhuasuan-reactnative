import React ,{Component} from 'react';
import {View,Image,Text,StyleSheet,ScrollView,ListView} from 'react-native';
import {ProductService} from '../../service/product.service';

/**
 * 猜你喜欢
 */
export class YourLink extends Component{
   render(){
   	  return (
           <View style={styles.yourlink}>
               <View style={[styles.linkItem,styles.linkFirst]}>
                   <View style={styles.text}>
                     <View>
                       <Text style={styles.linkColor}>猜你喜欢</Text>
                     </View>
                     <View style={styles.smbtn}>
                         <Text style={styles.btntext}>￥19.9</Text>
                     </View>
                     
                   </View>
                   <View style={styles.title}>
                         <Text style={styles.ttext}>五支装</Text>
                     </View>
                    <View style={styles.img}>
                         <Image source={{uri:'https://img.alicdn.com/tps/i3/142190221927999615/TB2P.6QpXXXXXa3XXXXXXXXXXXX_!!0-juitemmedia.jpg_320x320Q50.jpg'}} style={{width:60,height:60}} />
                     </View>
               </View>
               <View style={styles.linkItem}>
                    <View style={styles.text}>
                     <View>
                       <Text style={styles.countySelect}>国家精选</Text>
                     </View>
                     <View style={styles.smbtn}>
                         <Text style={styles.btntext}>￥19.9</Text>
                     </View>                         
                   </View>
                   <View style={styles.title}>
                         <Text style={styles.ttext}>韩国面膜尖货节</Text>
                     </View>
                   <View style={styles.img}>
                         <Image source={{uri:'https://gju1.alicdn.com/bao/uploaded/i3/156860252941422097/TB21EeGsVXXXXbkXXXXXXXXXXXX_!!0-juitemmedia.jpg_360x360q50.jpg'}} style={{width:60,height:60}} />
                     </View>
               </View>
           </View>
   	  );
   }
}


 
export  class FastOver extends Component{
    render(){
    	return (
          <View style={styles.fastWrap}>
              <View style={styles.fTitle}>
                  <View style={styles.ftitleName}>
                       <Text style={styles.fText}>即将告罄</Text>
                   </View>
                   <View style={styles.subName}>
                      <Text style={styles.sText}>限时疯抢 售完不补</Text>
                   </View>
              </View>
              <View style={styles.productList}>
                  <View style={styles.productItem}>
                      <Image source={{uri:'https://img.alicdn.com/tps/i4/152430221986185438/TB2J5nApXXXXXbXXpXXXXXXXXXX_!!0-juitemmedia.jpg_400x400q75'}} style={styles.productItemImg} />
                      <Text style={styles.desctext}>花王纸尿裤</Text>
                      <View style={styles.pl}>
                          <View style={styles.priceWrap}>
	                          <View style={styles.price}>
	                              <Text style={styles.priceText}>￥199.0</Text>
	                          </View>
	                          <View style={styles.smbtn}>
	                              <Text style={styles.btntext}>仅剩119</Text>
	                          </View>
	                      </View>
                      </View>
                  </View>
                  <View style={styles.productItem}>
                      <Image source={{uri:'https://img.alicdn.com/tps/i4/152430221986185438/TB2J5nApXXXXXbXXpXXXXXXXXXX_!!0-juitemmedia.jpg_400x400q75'}} style={styles.productItemImg} />
                      <Text style={styles.desctext}>花王S82片</Text>
                      <View style={styles.pl}>
                          <View style={styles.priceWrap}>
	                          <View style={styles.price}>
	                              <Text style={styles.priceText}>￥19.0</Text>
	                          </View>
	                          <View style={styles.smbtn}>
	                              <Text style={styles.btntext}>仅剩19</Text>
	                          </View>
	                      </View>
                      </View>
                  </View>
                  <View style={styles.productItem}>
                      <Image source={{uri:'https://img.alicdn.com/tps/i2/146910256762832501/TB28PBntpXXXXcdXXXXXXXXXXXX_!!0-juitemmedia.jpg_400x400q75'}} style={styles.productItemImg} />
                      <Text style={styles.desctext}>德国爱他美2+</Text>
                      <View style={styles.pl}>
                          <View style={styles.priceWrap}>
	                          <View style={styles.price}>
	                              <Text style={styles.priceText}>￥209.0</Text>
	                          </View>
	                          <View style={styles.smbtn}>
	                              <Text style={styles.btntext}>仅剩109</Text>
	                          </View>
	                      </View>
                      </View>
                  </View>
                  <View style={styles.productItem}>
                      <Image source={{uri:'https://img.alicdn.com/tps/i4/152430221986185438/TB2J5nApXXXXXbXXpXXXXXXXXXX_!!0-juitemmedia.jpg_400x400q75'}} style={styles.productItemImg} />
                  </View>
              </View>
          </View>
    	)
    }
}

export class ProductListComponent extends Component{
	  constructor(props){
	  	 super(props);
	    this.state = {
	      dataList:[],
	      loaded: false,
	    };
	}

	render(){
		  var self = this;
		  var list = this.state.dataList.map((x)=>{
                   return self.renderProduct(x);
            });
		  if(!this.state.loaded){
		  	  return <View style={styles.loading}><Text>loading...</Text></View>
		  }
		  return (<View>
              {list}
		  </View>)
	}
	renderProduct(product){
         return (
         	<View style= {[styles.pItemWrap,{backgroundColor:product.color}]} key={product.pname+product.price}>
              <View style={styles.pimg}>
                  <Image source={{uri:'https:' + product.imgs}} style = {styles.imgs} /> 
              </View>
              <View style={styles.pinfo}>
                 <View style={styles.area}>
                   <Text style = {styles.make}>{product.makeArea}</Text>
                   <Image source = {require('../../image/planeimg.png')} style={styles.mimg} />
                   <Text style = {styles.to} style={styles.toArea}>{product.toArea}</Text>
                 </View>
                 <View style={styles.ptext}>
                  <Text style = {styles.pdesc}>{product.pdesc}</Text>
                  <Text style = {styles.pname}>{product.pname}</Text>
                  </View>
                  <View style={styles.oprice}>
                   <Text style = {styles.op}>￥{product.oprice}</Text>
                   <View style = {styles.stock}><Text style={styles.ck}>{product.stock}</Text><Text style={styles.ckk}>件已售</Text></View>
                 </View>
                 <View style={styles.priceWp}>
                   <Text style = {styles.ppp}>￥{product.price}</Text>
                   <Text style = {styles.btngood}>立马抢</Text>
                 </View>
              </View>
         	</View>);
	}

	componentDidMount(){
		console.log(1);
		 new ProductService().getList().then(function (data) {
		 	console.log(data);
		 	 this.setState({
	          dataList: JSON.parse(data),
	          loaded: true,
	        });
		 }.bind(this));
	}
}



const styles = StyleSheet.create({
	  yourlink:{
	  	 flex:1,
	  	 flexDirection:'row',
	  	 height:80,
	  	 backgroundColor:'#fff',
	  	 marginBottom:10,
	  	 
	  },
	  linkItem:{
	  	flex:1,
	  	padding:5,
	  	paddingLeft:15,
	  	paddingTop:15,
	  	position:'relative'
	  },
	  linkFirst:{
	  	borderRightWidth:1,
	  	borderRightColor:'#ddd'
	  },
	  text:{
         flex:2,
         flexDirection:'row',
         position:'relative',
         zIndex:2
	  },
	  smbtn:{
	  	  borderRadius:8,
	  	  position:'absolute',
	  	  backgroundColor:'#E91E63',
	  	  borderWidth:1,
	  	  borderColor:'#E91E63',
	  	  overflow:'hidden',
	  	  marginLeft:5 

	  },
	  btntext:{
	  	color:'#fff',
	  	fontSize:12
	  },
	  linkColor:{
	  	fontSize:14,
	  	fontWeight:'bold',
	  	color:'#7B46E5'
	  },
	  countySelect:{
	  	color:'#E91E63'
	  },
	  img:{
	    position:'absolute',
	    right:20,
        top:15,
        zIndex:1
	  },
	  title:{
	  	 paddingTop:5,
	  	 position:'relative',
	  	 top:-25
	  },
	  ttext:{
         fontSize:12,
         color:'#999'
	  },
	  fastWrap:{
	  	height:200,
	  	flexDirection:'column',
	  	backgroundColor:'#fff',
	  	marginBottom:10,
	  	paddingLeft:10
	  },
	  fTitle:{
	  	height:40,
	  	flexDirection:'row',
	  	alignItems:'center'
	  },
	  fText:{
	  	 fontSize:14,
	  	fontWeight:'bold',
	  	color:'#E91E63'
	  },
	  sText:{
	  	fontSize:12,
	  	color:'#999'
	  },
	  subName:{
	  	paddingLeft:5
	  },
	  productList:{
	  	flex:1,
	  	flexDirection:'row'
	  },
	  productItem:{
	  	width:110,
	  	height:155
	  },
	  productItemImg:{
           width:110,
           height:110
	  },
	  desctext:{
	  	 textAlign:'center',
	  	 color:'#999',
	  	 lineHeight:20,
	  	 fontSize:12
	  },
	  pl:{
	  	 flexDirection:'row',
	  	 flex:1,
	  	 justifyContent:'center'
	  },
	  priceText:{
         fontSize:12,
         color:'#EF2C62'
	  },
	  priceWrap:{
          width:100,
          flexDirection:'row',
          padding:5

	  },
	 imgs:{
         width:160,
         height:159
	  },
	  pItemWrap:{
	  	height:160,
	  	borderBottomWidth:1,
	  	borderBottomColor:'#ddd',
	  	flex:1,
	  	flexDirection:'row',
	  	overflow:'hidden'

	  },
	  pinfo:{
	  	height:160,
	    overflow:'hidden',
	    flex:1,
	    flexDirection:'column',
	    paddingTop:10,
	    paddingBottom:8

	  },
	  area:{
	  	flex:1,
	  	flexDirection:'row',
	  	alignItems:'center',
	  	justifyContent:'space-between',
	  	paddingRight:10
	  },
	  ptext:{
	  	flex:3,
	  	justifyContent:'center',
	  },oprice:{
	  	flex:1,
	  	flexDirection:'row',
	  	justifyContent:'space-between',
	  },
	  priceWp:{
	  	flex:1,
	  	flexDirection:'row',
	  	justifyContent:'space-between',
	  },
	  mimg:{
	  	width:55,
	  	height:17,
	  	marginHorizontal:5
	  },
	  make:{
	  	width:60
	  },
	  toArea:{
	  	  marginRight:2,
	  	  borderWidth:1,
	  	  borderRadius:5,
	  	  borderColor:'#704FAE',
	  	  color:'#704FAE',
          fontSize:12,
          textAlign:'center',
          padding:2
	  },
	  pdesc:{
	  	color:'#333',
	  	fontSize:16,
	  	marginBottom:8,
	  	 
	  },
	  pname:{
	  	fontSize:12,
	  	color:'#999'
	  },
	  op:{
          color:'#999',
          fontSize:12,
          flex:1
	  },
	  stock:{
	  	 paddingRight:7,
	  	 flex:1,
	  	 flexDirection:'row',
	  	 justifyContent:'flex-end',

	  },
	  ck:{
	  	color:'#e91e63',
	  	marginRight:1,
	  	fontSize:12
	  },
	  ckk:{
	  	 fontSize:12,
	  	 color:'#999'
	  },
	  ppp:{
	  	 fontSize:24,
	  	 color:'#e91e63'
	  }
	  ,
	  btngood:{
         position:'absolute',
         height:18,
         backgroundColor:'#E91E63',
         color:'#fff',
         borderRadius:10,
         borderWidth:1,
         borderColor:'#E91E63',
         fontSize:12,
         right:15,
         top:5,
         overflow:'hidden',
         paddingLeft:5,
         paddingRight:5,
         lineHeight:14
	  },
	  priceWp:{
	  	position:'relative',

	  }

});