import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/NewsFeed/Header';
import UserInformation from '../components/NewsFeed/UserInformation';
import Post from '../components/NewsFeed/Post';
import LikeComment from '../components/NewsFeed/LikeComment';

const NewsFeed = () => {
    const user = {
        name: 'John Doe',
        username: 'johndoe',
        image: "https://images.unsplash.com/photo-1529797228130-fe918ce6d915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        postImage: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fE5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
    return (
        <View>
            <Header />
            <UserInformation user={user} />
            <Post isvideo={false} url={user.postImage} />
            <LikeComment />
        </View>
    )
} 
export default NewsFeed;