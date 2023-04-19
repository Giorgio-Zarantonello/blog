import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";
import { FlatList } from "react-native";


const indexScreen = () => {
    const blogPosts = useContext(BlogContext);
    return (
        <View>
            <FlatList
                data={blogPosts}
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
