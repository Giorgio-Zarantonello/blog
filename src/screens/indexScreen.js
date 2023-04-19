import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { FlatList } from "react-native";


const indexScreen = () => {
    // const blogPosts = useContext(BlogContext);
    const { state, addBlogPost } = useContext(Context);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
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
