import React, { useContext } from "react";
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../contexts/TrackContext";

export default function TrackListScreen({ navigation }) {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate("TrackDetail", { _id: item._id })} >
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>}
            />
        </>
    );
}

const styles = StyleSheet.create({});