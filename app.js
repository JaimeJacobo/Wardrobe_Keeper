
//npm imports
const mongoose   = require('mongoose')
const chalk      = require('chalk')
const express    = require('express')
const hbs        = require('hbs')
const path       = require('path')
const bodyParser = require('body-parser')
const multer     = require('multer')

//Route imports
const indexRouter         = require('./routes/index')
const looksRouter         = require('./routes/looks-router')
const notFoundRouter      = require('./routes/not-found')
const topComplementRouter = require('./routes/topComplement-router')

//Comando para conectarse a la base de datos de Mongo utilizando Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/wardrobe-keeper-api', {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useFindAndModify: false
})
.then((data)=>{
  console.log(chalk.green('Connected to Mongo! Database name: ' + data.connections[0].name))
})
.catch((e)=>{
  console.log(chalk.red.inverse('Error connecting to mongo', e))
})

const app = express()
const port = process.env.PORT || 3000

//Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json())

//Este comando nos indica que utilizaremos hbs como nuestro motor de vistas
app.set('view engine', 'hbs');
//Este comando le indica a la app que utilice la carpeta de public en estático
app.use(express.static(path.join(__dirname, './public')));
//Este comando le indica a la app dónde está la carpeta de views
app.set('views', path.join(__dirname, './templates/views'));


//Este comando indica que se utilice el route ubicado en routes --> index.js
app.use(indexRouter)
//Este comando indica que se utilice el route ubicado en routes --> looks-router
app.use(looksRouter)
//Este comando indica que se utilice el route ubicado en router --> not-found
app.use(notFoundRouter)
app.use(topComplementRouter)


app.listen(port, ()=>{
  console.log(chalk.green.inverse("Server is up and running"))
})