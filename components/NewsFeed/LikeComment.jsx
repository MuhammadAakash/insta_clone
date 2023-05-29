import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"


const LikeComment = () => {
    const [isLike, setIsLike] = useState(false)
    const [isBookmark, setIsBookmark] = useState(false)
    
    const onLikePress = () => {
        setIsLike(!isLike)
    }
    const onBookmarkPress = () => {
        setIsBookmark(!isBookmark)
    }

    return (
       <View style={styles.mainContainer}>
        <View style= {styles.likeCommentBtn}>
        <TouchableOpacity onPress={onLikePress}>
            <Ionicons name={isLike ? "heart" : "heart-outline"} size={30} color={isLike ? "red" : "black"} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={30} color="black" />
        </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={onBookmarkPress}>
            <Ionicons name={isBookmark ? "bookmark" :"bookmark-outline"} size={30} color="black" />
        </TouchableOpacity>

       </View> 
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10
    },
    likeCommentBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
        gap: 10
    }

})


export default LikeComment;