const express = require('express')
const app = express()

let data = {
    "integrantes":[
        {'nome': 'Gabriel Ache de Souza'},
        {'nome': 'Matheus Marques dos Reis'},
        {'nome': 'Victor Piva'}
    ]
};

app.get('/',(req, res)=>{
    res.sendFile('views/index.html', {root:__dirname})
})

app.get('/integrantes', (req, res) => {
    res.json(data)
    })

app.listen(3000,()=> {
    console.log('listening on : 3000');
});