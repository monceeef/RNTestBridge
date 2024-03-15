/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';
import TestConnectNative from './src/TestConnectNative/TestConnectNative';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(props): React.JSX.Element {
  const {message_from_native} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={{marginBottom: 12, fontSize: 24, textAlign: 'center'}}>
        Your address
      </Text>
      <Text style={{marginBottom: 12, fontSize: 16, textAlign: 'center'}}>
        {message_from_native}
      </Text>
      <Button
        title="Back to Native with TX: OK"
        onPress={() => {
          TestConnectNative.goToNative(1, 'TX OK');
        }}
      />
      <Button
        title="Back to Native with TX: Failed"
        onPress={() => {
          TestConnectNative.goToNative(1, 'TX Failed');
        }}
      />
      <Button
        title="Exit RN"
        onPress={() => {
          TestConnectNative.exitRN(1);
        }}
      />
      <WebView
        source={{uri: 'https://pancakeswap.finance/swap?chain=lineaTestnet '}}
        style={{flex: 1}}
      />
      {/* */}
    </SafeAreaView>
  );
}

export default App;
