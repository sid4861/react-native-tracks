import { useContext } from "react";
import { Context as TrackContext } from "../contexts/TrackContext";
import { Context as LocationContext } from "../contexts/LocationContext";

export default () => {

    const { createTrack } = useContext(TrackContext);
    const { state: { name, locations } } = useContext(LocationContext);

    const saveTrack = () => {
        createTrack(name, locations);
    }

    return [saveTrack];F

}