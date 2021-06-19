import React from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Button,
    Alert,
    Platform,
    StatusBar,
} from 'react-native';
const lion = require('./src/assets/lion.jpeg');

/**
 *1. Text=> SafeAreaView - we implemented SafeArea view to prevent the overlap text in top border
 *2. Text=> NumberofLines - we added the NumberofLines props to display the long text in single remaining text is hidden
 *3. Images=> hooking the lion images from local folder + remote fetch and we used the props fadeDuration, blurRadius
 *4. Touchables=> TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, TouchbleNativeFeedback(Android)
 *5. Alert=> button Press customizise yes or no
 *6. StyleSheet
 *7. PlatformSpecific
 */
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="Gokul"
                color="red"
                onPress={() =>
                    Alert.alert('Gokul', 'Message!', [
                        {
                            text: 'Yes',
                            onPress: () => console.log('Clicked Yes!'),
                        },
                        { text: 'No' },
                    ])
                }
            />
            <Text numberOfLines={1} style={styles.testStyle}>
                {' '}
                this is for testing the screen with large line of text to eanble
                it we need to add the number of lines props to enable to single
                line
            </Text>
            <Image source={lion} style={styles.imageStyle} />
            <Button
                title="Click Me!"
                color="orange"
                onPress={() => console.log('Pressed the Orange Button! ')}
            />
            <TouchableOpacity
                onPress={() => Alert.alert('Image Button Tapped!')}>
                <Image
                    source={{ uri: 'https://picsum.photos/200/300' }}
                    style={styles.imageStyle}
                    blurRadius={0}
                    fadeDuration={500}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dodgerblue',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    testStyle: {
        fontSize: 14,
        padding: 5,
        margin: 10,
    },
    imageStyle: {
        width: '100%',
        height: '50%',
        margin: 10,
        alignItems: 'center',
        alignContent: 'center',
        resizeMode: 'contain',
    },
});
