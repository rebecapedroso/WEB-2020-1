var mongoose = require('mongoose'); //importando mongoose

//Criando a coleção(suas regras)
var DisciplinaSchema = mongoose.Schema(
    {
        nome: {type: String, required: true, max: 150},
        curso: {type: String, required: true, max: 100},
        capacidade: {type: Number, required: true},
    }
);

//Cria o modelo, dizendo que o esquema criados vai ser a coleção 'disciplinas'
var DisciplinaModel = mongoose.model('disciplinas', DisciplinaSchema);

//Exportando o modelo
module.exports = DisciplinaModel;//required: true
