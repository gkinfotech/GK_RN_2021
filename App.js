import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';


/**
 *1. Text=> SafeAreaView - we implemented SafeArea view to prevent the overlap text in top border
 *2. Text=> NumberofLines - we added the NumberofLines props to display the long text in single remaining text is hidden
 *3. Images=> 
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.testStyle}> this is for testing the screen with large line of text to eanble it we need to add the number of lines props to enable to single line</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
  testStyle:{
    fontSize:14,
    padding:5,
    margin:10
  }
});

