import { View , Text, StyleSheet, Dimensions, Pressable } from "react-native"
const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

interface Props {
selected:Function
}

const AndBtn =({selected}:Props)=>{
    return(
<Pressable onPress={()=>{selected()}} style={style.forBtn}>
    <View style={{flexDirection:'row', justifyContent:'center' }}>
    <Text style={[style.forPls ]}>+</Text>
    </View>
    <Text style={{color:'#4d4d4d'}}>Add Photo</Text>
</Pressable>
    )
}

const style = StyleSheet.create({
forPls :{
fontSize:26,
textAlign:'center',
alignSelf:'center',
lineHeight:28,
paddingHorizontal:6,
marginVertical:5,
borderWidth:1,
borderRadius:50,
borderColor:'#4d4d4d',
color:'#4d4d4d'

},
forBtn :{
    backgroundColor:'#a6a6a6',
    justifyContent:'center',
    position:'absolute',
    bottom:'10%',
    right:'20%',
    paddingVertical:20,
    paddingHorizontal:10,
    borderWidth:1,
    borderStyle:'solid',
    borderRadius: 8

}

})
export default AndBtn