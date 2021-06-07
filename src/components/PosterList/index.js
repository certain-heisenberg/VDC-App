import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, SafeAreaView } from 'react-native';

import styles from './styles';
import poster from './poster';
import PosterItem from '../Poster/index';

import { useNavigation } from '@react-navigation/native';
import Header from '../Header/index';

const PosterList = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <FlatList
                data={poster}
                renderItem={({ item }) => <PosterItem poster={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

export default PosterList;
