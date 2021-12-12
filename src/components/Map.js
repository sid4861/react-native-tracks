import React, { useContext } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../contexts/LocationContext";

export default function Map() {

    const { state: { currentLocation, locations } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    return (
        <View>
            <MapView
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                region={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Circle
                    center={currentLocation.coords}
                    strokeColor="rgba(158, 158, 255, 1.0)"
                    fillColor="rgba(158, 158, 255, 0.3)"
                />
                <PolyLine coordinates={locations.map(loc => loc.coords)} />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({});