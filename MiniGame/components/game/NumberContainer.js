import { View, Text, StyleSheet, Dimensions } from 'react-native';
// Dimension API를 사용해 현재 크기의 스냅샷을 구할 수는 있으나 - 코드를 자동으로 업데이트하는 실시간 구독 기능은 존재하지 않습니다.
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

// ios에서 screen, window 차이없음.
// android에서 screen은 상태표시줄을 포함한 너비와 높이, window는 상태 표시줄을 제외한 너비와 높이이다.
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 12 : 36,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});
