import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../contexts/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";


export default function SigninScreen({ navigation }) {

    const { state, signIn, clearErrorMessage } = useContext(AuthContext);


    return (
        <View style={styles.container} >
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                headerText={"Sign in"}
                state={state}
                errorMessage={"Error signing in, please try again"}
                signUp={signIn}
                buttonText={"Sign in"}
            />
            <NavLink
                linkText={"Don't have an account ? sign up instead"}
                routeName={"Signup"}
            />

        </View>
    );
}

SigninScreen.navigationOptions = () => {
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

