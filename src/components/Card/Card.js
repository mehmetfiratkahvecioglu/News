import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './Card.style';

const Card = props => {
  return (
    <View style={styles.container}>
      <View style={styles.cardBorder}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardCenter}>{props.text}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert('DİKKAT ' + props.title);
          }}>
          <Text style={styles.buttonText}>{props.buttontext}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
