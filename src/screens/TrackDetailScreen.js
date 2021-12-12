import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function TrackDetailScreen({ navigation }) {

    const _id = navigation.getParam("_id");

    return (
        <>
            <Text style={{ marginTop: 40, fontSize: 40 }} >TrackDetailScreen</Text>
        </>
    );
}

const styles = StyleSheet.create({});