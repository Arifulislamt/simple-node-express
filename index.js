const express = require('express')
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res ) => {
    res.send("Wow. I am Excited learn Node express automatic restart");
});

const users = [
    {id: 0 , name: 'Shabana', email: 'Shabana@gmail.com', phone: '017111111111'},
    {id: 1 , name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01722222222'},
    {id: 2 , name: 'Shrabonti', email: 'SHrabonti@gmail.com', phone: '01733333333'},
    {id: 3 , name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '017444444444'},
    {id: 4 , name: 'Soniya', email: 'Soniya@gmail.com', phone: '017555555555'},
    {id: 5 , name: 'Susmita', email: 'Susmita@gmail.com', phone: '016666666666'},
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.send(JSON.stringify(newUser));
    res.json(newUser)
})




// app.get('/users', (req, res) => {
//     const search = req.query.search;
//     if(search){
//         const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
//         res.send(searchResult);
//     }
//     else{
//         res.send(users);
//     }
    
// });


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port);
})