import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { API, graphqlOperation } from 'aws-amplify';

import { getAlbum } from '../graphql/queries';
import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';

const AlbumScreen = () => {
  const route = useRoute();
  const albumId = route.params.id;
  const [album, setAlbum] = useState(null);
  const fetchAlbum = async () => {
    try {
      const data = await API.graphql(
        graphqlOperation(getAlbum, { id: albumId })
      );
      setAlbum(data.data.getAlbum);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAlbum();
  }, []);

  if (!album) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={album.songs.items}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={album} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default AlbumScreen;
