import * as Location from 'expo-location';

export const getLocation = async () => {
    let permission = await Location.requestForegroundPermissionsAsync();
    switch(permission.status) {
        case 'granted':
            let location = await Location.getCurrentPositionAsync({});
            //to get lat, long: location.coords.latitude
            return location;
        case 'denied':
            console.log("Foreground Location Permission Denied");
            //add message
            break;
        default: //undetermined
            console.log("Foregound LocationPermission Undetermined");
            //add message
    }
}