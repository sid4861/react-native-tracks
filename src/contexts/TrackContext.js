import createDataContext from "./createDataContext";
import tracketApi from "../api/tracker";

const trackReducer = (state, action) => {
    switch (action.type) {
        case "fetch_tracks":
            return action.payload;
        default:
            return state;
    }
}

const fetchTracks = (dispatch) => {
    return () => {
        const response = await tracketApi.get('/tracks');
        dispatch({ type: "fetch_tracks", payload: response.data });
    }
}

const createTrack = (dispatch) => {

    return async (name, locations) => {
        await tracketApi.post('/tracks', { name, locations })
    }
}

export const { Context, Provider } = createDataContext(trackReducer, { fetchTracks, createTrack }, []);