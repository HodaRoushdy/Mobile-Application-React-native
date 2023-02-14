import { useEffect } from "react"
import { useState } from "react"
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native"
import axios from "axios"
const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
type imgUrl = {
    id:number,
    url:string
} 

const Layout = ()=>{
    const [images , setImages]=useState<imgUrl[]>([])
    useEffect(()=>{
        axios.get('http://localhost:3000/photos').then((res)=>{
            console.log(res.data)
            setImages(res.data)
        }).catch((err)=>{
            console.log('error',err)
        })
    },[])
    return(
// firstly i have made it by scrollView and for loop but i changed it to flatList to 
// enhance performance , minimiz response time and shorten lines of code   
        <View style={style.container}>
        <FlatList data={images} columnWrapperStyle={style.forFlatList} numColumns={2} renderItem={({item})=>{
            return(
                <View style={style.forImg}>
                    <Image source={{uri:item.url}} resizeMode='contain' style={{width:'100%' , height:'100%', overflow:"hidden"}}></Image>
                </View>
            )
        }}></FlatList>
    </View>
    )
}
const style = StyleSheet.create(
    {
        container:{
            width:'100%',
        },
        forImg:{
            width : windowWidth/4 , 
            height:windowHeight/3 ,
            borderColor:'black' ,
            borderStyle:'solid',
            borderWidth:1,
            marginTop:10,
        },
        forFlatList :{
            justifyContent:'space-around', 
        }
    }
)
export default Layout