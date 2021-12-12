import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../contexts/AuthContext";
import { SafeAreaView } from "react-navigation";
export default function AccountScreen() {

    const { signOut } = React.useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: "always" }} >
            <Text style={{ marginTop: 40, fontSize: 40 }} >AccountScreen</Text>
            <Button title="Sign out" onPress={signOut} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});