
//npm imports
const mongoose   = require('mongoose')
const chalk      = require('chalk')
const express    = require('express')
const hbs        = require('hbs')
const path       = require('path')
const bodyParser = require('body-parser')

//Route imports
const indexRouter           = require('./routes/index')
const looksRouter           = require('./routes/looks/looks-router')
const notFoundRouter        = require('./routes/not-found')
const topComplementRouter   = require('./routes/complements/topComplement-router')
const shirtComplementRouter = require('./routes/complements/shirtComplement-router')
const hoodieComplementRouter = require('./routes/complements/hoodieComplement-router')
const pantsComplementRouter = require('./routes/complements/pantsComplement-router')
const socksComplementRouter = require('./routes/complements/socksComplement-router')
const shoesComplementRouter = require('./routes/complements/shoesComplement-router')
// const lookRouter            = require('./routes/complements/look-router')
const creationCenterRouter  = require('./routes/creationCenter-router')


//Comando para conectarse a la base de datos de Mongo utilizando Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/wardrobe-keeper-api', {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useFindAndModify: false,
  useUnifiedTopology: true 
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
//Este comando indica que se utilice el route ubicado en router --> topComplement-router
app.use(topComplementRouter)
//Este comando indica que se utilice el route ubicado en router --> shirtComplement-router
app.use(shirtComplementRouter)
//Este comando indica que se utilice el route ubicado en router --> hoodieComplement-router
app.use(hoodieComplementRouter)
//Este comando indica que se utilice el route ubicado en router --> pantsComplement-router
app.use(pantsComplementRouter)
//Este comando indica que se utilice el route ubicado en router --> socksComplement-router
app.use(socksComplementRouter)
//Este comando indica que se utilice el route ubicado en router --> shoesComplement-router
app.use(shoesComplementRouter)
//Este comando indica que se utilice el route ubicado en router --> creationCenter-router
app.use(creationCenterRouter)
//Este comando indica que se utilice el route ubicado en router --> not-found
app.use(notFoundRouter)


app.listen(port, ()=>{
  console.log(chalk.green.inverse("Server is up and running"))
})