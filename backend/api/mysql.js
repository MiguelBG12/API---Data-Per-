const mysql = require("mysql2/promise");
//import mysql from 'mysql2/promise';

async function getData() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "MYSQL$q1w2e3r4.",
        database: "transacciones_sunat"
    });
    
    query = "SELECT Departamento, Provincia, SUM(TRANSACCIONES) FROM Transacciones WHERE Departamento = ? GROUP BY Departamento, Provincia;";
    // connection.connect((err) => {
    //     if(err) throw err
    //     console.log("La conexion funciona")
    // });
    
    // connection.query(query, (err, rows) => {
    //     if(err) throw err
    //     console.log("Los datos de la tabla son estos: ")
    //     console.log(rows)
    // });
    
    // connection.end();
    const [rows, fields] = await connection.execute(query, ['LIMA']);

    return { rows: rows, fields: fields };
}

module.exports = { getData };