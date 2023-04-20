import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";



const IndexScreen = ({ navigation }) => {
    // const blogPosts = useContext(BlogContext);
    const { state, deleteBlogPost, getBlogPost } = useContext(Context);

    /**
     * Firstly, it immediately calls the getBlogPost() function during component mount. 
     * Secondly, it configures and returns a cleanup function that removes a didFocus listener that is added to the navigation object.
     * The didFocus listener specifies a callback function that will call getBlogPost() again whenever the screen in focus changes. 
     * It is necessary because when the screen is revisited, the data may need to be updated, and calling getBlogPost() again can update the screen accordingly.
     * 
     * The empty array [] is the dependency array passed to the useEffect function, indicating that this effect function will only run the first time the component mounts.
     * 
     * Using listener.remove() ensures that the listener will be removed when the component unmounts, avoiding potential memory leaks.
     */
    useEffect(() => {
        getBlogPost();
        const listener = navigation.addListener('didFocus', () => {
            getBlogPost();
        });
        return () => {
            listener.remove();
        }
    }, []); 


    return (
        <View>
            {/* <Button title="Add Post" onPress={addBlogPost} /> */}
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {
                            id: item.id
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

//add screen funtionality
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <AntDesign name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
}

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

export default IndexScreen;
