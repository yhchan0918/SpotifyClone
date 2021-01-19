export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  'Your Library': undefined;
  Premium: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album = {
  id: string;
  name: string;
  by: string;
  numOfLikes: number;
  imageUri: string;
  artistHeadline: string;
};

export type Song = {
  id: string;
  uri: string;
  imageUri: string;
  title: string;
  artist: string;
};
