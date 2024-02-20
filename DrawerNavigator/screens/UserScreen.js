import { StyleSheet, Text, View, Button } from 'react-native';

const UserScreen = ({ route, navigation }) => {
  function openDrawerHandler() {
    // route / navigation props
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title='Open Drawer' onPress={openDrawerHandler} />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
