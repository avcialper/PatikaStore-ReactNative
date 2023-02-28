import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import products from "./products.json";
import ProductCard from "./component/ProductCard/index";
import Search from "./component/SearchBox";

const App = () => {

  const [productList, setProductList] = useState(products)

  // Gets designed product card.
  const renderProduts = ({ item }) => <ProductCard product={item} />

  // Search function.
  const searchProduct = text => {
    const filterData = products.filter(product => {
      const searchedInput = text.toLocaleLowerCase();
      const produtsName = product.title.toLocaleLowerCase();
      return produtsName.indexOf(searchedInput) > -1;
    })
    setProductList(filterData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <Search
        setInput={searchProduct}
      />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={productList}
        renderItem={renderProduts}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#810181',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  search: {
    backgroundColor: '#eceff1',
    color: 'black',
    borderRadius: 10,
    marginLeft: 7,
    marginRight: 7,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

})

export default App;