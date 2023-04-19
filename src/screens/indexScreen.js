import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { version } from "react/cjs/react.production.min";
import { TouchableOpacity } from "react-native";



const indexScreen = ({ navigation }) => {
    // const blogPosts = useContext(BlogContext);
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate('Show' , {
                            id : item.id
                        })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => {
                                    deleteBlogPost(item.id);
                                }}>
                                    <AntDesign style={styles.icon} name="delete" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
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
