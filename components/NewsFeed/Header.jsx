import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { icons } from '../../constants/icons';
import { Ionicons } from '@expo/vector-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';


const Header = () => {
    return (
       <View style={styles.mainContainer}> 
        <View >
            <Image style={styles.logo} source={icons.InstagramHeader} />
        </View>
        <View style={styles.icons}>
            <Ionicons name='heart-outline' size={30} color='black'/>
            <Ionicons name='chatbubble-outline' size={30} color='black'/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 60,
        gap: 10
    }


})

export default Header;