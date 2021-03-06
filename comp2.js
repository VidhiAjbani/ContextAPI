import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

export default function Comp2({ count }) {
    return (
        <View style={styles.container}>
            <Text>Component 2</Text>
            <StatusBar style="auto" />
            <Text style={count > 7 ? { color: "green" } : { color: "blue" }}>
                {count}
            </Text>

        </View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
