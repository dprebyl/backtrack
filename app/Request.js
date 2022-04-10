
export const createAlert = async (userPhone,contactPhone,alertTime,alertMessage) => {
    let alert = {
        user_phone: userPhone,
        contact_phone: contactPhone,
        alert_time: alertTime,
        alert_message: alertMessage
    }
    
    fetch("http://10.104.14.178:3000/add-alert", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(alert)
    });
    console.log("\n\n\n\n\nSending:",alert);
}

export const getAlerts = async (userPhone) => {
    let phoneNumber = encodeURIComponent(userPhone)
    let url = "http://10.104.14.178:3000/get-alerts?user_phone=" + phoneNumber
    console.log(phoneNumber)
    console.log(url)
    let alerts = []

    fetch(url)
        .then(response => response.json())
        .then(alerts => console.log(alerts))
}