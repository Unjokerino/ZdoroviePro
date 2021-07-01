import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import Icons from '../assets/icons'
import Button from '../components/Button'
import CustomLayout from '../components/CustomLayout'
import { Title } from '../components/Themed'
import { Colors } from '../constants'
import { CardProps } from './HealthProfileScreen'

export default function RecomendationScreen({route:{params}}: {route:{params:CardProps}}) {

    const {image, name, text} = params
    const navigation = useNavigation()
    return (
        <CustomLayout>
            <View style={[styles.card, {backgroundColor: Colors.light.header}]}>
               <Title style={styles.title}>{name}</Title>
               <Image resizeMode="contain" style={styles.image} source={image} />
            </View>
            <View style={[styles.card, {backgroundColor: '#fff'}]}>
                <View style={styles.iconContainer} >
                    <Icons.LightBulb color='#fff' />
                </View>
                <Text style={styles.bold}>Это важно знать:</Text>
                <Text>{text}</Text>
            </View>
            <Button style={styles.button} title="Назад" mode="contained" onPress={() => navigation.goBack()} />
        </CustomLayout>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    iconContainer: {
        alignSelf:'center',
        marginBottom:10,
        width: 49,
        height: 49,
        backgroundColor: "#FF8181",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
      },
    button:{
        width:100,
        alignSelf:'center',
        marginBottom:30,
    },
    bold:{
        fontWeight:'bold',
        marginBottom:31,
        textAlign:'center'
    },
    title:{
        color:'#fff',
        textAlign:'center'
    },
    image:{
        width:"100%",
        height:272,
    },
    card:{
        borderRadius:20,
        flex:1,
        marginTop:64,
        paddingHorizontal:20,
        marginBottom:20,
        marginHorizontal:20,
        paddingVertical:38,

       
    }
})
