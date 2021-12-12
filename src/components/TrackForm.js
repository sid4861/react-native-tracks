import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../contexts/LocationContext";

export default function TrackForm() {

    const { state: { recording }, startRecording, stopRecording } = useContext(LocationContext);

    return (
        <>
            <Spacer>
                <Input />
            </Spacer>
            <Spacer>
                {
                    recording
                        ?
                        <Button title="stop" onPress={stopRecording} />
                        :
                        <Button title="start recording" onPress={startRecording} />
                }
            </Spacer>
        </>
    );
}