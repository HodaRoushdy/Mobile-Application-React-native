import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
interface Props {
    selected: Function
}
const AndBtn = ({ selected }: Props) => {
    return (
        <Pressable onPress={() => { selected() }} style={style.forBtn}>
            <View style={style.forPls}>
                <Text style={{ color: '#404040', fontSize: 26 }}>+</Text>
            </View>
            <Text style={{ color: '#404040' }}>Add Photo</Text>
        </Pressable>
    )
}
const style = StyleSheet.create({
    forPls: {
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        paddingHorizontal: 9,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#404040',
    },
    forBtn: {
        backgroundColor: '#a6a6a6',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 8
    }

})
export default AndBtn