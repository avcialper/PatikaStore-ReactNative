import React from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import products from "./products.json";
import ProductCard from "./component/ProductCard/index";

const App = () => {

  // Gets designed product card.
  const renderProduts = ({ item }) => <ProductCard product={item} />
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <FlatList
        data={products}
        renderItem={renderProduts}
        keyExtractor={item => item.id.toString()}
        numColumns={2}      // To indicate how many product in one row.
        ListHeaderComponent={
          <TextInput
            style={styles.source_area}
            onChangeText={onChangeText}
            value={text}
            placeholder="PatikaStore' da ara"
            placeholderTextColor='#810181'
          />
        }
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
  source_area: {
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