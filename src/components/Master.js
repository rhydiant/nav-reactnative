/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  View, Button, FlatList, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    flex: 1,
    padding: 16,
  },
});

type Props = {
  navigation: any,
};

export default class Master extends React.Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={[{ key: 'Users' }]}
          renderItem={({ item }) => (
            <Button
              title={item.key}
              onPress={() => {
                navigation.navigate('Detail');
              }}
            />
          )}
        />
      </View>
    );
  }
}
