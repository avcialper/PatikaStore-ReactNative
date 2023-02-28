import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#eceff1',
        borderRadius: 10,
        marginLeft: 7,
        marginRight: 7,
        marginBottom: 7,
    },
    search: {
        color: 'black',
        width: Dimensions.get('window').width - 60,
    },
    image: {
        margin: 10,
        marginTop: 15,
        width: 20,
        height: 20,
        alignItems: 'center',
    }
});