const mongoose = require('mongoose')
//const url = 'mongodb://localhost:27017/test'
const url = "mongodb://mongo/tienda_generica" //Uso de contenedor de mongo

mongoose.connect(url,{
  useNewUrlParser: true,
  useUniFiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar a MongoDB'))
db.once('open', function callback(){
  console.log('Conexión exitosa a MongoDB')
})

module.exports = db