import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import { useState } from 'react';

import { Colors } from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissonInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    // 처음 카메라 사용할 떄 권한 부여
    // 두번쨰부터는 이미 권한이 있음. 다시 권한 요청하지 않아도 됨.
    if (cameraPermissonInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      // 권한이 부여되면 true / 거부되면 false인 프로퍼티이다.
      return permissionResponse.granted;
    }

    if (cameraPermissonInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspectRatio: [16, 9],
      quality: 0.5,
    }); // return promise 사용자가 카메라 버튼을 눌러 찍을떄까지, 함수의 실행은 안끝남.
    console.log(image);

    setPickedImage(image.uri);
  };

  let imagePreview = <Text>No Image Taken Yet...</Text>;

  if (pickedImage) {
    // imag를 직접불러올때만 require 사용
    imagePreview = <Image source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon='camera' onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
