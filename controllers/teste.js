module.exports = function() {
    let controller = {};
    controller.teste = function(req, res) {
        let json = {
            nome: 'Jonas Araujo',
            idade: 21
        };
        res.send(json);
    }

    return controller;
}