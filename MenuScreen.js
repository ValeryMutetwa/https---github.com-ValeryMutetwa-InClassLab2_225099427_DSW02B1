import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert
} from 'react-native';

const foodItems = [
  {
    id: '01',
    name: 'Waygu Burger',
    price: 150,
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=JTRHbbdb&id=4744D96CAE928B586719A05AFBFCF3A95B79C557&thid=OIP.JTRHbbdbp4ZRnMbG3M1DSwHaHa&mediaurl=https%3a%2f%2flabelrecipes.com%2fwp-content%2fuploads%2f2025%2f03%2fu6966556431_big_juicy_Wagyu_burger_recipe_-v_6.1_0f85a798-5aa0-48a3-a635-708af1b02330_2.webp&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2534476db75ba786519cc6c6dccd434b%3frik%3dV8V5W6nz%252fPtaoA%26pid%3dImgRaw%26r%3d0&exph=1024&expw=1024&q=picture+of+waygu+burger&mode=overlay&FORM=IQFRBA&ck=8F91F6661242B8AA35653F2DE4331D4D&selectedIndex=0&idpp=serp'
  },
  {
    id: '02',
    name: 'Pizza',
    price: 180,
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=0jTh6fU2&id=70CFC28F03931B61A47900BE3C9703A4BC76B948&thid=OIP.0jTh6fU2iluDkhftY6yu3AHaEK&mediaurl=https%3a%2f%2fcdn.pixabay.com%2fphoto%2f2024%2f04%2f23%2f09%2f32%2fai-generated-8714517_1280.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d234e1e9f5368a5b839217ed63acaedc%3frik%3dSLl2vKQDlzy%252bAA%26pid%3dImgRaw%26r%3d0&exph=720&expw=1280&q=picture+of+pizza&mode=overlay&FORM=IQFRBA&ck=D22FD019E5A03F4DC5AD740D9F2CC082&selectedIndex=0&idpp=serp'
  },
  {
    id: '03',
    name: 'Fried Chicken',
    price: 120,
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=Kh2BzNbC&id=BEF8B9B6FF5203EFCF226845E6E0C9E623D76001&thid=OIP.Kh2BzNbCXEnTSW_yp_nIGAHaLG&mediaurl=https%3a%2f%2fwww.fromvalerieskitchen.com%2fwordpress%2fwp-content%2fuploads%2f2022%2f01%2fWhole-Roasted-Chicken-crop-27.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2a1d81ccd6c25c49d3496ff2a7f9c818%3frik%3dAWDXI%252bbJ4OZFaA%26pid%3dImgRaw%26r%3d0&exph=1798&expw=1200&q=picture+of+roast+chicken&mode=overlay&FORM=IQFRBA&ck=5923D13A5B746563B84E39DBAD6E4D0D&selectedIndex=0&idpp=serp'
  },
  {
    id: '04',
    name: 'Chips',
    price: 50,
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=S3XSeXuE&id=DB112EA82EEB5D09D341867A8931A613D66DDB87&thid=OIP.S3XSeXuESnrSJB72KpOlUwHaJQ&mediaurl=https%3a%2f%2fwww.deliciousmagazine.co.uk%2fwp-content%2fuploads%2f2018%2f09%2f593253-1-eng-GB_oven-roasted-chips.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4b75d2797b844a7ad2241ef62a93a553%3frik%3dh9tt1hOmMYl6hg%26pid%3dImgRaw%26r%3d0&exph=960&expw=768&q=picture+of+roast+chips&mode=overlay&FORM=IQFRBA&ck=B27AB82A5E55B5B96475D5D91A5B1FD6&selectedIndex=0&idpp=serp'
  }
];

export default function MenuScreen({ navigation, cartItems, setCartItems }) {

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);

    Alert.alert(
      'You have added an item to your Cart'
      `${item.name} has been added to your cart.`
    );
  };

  const renderFoodItem = ({ item }) => (
    <View style={styles.card}>

      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <Text style={styles.foodName}>
        {item.name}
      </Text>

      <Text style={styles.price}>
        R{item.price}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => addToCart(item)}
      >
        <Text style={styles.buttonText}>
          Add to Cart
        </Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
     Food Delivery
      </Text>

      <FlatList
        data={foodItems}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.cartButtonText}>
         Go to Cart ({cartItems.length})
        </Text>
      </TouchableOpacity>

    </View>
  );
}

