import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,FlatList} from 'react-native';

export default function CartScreen({
  navigation,
  cartItems,
  setCartItems
}) {

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>

        <Text style={styles.emptyText}>
        Your cart is empty
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.buttonText}>
            Menu
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Cart
      </Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item, index) =>
          item.id + '-' + index
        }
        renderItem={({ item, index }) => (

          <View style={styles.item}>

            <View>
              <Text style={styles.foodName}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                R{item.price}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeFromCart(index)}
            >
              <Text style={styles.removeText}>
                Remove
              </Text>
            </TouchableOpacity>

          </View>

        )}
      />

      <Text style={styles.total}>
        Total: R{totalCost}
      </Text>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('User Details')}
      >
        <Text style={styles.checkoutText}>
          User Details
        </Text>
      </TouchableOpacity>

    </View>
  );
}

