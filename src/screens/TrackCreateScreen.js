import React, { useContext, useCallback } from "react";
import { View, StyleSheet, Text } from "react-native";
import Map from "../components/Map";
import "../_mockLocation";
import { Context as LocationContext } from "../contexts/LocationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";

function TrackCreateScreen({ isFocussed }) {

    const { state, addLocation } = useContext(LocationContext);
    const callBack = useCallback((location) => {
        addLocation(location, state.recording);
    }, [state.recording]);
    const [err] = useLocation(isFocussed || state.recording, callBack);

    return (
        <>
            <Map />
            <Text style={{ marginTop: 40, fontSize: 40 }} >TrackCreateScreen</Text>
            {err ? <Text>Please allow location access</Text> : null}
            <TrackForm />
        </>
    );
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);