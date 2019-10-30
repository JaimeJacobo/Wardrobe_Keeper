

const mongoose = require('mongoose');
const chalk    = require('chalk');
const express  = require('express');
const hbs      = require('hbs')
const path     = require('path')

const app = express()
const port = process.env.PORT || 2222

app.use(express.json())

//Este comando nos indica que utilizaremos hbs como nuestro motor de vistas
app.set('view engine', 'hbs');
//Este comando le indica a la app que utilice la carpeta de public en estático
app.use(express.static(path.join(__dirname, './templates/public')));
//Este comando le indica a la app dónde está la carpeta de views
app.set('views', path.join(__dirname, './templates/views'));
//Este comando le indica a la app dónde está la carpeta de los partials
hbs.registerPartials(path.join(__dirname, './templates/partials'))

app.get('/', (req, res)=>{
  res.render("index")
})

app.listen(port, ()=>{console.log(chalk.green.inverse("Server is up and running"))})