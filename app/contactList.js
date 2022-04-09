<uses-permission android:name="android.permission.READ_CONTACTS" />
import Contacts from 'react-native-contacts';

const getContacts = function() {
    Contacts.getAll().then(contacts => {
        
    });
}