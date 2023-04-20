import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as CreateContext } from '../context/BlogContext';
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(CreateContext);

    return <BlogPostForm />


}

const styles = StyleSheet.create({

})

export default CreateScreen;