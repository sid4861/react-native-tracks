import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

export default function AuthForm({ headerText, state, errorMessage, signUp, buttonText }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Spacer>
                <Text h1 > {headerText} </Text>
            </Spacer>
            <Spacer>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Email"
                    onChangeText={setEmail}
                />
            </Spacer>
            <Spacer>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
            </Spacer>
            {
                state.errorMessage
                    ?
                    <Spacer>
                        <Text style={styles.error} >{errorMessage}</Text>
                    </Spacer>
                    :
                    null
            }
            <Spacer>
                <Button title={`${buttonText}`} onPress={() => signUp({ email, password })} />
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    error: {
        color: "red",
        marginLeft: 16
    }
});