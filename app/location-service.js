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

export const isHome = async (homeLong, homeLat, currentLong,currentLat, radius) => {
    try {
        //get current location and compare to home location
        let distanceToHome = haversine(currentLat,currentLong,homeLat,homeLong);
        console.log("distance to home: ",distanceToHome,"radius",radius);
        if(Math.abs(distanceToHome) <= radius ) {
            console.log("returngin true") 
            return true;}
        else {
            console.log("returning false");
            return false;
            
        } 
    } catch (err) {
        console.log(err.message);
    }
}

const toRad = (val) => {
    val = val*Math.PI/180;
}

export const haversine = (lat1, lon1, lat2, lon2) => {
    // distance between latitudes
    // and longitudes
    let dLat = (lat2 - lat1) * Math.PI / 180.0;
    let dLon = (lon2 - lon1) * Math.PI / 180.0;
       
    // convert to radiansa
    lat1 = (lat1) * Math.PI / 180.0;
    lat2 = (lat2) * Math.PI / 180.0;
     
    // apply formulae
    let a = Math.pow(Math.sin(dLat / 2), 2) +
               Math.pow(Math.sin(dLon / 2), 2) *
               Math.cos(lat1) *
               Math.cos(lat2);
    let rad = 6371;
    let c = 2 * Math.asin(Math.sqrt(a));
    return rad * c;
     
}
