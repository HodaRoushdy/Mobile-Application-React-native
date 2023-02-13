import { Pressable, StyleSheet, Text, View } from "react-native"

const IosBtn =()=>{
    return(
        <Pressable style={style.forAll}>
            <View style={{flexDirection:'row', justifyContent:'center' }}>
    <Text style={style.forPls}>+</Text>
    </View>
            <Text style={{color:'#4da6ff'}}>Add Photo</Text>
        </Pressable>
    )
}
const style = StyleSheet.create({
    forAll :{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignSelf:'flex-end',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:16,
    },
    forPls :{
        fontSize:18,
        textAlign:'center',
        alignSelf:'center',
        lineHeight:22,
        paddingHorizontal:6,
        marginHorizontal:5,
        borderWidth:1,
        borderRadius:50,
        borderColor:'#4da6ff',
        color:'#4da6ff'
        
        }
})
export default IosBtn