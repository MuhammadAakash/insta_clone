import React from 'react'
import { View, Image, StyleSheet } from 'react-native';

const Post = ({isvideo, url}) => {
    return (
        <View>
            {
                isvideo ? (
                    <Image
                        source={{uri: url}}
                        style={styles.postVideo}
                        />
                ) : (
                    <Image
                        source={{uri: url}}
                        style={styles.postImage}
                        />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    postImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
})

export default Post;