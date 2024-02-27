import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    // pressed는 이 스타일 값을 함수로 바꾸었을 때 얻는 프로퍼티
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
