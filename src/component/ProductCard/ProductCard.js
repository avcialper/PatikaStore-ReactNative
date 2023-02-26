import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: product.imgURL }}
            />
            <View style={styles.product_info}>
                <Text style={styles.product_name}>{product.title}</Text>
                <Text style={styles.product_price}>{product.price}</Text>
                {
                    product.inStock === false && <Text style={styles.stock}>STOKTA YOK</Text>
                }
            </View>
        </View>
    );
};

export default ProductCard;