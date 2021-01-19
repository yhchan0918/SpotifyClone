import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { API, graphqlOperation } from 'aws-amplify';

import { listAlbumCategorys } from '../graphql/queries';
import AlbumCategory from '../components/AlbumCategory';

export default function HomeScreen() {
  const [albumCategories, setAlbumCategories] = useState([]);
  const fetchAlbumCategories = async () => {
    try {
      const data = await API.graphql(graphqlOperation(listAlbumCategorys));
      setAlbumCategories(data.data.listAlbumCategorys.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbumCategories();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums.items} />
        )}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
