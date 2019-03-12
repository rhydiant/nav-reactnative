/* eslint-disable react/prefer-stateless-function */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import store from '../redux/store';
import Master from './Master';
import Detail from './Detail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const StackNavigator = createStackNavigator(
  {
    Master,
    Detail,
  },
  { initialRouteName: 'Master' },
);

const AppContainer = createAppContainer(StackNavigator);

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
          <View style={styles.container}>
            <AppContainer />
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
