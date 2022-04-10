-- Script to create the database initially:
-- sqlite3 backtrack.db
-- .read backtrack.sql

CREATE TABLE alerts(
	status INT DEFAULT 1, -- 0 = Disarmed, 1 = Armed, 2 = User contacted, 3 = Emergency contact contacted
	user_phone VARCHAR(16) NOT NULL,
	contact_phone VARCHAR(16) NOT NULL,
	alert_time TIMESTAMP NOT NULL, -- Time to contact the emergency contact
	check_time TIMESTAMP DEFAULT NULL, -- Time to contact the user
	alert_message TEXT DEFAULT "No additional information was provided.", -- Message from user for emergency contact
	-- For automatic disarming
	lat DOUBLE DEFAULT NULL,
	lon DOUBLE DEFAULT NULL,
	radius DOUBLE DEFAULT NULL,
	-- For automatic arming (bit flags per day of week)
	weekdays INT DEFAULT NULL
);

-- Example row:
-- INSERT INTO alerts (user_phone, contact_phone, alert_time, check_time) VALUES (1234567890, 0987654321, '2022-04-09 23:00', '2022-04-09 22:50');