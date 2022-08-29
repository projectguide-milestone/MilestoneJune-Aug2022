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
    database: 'news_db'
});

app.post('/create', (req, res) => {
    const id = req.body.id;
    const category = req.body.category;
    const title = req.body.title;
    const description = req.body.description;

    db.query('INSERT INTO news_table (news_id,news_category,title,news_description) VALUES (?,?,?,?)',
    [id,category,title,description], 
    (err, result) => {
        if (err){
            console.log(err);
        } else {
            res.send("News inserted");
        }
    }
    );
});

app.get('/getnews', (req, res) => {
    db.query('SELECT * FROM news_table', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.put('/update', (req, res) => {
    const category = req.body.category;
    const id = req.body.id;

    db.query('UPDATE news_table SET news_category = ? Where news_id = ?',
    [category,id],
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
    db.query('DELETE FROM news_table WHERE news_id=?', id,
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