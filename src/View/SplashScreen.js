import React from 'react'
import { View, Text,StatusBar,StyleSheet,Image} from 'react-native';

// import Logo
import LogoImg from '../../assest/logo.png.png';

export default function SplashScreen() {
  return (
    <View style={customStyle.container}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Text style={customStyle.titleText}>Diktoo</Text>
    
    <Image style={customStyle.logo} source={LogoImg} />
    <Text style={customStyle.bottomText}>Made WITH DISPLINE</Text>
    </View>
  );
}

const customStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
    tittleText: {
        color: '#000099',
        fontSize: 30,
        fontWeight: 'bold',

    },
    logo:{
        height: 200,
        width: 200,

    }, 
    bottomText: '#fff'
});