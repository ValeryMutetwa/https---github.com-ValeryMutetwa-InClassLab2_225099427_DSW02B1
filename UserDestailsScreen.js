import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,Alert,StyleSheet} from 'react-native';

export default function UserDetailsScreen() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const submitOrder = () => {

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === ''
    ) {
      Alert.alert(
        'There is missing information',
        'Please fill in all required fields.'
      );

      return;
    }

    Alert.alert(
      'Order Submitted',
      `Thank you ${name} .Your order has been received.`
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        User Details
      </Text>

      <Text style={styles.label}>
        Name
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>
        Email
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>
        Phone Number
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={submitOrder}
      >
        <Text style={styles.buttonText}>
          Submit Order
        </Text>
      </TouchableOpacity>

    </View>
  );
}

