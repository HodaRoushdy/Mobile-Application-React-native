import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AndBtn from './components/buttons/AndBtn';
import IosBtn from './components/buttons/IosBtn';
import Layout from './components/Layout';
export default function App() {
  const [refresh, setRefresh] = useState<boolean>(false)
  const pickImg = async () => {
    let res = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (res.status !== "granted") {
      alert("permission error")
    }
    if (res.status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      if (!result.canceled) {
        imgFormData(result.assets[0].uri)
      }
    }
  }
  const imgFormData = async (selectedImg: string) => {
    if (selectedImg != '') {
      const form = new FormData()
      form.append('photo', {
        name: new Date().toString() + "image",
        uri: selectedImg,
        type: "image/jpg "
      } as any)
      //i replaced localhost with my ip address because of an error occures when simulator see localhost 
      //it determines that localhost is his localhost not the localhost of my labtop
      // so please replace my ip address (192.168.1.3) with yours
      await axios.post('http://192.168.1.3:3000/upload', form, {
        headers: {
          Accept: 'application/json',
          "content-type": 'multipart/form-data'
        }
      }).then((res) => {
        if (res.data.message == 'success') {
          alert("great")
          setRefresh(true)
        }
      }).catch((err) => {
        alert("oops" + JSON.stringify(err))
      })
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'ios' ? <IosBtn selected={pickImg}></IosBtn> : ''}
      <Layout refresh={refresh} setRefresh={setRefresh} ></Layout>
      {Platform.OS === 'android' ? <AndBtn selected={pickImg}></AndBtn> : ''}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
  },
})
