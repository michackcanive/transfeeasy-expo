import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';


const Loading=()=>{

    return(
        <View style={[StyleSheet.absoluteFill,styles.container]}>
            <View style={{width:100,height:100}}>
            <LottieView source={require('../../../assets/images/99281-beezpay-loading-animation.json')} autoPlay loop />
            </View>
        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        
       justifyContent:'center',
       alignItems:'center' ,
       backgroundColor:'rgba(0,0,0,0.3)',
       zIndex:1
    }
})
export default Loading