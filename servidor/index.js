const express = require('express');
const conectarDB = require('./config/db')

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

//Habilitar express.json
app.use(express.json({ extended: true}));

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));

// // Definir la pag principal
// app.get('/', (req, res) => {
//     res.send('Hola Mundo')
// });

// arrancar la app
app.listen(PORT, () => {
 console.log(`El servidor está funcionando en el puerto ${PORT}`);
});



