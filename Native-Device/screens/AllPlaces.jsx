import { StyleSheet, Text, View } from 'react-native';
import PlacesList from '../components/Places/PlacesList';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      // route.params.place에서 place를 쓰는 이유는, AddPlace에서 navigate을 쓸 때 place를 전달해주기 떄문이다.
      setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
