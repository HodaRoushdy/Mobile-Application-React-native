import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import AndBtn from './components/buttons/AndBtn';
import IosBtn from './components/buttons/IosBtn';
import Layout from './components/Layout';

export default function App() {

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
    console.log('welcome from formDATA', selectedImg);
    if (selectedImg != '') {
      const form = new FormData()
      form.append('photo', {
        name: new Date().toString() + " _image",
        uri: selectedImg,
        type: "image/jpg "
      } as any)
      console.log(form)
      await axios.post('http://localhost:3000/upload', form, {
        headers: {
          Accept: 'application/json',
          "content-type": 'multipart/form-data'
        }
      }).then((res) => {
        if (res.data.message == 'success') {
          alert("great")
        }
      }).catch((err) => {
        alert("oops" + JSON.stringify(err))
      })
    }



  }

  return (

        <SafeAreaView style={styles.container}>
          {Platform.OS==='android'? <AndBtn selected={pickImg}></AndBtn> :  <IosBtn></IosBtn>}
      <Layout></Layout>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS == 'android'? StatusBar.currentHeight: 0 
  },
})



/* {Platform.OS === 'android' && <BtnAnd />}
{Platform.OS == 'ios' && <BtnIos />} */