import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

import styles from './styles';
import Button from '../Button/index';

import { useNavigation } from '@react-navigation/native';

const PosterItem = (props) => {
  const { image, name, tagLine } = props.poster;

  const navigation = useNavigation();

  return (
    <View style={styles.posterContainer}>
      <ImageBackground style={styles.image} source={image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagLine}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button type='primary' content={'Get Started'}
          onPress={() => navigation.navigate('Welcome Screen')}
        />

        {/* <Button type='secondary' content={'Register'}
          onPress={() => { console.warn("Register Pressed") }} /> */}
      </View>
    </View>
  );
};

export default PosterItem;