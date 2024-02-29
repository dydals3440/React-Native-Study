import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  const region = {
    latitude: 37.550165,
    longitude: 127.12752,
    // 지도의 확대/축소 수준을 간접적으로 설정
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} initialRegion={region}></MapView>;
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
