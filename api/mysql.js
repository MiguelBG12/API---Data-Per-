const mysql = require("mysql2")

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "usuarios"
})

conection.connect((err) => {
    if(err) throw err
    console.log("La conexion funciona")
})

conection.query("SELECT * FROM users", (err, rows) => {
    if(err) throw err
    console.log("Los datos de la tabla son estos: ")
    console.log(rows)
})

conection.end();