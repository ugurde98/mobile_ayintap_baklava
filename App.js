import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  } ,[]);

if(isLoading){

  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={require('./assets/splash1.png')} style={{width:'100%',height:'100%'}}/>
    </View>
  )
}

  return (
    <View style={{top:0, flex:1,backgroundColor:'#eae0cd'}}>
    <WebView
      style={styles.container}
      source={{ uri: 'https://ayintapbaklava.com.tr/' }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor:'#eae0cd'
  },
});
