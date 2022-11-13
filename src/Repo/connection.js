import mysql from "mysql2/promise";
import fs from "fs"

const con = await mysql.createConnection({
	host: "us-cdbr-east-06.cleardb.net",
	user: "b0ede638fc1920",
	password: "3dee67fa",
	database: "heroku_f569236ee4e3c79",
	ssl: {
		cert: fs.readFileSync('./rds-ca-2019-root.pem')
	  }
});
export { con };
