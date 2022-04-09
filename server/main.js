const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const path = require("path");

const twilio_credentials = JSON.parse(fs.readFileSync("twilio_credentials.json"));
const twilio = require("twilio")(twilio_credentials.account_sid, twilio_credentials.auth_token);


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let counter = 0;
setInterval(() => counter++, 1000);

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/counter", (req, res) => {
	res.send(`The counter is ${counter}`);
});

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

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});