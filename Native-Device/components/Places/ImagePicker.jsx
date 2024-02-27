import { StyleSheet, Text, View, Button } from 'react-native';
import { launchCameraAsync } from 'expo-image-picker';

const ImagePicker = () => {
  const takeImageHandler = async () => {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspectRatio: [16, 9],
      quality: 0.5,
    }); // return promise 사용자가 카메라 버튼을 눌러 찍을떄까지, 함수의 실행은 안끝남.
    console.log(image);
  };
  return (
    <View>
      <View>
        <Text>ImagePicker</Text>
      </View>
      <Button title='Take Image' onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
