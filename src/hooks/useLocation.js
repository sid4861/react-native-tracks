import React from "react";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";

export default (shouldTrack, callback) => {
    const [err, setErr] = React.useState(null);

    React.useEffect(() => {

        let subscriber;
        const startWatching = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                if (!granted) {
                    throw new Error('Location permission not granted');
                }

                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, callback);
            } catch (e) {
                setErr(e);
            }
        };


        if (shouldTrack) {
            startWatching();
        } else {
            subscriber.remove();
            subscriber = null;
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback]);

    return [err];

}