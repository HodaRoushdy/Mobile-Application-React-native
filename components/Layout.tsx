import axios from "axios"
import { useEffect, useState } from "react"
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native"
const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
type imgUrl = {
    id: number,
    url: string
}
interface Props {
    refresh: boolean,
    setRefresh: Function
}
const Layout = ({ refresh, setRefresh }: Props) => {
    const [images, setImages] = useState<imgUrl[]>([])
    useEffect(() => {
        //i replaced localhost with my ip address because of an error occures when simulator see localhost 
        //it determines that localhost is his localhost not the localhost of my labtop
        // so please replace my ip address (192.168.1.3) with yours
        axios.get('http://192.168.1.3:3000/photos').then((res) => {
            setImages(res.data)
        }).catch((err) => {
            console.log('error', err)
        })
        setRefresh(false)
    }, [refresh])
    return (
        // firstly i have made it by scrollView and for loop but i changed it to flatList to 
        // enhance performance , minimiz response time and shorten lines of code   
        <View style={style.container}>
            <FlatList data={images} columnWrapperStyle={style.forFlatList} numColumns={2} renderItem={({ item }) => {
                return (
                    <View style={style.forImg}>
                        <Image source={{ uri: item.url }} resizeMode='stretch' style={{ width: '100%', height: '100%', overflow: "hidden" }}></Image>
                    </View>
                )
            }}></FlatList>
        </View>
    )
}
const style = StyleSheet.create(
    {
        container: {
            width: '100%',
        },
        forImg: {
            width: windowWidth / 2.5,
            height: windowHeight / 4,
            borderStyle: 'solid',
            borderWidth: 1,
            marginTop: 10,
        },
        forFlatList: {
            justifyContent: 'space-around',
        }
    }
)
export default Layout