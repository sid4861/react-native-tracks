import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../contexts/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

export default function SignupScreen({ navigation }) {

    const { state, signUp, clearErrorMessage } = useContext(AuthContext);


    return (
        <View style={styles.container} >
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                headerText={"Sign up"}
                state={state}
                errorMessage={"Error signing up, please try again"}
                signUp={signUp}
                buttonText={"Sign up"}
            />
            <NavLink
                linkText={"Already have an account ? sign in instead"}
                routeName={"Signin"}
            />

        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 40,
        justifyContent: "center"
    }
});

