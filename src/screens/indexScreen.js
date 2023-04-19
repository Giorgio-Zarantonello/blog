import React, { useContext } from "react";
import { View, Text, StyleSheet , Button } from "react-native";
import BlogContext from "../context/BlogContext";
import { FlatList } from "react-native";


const indexScreen = () => {
    // const blogPosts = useContext(BlogContext);
    const {data , addBlogPost} = useContext(BlogContext);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={data}
                keyExtractor={ blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }
            }
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default indexScreen;
