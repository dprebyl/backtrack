const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const path = require("path");
const sqlite = require("better-sqlite3");

// Twilio setup (for SMS/phone calls)
const twilio_credentials = JSON.parse(fs.readFileSync("twilio_credentials.json"));
const twilio = require("twilio")(twilio_credentials.account_sid, twilio_credentials.auth_token);

// Database setup (for storing contacts/times)
const db = new sqlite(path.resolve("backtrack.db"));
function db_query(sql, params = []) {
	let firstWord = sql.toUpperCase().trim().split(" ")[0];
	if (firstWord == "SELECT") {
		return db.prepare(sql).all(params);
	}
	else { // INSERT, UPDATE, DELETE
		db.prepare(sql).run(params);
	}
}
const db_date = d => d.toISOString().slice(0, 19).replace('T', ' ');

// Express app setup (the server)
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Test homepage
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/index.html"));
});

// Test selecting all rows in database
app.get("/select", (req, res) => {
	res.send(db_query("SELECT * FROM alerts"));
});

// Test counter
let counter = 0;
setInterval(() => counter++, 1000);
app.get("/counter", (req, res) => {
	res.send(`The counter is ${counter}`);
});

// Test sending a text message
app.post("/text", (req, res) => {
	console.log(req.body);
	let num = req.body.num;
	let msg = req.body.msg;
	
	twilio.messages.create({
		body: msg,
		from: twilio_credentials.phone_number,
		to: num
	}).then(message => console.log(message.sid()));
	
	res.send(`Texting "${msg}" to ${num}. <a href="/">Back</a>`);
});

// App endpoint to retur a list all alerts set up by this user
app.get("/get-alerts", (req, res) => {
	console.log("Get alerts", req.query);
	res.send(db_query("SELECT * FROM alerts WHERE user_phone = ?", [req.query.user_phone]));
});

// App endpoint to add a new alert
app.post("/add-alert", (req, res) => {
	console.log("Add alert", req.body);
	db_query("INSERT INTO alerts (user_phone, contact_phone, alert_time, alert_message) VALUES (?, ?, ?, ?)",
		[req.body.user_phone, req.body.contact_phone, req.body.alert_time, req.body.alert_message]);
});

// App endpoint to remove an existing alert
app.post("/clear-alert", (req, res) => {
	console.log("Delete alert", req.body);
	db_query("DELETE FROM alerts WHERE user_phone = ? AND alert_time = ?",
		[req.body.user_phone, req.body.alert_time]);
});

// Periodically check for alerts to send out
setInterval(() => {
	let now = db_date(new Date()); // Appears to be in UTC
	console.log(now);
	// Users to contact
	let alerts = db_query("SELECT user_phone, check_time FROM alerts WHERE status = 1 AND check_time < ?", [now]);
	for (let alert of alerts) {
		console.log("user phone", alert);
		// TODO twilio
	}
	
	// Emergency contacts to contact
	alerts = db_query("SELECT alert_message, contact_phone FROM alerts WHERE status BETWEEN 1 AND 2 AND alert_time < ?", [now]);
	for (let alert of alerts) {
		console.log("contact phone", alert);
		// TODO twilio
	}
}, 60*1000);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});