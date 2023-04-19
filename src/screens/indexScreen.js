import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { version } from "react/cjs/react.production.min";



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
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <AntDesign style={styles.icon} name="delete" />
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'

    },
    title: {
        fontSize: 18,

    },
    icon: {
        fontSize: 25,
    }
});

export default indexScreen;
