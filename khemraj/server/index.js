const express = require('express');
const dotenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');



dotenv.config();
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);


const google = express();
google.use (express.json());


const adv_table = [];

function upsert(array, item) {
    const i = array.findIndex((_item) => _item.email === item.email);
    if (i > -1) array[i] = item;
    else array.push(item);
}

app.post('/api/google-login', async (req, res) => {

    const { token } = req.body;
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
    });
    const { name, email, picture } = ticket.getPayload();
    upsert(user, {name, email, picture});
    res.status(201);
    res.json({ name, email, picture});
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is ready at http://localhost:${process.env.PORT || 5000} `);
});















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
    database: 'advertising'
});


app.post('/product', (req,res)=>{

    const product_name= req.body.product_name;

    const product_dec= req.body.product_dec;

    const agent= req.body.agent;

    const pic= req.body.pic;

    db.query('INSERT INTO proname (product_name, product_dec,agent, pic) VALUES (?,?,?,?)' , [product_name, product_dec, agent, pic], (error, result)=>{
        if (error)
        {console.log(error)}
    } );res.send("client record could not be inserted")
})






app.post('/insertmessage', (req,res)=>{

    const name= req.body.name;

    const email= req.body.email;

    const message= req.body.message;

    db.query('INSERT INTO contact (name, email, message) VALUES (?,?,?)' , [name,email,message,], (error, result)=>{
        if (error)
        {console.log(error)}
    } );res.send("client record could not be inserted")
})





app.post('/create',(req,result)=>{
    const id= req.body.id;

    const name= req.body.name;

    const email_id= req.body.email_id;

    const phone_no= req.body.phone_no;

    const password= req.body.password;

    const cpassword= req.body.cpassword;

    db.query('INSERT INTO adv_table (name, email_id, phone_no, password, cpassword) VALUES (?,?,?,?,?)', [ name, email_id, phone_no, password, cpassword],
    (err,result)=>{
        if (err)
        {console.log(err)}
        else {
            result.send("Client record inserted");
        }
    });
})



app.put('/aprj', (req,res)=>{

    const id= req.body.id;

    const aprove= req.body.aprove;


    db.query('UPDATE proname SET aprove=? WHERE id=? ', [aprove, id], (error, res)=>{
        if (error)
        {console.log(error)}
        else { 
            // alert("sent")
    }
    } );

    }
)



app.post('/createagent',(req,result)=>{
    const id= req.body.id;

    const name= req.body.name;

    const agent_id= req.body.agent_id;


    db.query('INSERT INTO agent (id, name, agent_id) VALUES (?,?,?)', [id, name, agent_id],
    (err,res)=>{
        if (err)
        {console.log(err)}

    });
})



app.post('/payment',(req,result)=>{
    const id= req.body.id;

    const name= req.body.name;

    const phone_no= req.body.phone_no;

    const email= req.body.email;

    const pmode= req.body.pmode;

    const uname= req.body.uname;

    const upi= req.body.upi;



    db.query('INSERT INTO payment (id, name, phone_no, email, pmode, uname, upi) VALUES (?,?,?,?,?,?,?)', [id, name, phone_no, email, pmode, uname, upi],
    (err,res)=>{
        if (err)
        {console.log(err)}
    });
   
})




app.post('/netpayment',(req,result)=>{

    const usname= req.body.usname;

    const accno= req.body.accno;

    const ifsc= req.body.ifsc;

    const bname= req.body.bname;


    db.query('INSERT INTO net ( usname, accno, ifsc, bname) VALUES (?,?,?,?)', [usname, accno, ifsc, bname],
    (err,res)=>{
        if (err)
        {console.log(err)}
    });
   
})


app.get('/getnet', (req,res)=>{
    
    db.query('SELECT * FROM net', (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})


app.get('/get', (req,res)=>{
    
    db.query('SELECT * FROM adv_table', (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})

app.get('/getproduct', (req,res)=>{
    
    db.query('SELECT * FROM proname', (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})


app.get('/getagent', (req,res)=>{
    
    db.query('SELECT * FROM agent', (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})



app.get('/getadagent', (req,res)=>{
    
    db.query('SELECT * FROM agent', (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})



app.get('/getpayment', (req,res)=>{
    
    db.query('SELECT * FROM payment', (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})



app.get('/getcupay', (req,res)=>{
    
    db.query('SELECT * FROM payment', (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})



app.get('/getcontact', (req,res)=>{
    
    db.query('SELECT * FROM contact', (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})


app.put('/update', (req,res)=>{

    const id= req.body.id;

    const name= req.body.name;

    const email_id= req.body.email_id;

    const phone_no= req.body.phone_no;

    db.query('UPDATE adv_table SET name=?,email_id=?,phone_no=? WHERE id=? ', [name,email_id,phone_no, id], (error, result)=>{
        if (error)
        {console.log(error)}
    } )
})


app.put('/updateagent', (req,res)=>{

    const id= req.body.id;

    const name= req.body.name;

    const agent_id= req.body.agent_id;

    db.query('UPDATE agent SET name=?, agent_id=? WHERE id=? ', [name, agent_id, id], (error, result)=>{
        if (error)
        {console.log(error)}
    } )
})





app.delete('/deleteagent/:id',(req,res)=>{

    const id= req.params.id;  

    db.query('DELETE FROM agent WHERE  id=?',[id], (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})


app.delete('/delete/:id',(req,res)=>{

    const id= req.params.id;  

    db.query('DELETE FROM adv_table WHERE  id=?',[id], (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})

app.post('/register', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const email_id =req.body.email_id
    const phone_no = req.body.phone_no;
    const cpassword = req.body.cpassword;



    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        db.query('INSERT INTO adv_table (name,password,email_id,phone_no,cpassword) VALUES (?,?,?,?,?)',
        [name,hash ,email_id,phone_no,hash], 
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
    if (req.session.name) {
        console.log("user exist");
        res.send({ loggedIn: true, name: req.session.name});
    } else {
        res.send({ loggedIn: false});
    }
});

app.post('/userLogin', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    db.query('SELECT * FROM adv_table WHERE name = ? AND password = ? ' ,
    name, password,
    (err, result) => { 
        if (err){
            console.log({err: err});
        } 
        if (result.length>0) {
            bcrypt.compare(password, result[0].Password, (error, response) =>{
                if(response){
                    req.session.name = result;
                    console.log(token);
                    res.json({
                        token: `bearer ${token}`,
                    });
                } else {
                    res.send("Incorrect Username or Password");
                }
            }).catch(err => console.log('error: ' + err));
        } else {
            res.send("User doesn't exist.");
        }
    }
    );
});


app.listen(3001, () =>{
    console.log('server Runnimg on port 3001')
})