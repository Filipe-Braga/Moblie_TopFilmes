import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import Filme from './src/components/Filme';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-web';
// import { Header } from 'react-native/Libraries/NewAppScreen';


export default function App() {

  let [filmes, setfilmes] = useState([]);

  
  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';


  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {console.log(objeto.data);
      setfilmes(objeto.data);})
  },[]);

  return (
    <View style={styles.back}>
      <View>
        {/* <Header/> */}
      </View>
      <View>{filmes.length > 0 ? filmes.map(filme => <Filme filme={filme.attributes}/> ) 
      : <ActivityIndicator/>}</View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    width: '100%',
    height: '100%',
    //flex: 1,
    backgroundColor: '#203027',
    alignItems: 'center',
    justifyContent: 'center',
  },
});