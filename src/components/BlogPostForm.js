import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    return <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />

        <Button
            onPress={() => {
                // after safely done , call callback for navigation , for example waiting for an API call 

            }}
            title="Save Blog Post" />
    </View>

}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        margin: 10,
        borderRadius: 10,
        textAlign: "center",
        padding: 10


    },
    label: {
        fontSize: 20,
        margin: 5,
        textAlign: "center"
    }
});

export default BlogPostForm