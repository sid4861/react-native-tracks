import createDataContext from "./createDataContext";


const locationReducer = (state, action) => {
    switch (action.type) {
        case "add_current_location":
            return { ...state, currentLocation: action.payload }
        case "start_recording":
            return { ...state, recording: true }
        case "stop_recording":
            return { ...state, recording: false }
        case "change_name":
            return { ...state, name: action.payload }
        case "add_location":
            return { ...state, locations: [...state.location, action.payload] }
        case "reset":
            return { ...state, currentLocation: null, name: "", recording: false, locations: [] }
        default:
            return state;
    }
}

const changeName = (dispatch) => {
    return (name) => {
        dispatch({ type: "change_name", payload: name });
    }
}
const startRecording = (dispatch) => {
    return () => {
        dispatch({ type: "start_recording" });
    };
}
const stopRecording = (dispatch) => {
    return () => {
        dispatch({ type: "stop_recording" });
    };
}

const reset = (dispatch) => {
    return () => {
        dispatch({ type: "reset" })
    }
}
const addLocation = (dispatch) => {
    return (location, recording) => {
        dispatch({ type: "add_current_location", payload: location });
        if (recording) {
            dispatch({ type: "add_location", payload: location })
        }
    }
};


export const { Context, Provider } = createDataContext(locationReducer, {
    startRecording,
    stopRecording,
    addLocation,
    reset,
    changeName
}, {
    name: "",
    currentLocation: null,
    locations: [],
    recording: false
})