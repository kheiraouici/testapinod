/**initier express */
const express = require('express')
/**creer execution du serveur express */
const app = express()
/**creer le port localhost */
const port = 4000

/**on va utliser serveur express */
app.use(express.json());

/**compte users */
const users= [
    {id:1 , name:'john doe'},
    {id:2 , name :'jane smith'},
    
];

/**Rendu dans le navigateur via le chargement du template index.html à l'adresse  http://localhost:4000/ */
const path = require('path');


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));

});
/**voir routage */
app.get('/api/users', (req, res)=>{

    res.json(users);

})

/**voir serveur */
app.listen(port , ()=>{
    console.log("serveur is running");
})