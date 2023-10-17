/*
const mysql = require('db/mysql');
const connection = mysql.createConnection({
    host: 'localhost',  // Cambia el host si la base de datos está en otro servidor
    user: 'root',
    password: 'root',
    database: 'database_pruebas',
});
// Establece la conexión a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

// Consulta SQL para recuperar datos

const query = "SELECT Departamento, SUM(TRANSACCIONES) FROM Transacciones WHERE Departamento = 'LIMA' GROUP BY Departamento;";
connection.query(query, (err, results) => {
    if (err) {
        console.error('Error en la consulta:', err);
    } else {
        console.log('Resultados de la consulta:', results);
        // Procesa los resultados o realiza otras operaciones
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const container_dato = document.querySelector("#dato");
    const container_grafico = document.querySelector("#grafico");

    const formulario = `
    <h1>Dato</h1>
    `;
    const grafico = `
    <h1>Grafico</h1>
    `;

    container_dato.innerHTML = formulario;
    container_grafico.innerHTML = grafico;
});

*/
