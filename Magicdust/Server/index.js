const express = require('express');
const app = express(); //variable

const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'accountingsystem'
});

app.post('/create', (req, res)=>{
    const id= req.body.id;
    const accountname= req.body.accountname;
    const accountnumber= req.body.accountnumber;
    const paymentstatus= req.body.paymentstatus;
    const accountdescription= req.body.accountdescription;
    const accountstatus= req.body.accountstatus;

    db.query('INSERT into accsys (ID, Account_Name, Account_Number, Payment_Status, Account_Description, Account_Status)  VALUES (?,?,?,?,?,?)', [id, accountname, accountnumber, accountstatus, accountdescription, paymentstatus],
   (err, result) => {
    if(err)
    {console.log(err)}
    else{
        res.send("inserted into table")
    }
   } 
   )
})
app.listen(3001,()=>{ 
    console.log('server running on 3001');
})
