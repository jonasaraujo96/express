const mongoose = require('mongoose');

module.exports=function(uri) {
        mongoose.connect(uri, {useNewUrlParser: true});
}

mongoose.connection.on('conected', function() {
    console.log('Mongoose! conectado a ' + uri);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose! desconectado de ' + uri);
});

mongoose.connection.on('error', function(erro) {
    console.log('Mongoose! ERRO: ' + erro);
});