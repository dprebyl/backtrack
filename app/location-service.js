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

export const isHome = async (homeLong, homeLat, radius) => {
    try {
        //get current location and compare to home location
        let currentLoc = getLocation();
        let distanceToHome = haversine(currentLoc.coords.latitude,currentLoc.coords.longitude,homeLat,homeLong);
        if(distanceToHome <= radius ) return true;
        else return false;
    } catch (err) {

    }
}

const haversine = (lat1, long1,lat2,long2) => {
    const r = 3485000;
    let d = 2*r*Math.asin(Math.sqrt(Math.pow(Math.sin((lat2-lat1)/2),2) + Math.cos(lat1)*Math.cos(lat2)*Math.pow(Math.sin((long2-long1)/2),2)));
    console.log(d);
    return d;
}