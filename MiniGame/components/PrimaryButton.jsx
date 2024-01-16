import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

// Touchable vs Pressable

const PrimaryButton = ({ children, onPress }) => {
  return (
    // Pressable을 View로 감싸주는 구조 변경, ripple 효과 위해
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    // 컨테이너 내부에 일어나는 효과나 스타일링이 컨테이너를 넘어가는 부분은 잘라서 안보이게함.
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,

    paddingVertical: 8,
    paddingHorizontal: 16,

    // Android Shadow
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  //   버튼이 누를떄 활성화 android ripple by ios
  pressed: {
    opacity: 0.75,
  },
});
