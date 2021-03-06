import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { Album } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AlbumScreen', { id: props.album.id });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <Image source={{ uri: props.album.imageUri }} style={styles.image} />
          <Text style={styles.headline}>{props.album.artistHeadline}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AlbumComponent;
