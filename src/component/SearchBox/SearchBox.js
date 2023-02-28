import React from "react";
import { View, TextInput, Image } from "react-native";
import styles from "./SearchBox.style";

const SearchBox = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.search}
                placeholder="PatikaStor' da ara"
                placeholderTextColor='#810181'
                onChangeText={props.setInput}
            />
            <Image
                style={styles.image}
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/3031/3031293.png" }}
            />
        </View>

    );
};

export default SearchBox;