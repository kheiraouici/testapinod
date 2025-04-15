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
/**installer le routage pour voir */
app.get('/api/users', (req, res)=>{
    res.json(users);
})
/**deuxieme pages routage */
app.get('/api/users/:id', (req, res)=>{
    const user = users.find(u =>u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('user not found');
    res.json(user);
})
/**ajout nouvel id */
app.post('/api/users',(req , res)=>{
    const {name} = req.body
    const newUser ={
        id: users.lenght + 1,
        name
    };
    users.push(newUser)
    res.status(201).json(newUser);
})
/**supprimert un id */
app.delete('/api/users/:id', (req , res)=>{
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('user not found');
    users.splice(userIndex, 1);
    res.status(204).send();
})

/**voir serveur */
app.listen(port , ()=>{
    console.log("serveur is running");
})