const mysql = require("mysql2")

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "$a1b2c3d4.",
    database: "transacciones_sunat"
})

conection.connect((err) => {
    if(err) throw err
    console.log("La conexion funciona")
})

conection.query("ELECT Departamento, SUM(TRANSACCIONES) FROM Transacciones WHERE Departamento = 'LIMA' GROUP BY Departamento;", (err, rows) => {
    if(err) throw err
    console.log("Los datos de la tabla son estos: ")
    console.log(rows)
})

conection.end();