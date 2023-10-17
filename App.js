import React from 'react';
// import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Routing from './src/screen/Routing';

import {store, persistor} from './src/utils/reducers/store';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {createRoot} from 'react-dom/client';
const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle={'dark-content'} />
          <Routing />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
