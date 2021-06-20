import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.childContainer} />
            <View style={styles.childContainer1} />
            <View style={styles.childContainer2} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    childContainer: {
        flex: 1,
        backgroundColor: 'dodgerblue',
    },
    childContainer1: {
        flex: 1,
        backgroundColor: 'gold',
    },
    childContainer2: {
        flex: 1,
        backgroundColor: 'tomato',
    },
});
