import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eceff1',
        margin: 7,
        padding: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    product_info: {
        flex: 1,
        justifyContent: 'space-between',
    },
    product_name: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 5,
    },
    product_price: {
        color: '#9c9c9d',
        fontWeight: 'bold',
    },
    stock: {
        color: 'red',
        fontWeight: 'bold',
    }
})