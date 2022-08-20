const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const saltRounds = 10;

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","PUT","DELETE"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    session({
        key: "userId",
        secret: "somerandomstring",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60,
        },
    })
);

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'client_record'
});

app.post('/create', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const comp = req.body.comp;
    const state = req.body.state;
    const tid = req.body.tid;
    const tstate = req.body.tstate;

    db.query('INSERT INTO client_table (Client_Id,Client_Name,Client_Company,State,Transaction_Status,Transaction_Id) VALUES (?,?,?,?,?,?)',
    [id,name,comp,state,tstate,tid], 
    (err, result) => {
        if (err){
            console.log(err);
        } else {
            res.send("Client record inserted");
        }
    }
    );
});

app.get('/getclient', (req, res) => {
    db.query('SELECT * FROM client_table', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.put('/update', (req, res) => {
    const name = req.body.name;
    const id = req.body.id;

    db.query('UPDATE client_table SET Client_Name = ? Where Client_Id = ?',
    [name,id],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/delete/:id', (req,res) => {
    const id = req.params.id;
    db.query('DELETE FROM client_table WHERE Client_Id=?', id,
    (err,result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.post('/register', (req, res) => {
    const user = req.body.user;
    const pwd = req.body.pwd;

    bcrypt.hash(pwd, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        db.query('INSERT INTO users (Username,Password) VALUES (?,?)',
        [user,hash], 
        (err, result) => {
            if (err){
                console.log(err);
            } else {
                res.send("User Added");
            }
        });
    })  
});

app.get('/login', (req,res) => {
    console.log("getting called")
    if (req.session.user) {
        console.log("user exist");
        res.send({ loggedIn: true, user: req.session.user});
    } else {
        res.send({ loggedIn: false});
    }
});

app.post('/login', (req, res) => {
    const user = req.body.user;
    const pwd = req.body.pwd;
    
    db.query('SELECT * FROM users WHERE Username = ?',
    user, 
    (err, result) => {
        if (err){
            console.log({err: err});
        } 
        if (result.length>0) {
            bcrypt.compare(pwd, result[0].Password, (error, response) =>{
                if(response){
                    req.session.user = result;
                    console.log(req.session.user);
                    res.send(result);
                } else {
                    res.send("Incorrect Username or Password");
                }
            })
        } else {
            res.send("User doesn't exist.");
        }
    }
    );
});

app.listen(3001, () => {
    console.log('Server Running on port 3001!')
})