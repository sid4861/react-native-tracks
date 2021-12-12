import React from "react";
import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import trackerApi from "../api/tracker";
import { navigate } from "../utils/navigationRef";

function authReducer(state, action) {
    switch (action.type) {
        case 'signup':
            return { ...state, token: action.payload.token, errorMessage: "" }
        case "signup_error":
            return { ...state, errorMessage: action.payload.errorMessage, token: null }
        case 'signin':
            return { ...state, token: action.payload.token, errorMessage: "" }
        case "signin_error":
            return { ...state, errorMessage: action.payload.errorMessage, token: null }
        case "error_clear":
            return { ...state, errorMessage: "" }
        case "signout":
            return { ...state, token: null }
        default:
            return state;
    }
}

function signUp(dispatch) {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data.token);
            AsyncStorage.setItem("token", response.data.token);
            dispatch({ type: "signup", payload: { token: response.data.token } });
            navigate('TrackList');
        } catch (err) {
            console.log(err);
            dispatch({ type: "signup_error", payload: { errorMessage: "Please check email/password" } });
        }
    }
}

function signIn(dispatch) {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signin', { email, password });
            console.log(response.data.token);
            AsyncStorage.setItem("token", response.data.token);
            dispatch({ type: "signin", payload: { token: response.data.token } });
            navigate('TrackList');
        } catch (err) {
            console.log(err);
            dispatch({ type: "signin_error", payload: { errorMessage: "Please check email/password" } });
        }
    }
}

function clearErrorMessage(dispatch) {
    return () => {
        dispatch({ type: "error_clear" });
    }
}
function signOut(dispatch) {
    return async () => {
        await AsyncStorage.removeItem("token");
        dispatch({ type: "signout" });
        navigate("loginFlow");
    }
}

function tryLocalSignin(dispatch) {
    return async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                dispatch({ type: "signin", payload: { token: token } });
                navigate('TrackList');
            }
        } catch (err) {
            navigate('Signin');
        }
    }
}

export const { Context, Provider } = createDataContext(authReducer, { signUp, signIn, signOut, clearErrorMessage, tryLocalSignin }, { token: null, errorMessage: "" })