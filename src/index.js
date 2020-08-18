const express = require('express');

// Muestra los datos en el servidor en servidor antes de ejecutarse
const morgan = require('morgan');

// Reinicia el servidor automaticamente
const nodemon = require('nodemon')

const app = express()

/////////////////////////////////////////
// Settings
// Crea la variable para el numero de puerto
// Si existe un puerto establecido en la nube lo toma si no el 3000
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
/////////////////////////////////////////

/////////////////////////////////////////
// Middleware:

//Nos permite visualizar datos en la termial
app.use(morgan('dev'))

// Permite resibir datos de html de los inputs
app.use(express.urlencoded({extended: false}))

// Nos permite transformar los datos en formato json para el consumo
app.use(express.json())
/////////////////////////////////////////

/////////////////////////////////////////
// Routes
app.use(require('./routes/index'))
app.use('/api/movies', require('./routes/movies'))
app.use('/api/users', require('./routes/users'))

/////////////////////////////////////////
// start in the server
app.listen(3000, () => {
	console.log(`Server on port ${app.set('port')}`)
})