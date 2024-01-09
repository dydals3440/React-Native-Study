import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (text) => {
    setCourseGoals((prev) => [
      ...prev,
      { text: text, key: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = () => {
    return console.log('delete');
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          // FlatList가 함수를 호출할 떄 제공되는 값 렌더링 되는목록마다 이 함수 호출
          keyExtractor={(item, index) => {
            // 모든 항목에서 키를 가져오라고 호출하는 함수.
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

// 전체 코드 파일이 파싱된 후에 실행되기 떄문에, 아래에 스타일속성이 있어도 실행이 되는이유!
// StyleSheet 오브젝트를 쓰면, 키값도 알려주고, 에러도 잡아줘서 유용!
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 10,
    // 전체 높이를 지정해줘야, 자식이 flex를 사용할 수 있음
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding: 8,
    margin: 8,
    borderRadius: 10,

    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
