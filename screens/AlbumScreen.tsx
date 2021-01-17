import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';

import albumDetails from '../data/albumDetails';

const AlbumScreen = () => {
  const route = useRoute();
  useEffect(() => {}, []);

  return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    </View>
  );
};

export default AlbumScreen;
