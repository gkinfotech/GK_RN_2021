import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 *Flex Direction => Row, Column, Row Reverse, Column Reverse
 * Primary Axis => Parent Container has row (Flex Direction = row)
 * Justify Content => center, flex-end, flex-start, space-around, space-between, space-evenly
 * alignItems => center, baseline, flex-end, flex-start, stretch (Secondary Axis which is vertical direction)
 * alignSelf => It aligns to the individual object
 * flexDirection : 'row' //Horizontal (Primary Axis)
 * justifyContent: 'center' // Main Axis
 * alignItems: 'center' // Secondary Axis
 * If items got overflowed the one or more items get truncated
 * flexWrap: 'wrap'=> to avoid over flow if we use flexwrap the overflowed items place it in next line
 *  Diff between AlignItems and AlignContent
 *  alignItems => determines the alignment of items within each line
 *  alignContent => determines the alignment of the entire content.
 *  alignContent - only works if we have wrapping. if we dont have wrapping it has no side effect
 *  FlexBasis is used to prevalant to set the width value when it is in primary axis(row) or column (we need to se to height)
 *  instead of width value we can set it to FlexBasis for primary axis row
 * instead of height value we can set it to FlexBasis for primary axis column
 * FlexGrow => it will fill objects spcae more when compared to other in the other way we can use flex:1 both having similar ouput but we need to reload in the simulator to see output
 * flexShrink > If any object is overflowing if we want to fit the items we need to use the flexshrink
 *  if we add the flex = -1 is similar to flexshrink
 * obsolute vs relative positioning
 *  top:20, left:20 position:absolute it will move to the top for the individual items and remaining items will automatically repositioned
 */
export default function App() {
    return (
        // Flex Direction = row
        // <View style={styles.container}>
        //     <View style={styles.childContainer} />
        //     <View style={styles.childContainer1} />
        //     <View style={styles.childContainer2} />
        // </View>
        // Align items/jsutify content
        // <View style={styles.container}>
        //     <View style={styles.childContainer} />
        //     <View style={styles.childContainer1} />
        //     <View style={styles.childContainer2} />
        // </View>
        // Align Items and Align content
        // <View style={styles.container}>
        //     <View style={styles.childContainer} />
        //     <View style={styles.childContainer1} />
        //     <View style={styles.childContainer2} />
        //     <View style={styles.childContainer3} />
        //     <View style={styles.childContainer4} />
        // </View>
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
        // flexDirection: 'row',
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        //flexWrap: 'wrap',
    },
    childContainer: {
        //width: 100,
        flexBasis: 100,
        height: 100,
        flexGrow: 1,
        backgroundColor: 'dodgerblue',
        //alignSelf: 'flex-start',
    },
    childContainer1: {
        width: 100,
        height: 100,
        top: 20,
        left: 20,
        position: 'absolute',
        backgroundColor: 'gold',
    },
    childContainer2: {
        width: 100,
        height: 100,
        backgroundColor: 'tomato',
    },
    childContainer3: {
        width: 100,
        height: 100,
        backgroundColor: 'grey',
    },
    childContainer4: {
        width: 100,
        height: 100,
        backgroundColor: 'greenyellow',
    },
});
