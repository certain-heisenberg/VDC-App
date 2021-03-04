import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';

import styles from './styles';
import poster from './poster';
import PosterItem from '../Poster/index';

const PosterList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={poster}
                renderItem={({ item }) => <PosterItem poster={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsScrollIndicator={false}
            />
        </View>
    );
}

export default PosterList;
