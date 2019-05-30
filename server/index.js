const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('./db/mySqlService');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/login', async (req, resp) => {

  let username = req.body.state.name;
  let password = req.body.state.password;

  await sql.query("Select * from users WHERE username = ?", [username], function (err, res) {
    if(err) {
    }
    else{
      if(res.length >0) {
        bcrypt.compare(password, res[0].password, function(err, result) {
          if(result){
            resp.status(200).send({ error:false, message: 'successfully authenticated' });
          } else {
            resp.status(400).send({ error:true, message: "Email and password does not match" });  
          }
        });
      }
      else{
        resp.status(400).send({ error:true, message: "Username or Password is incorrect"});  
      }
    }
  });   
});

app.post('/api/register', async (req, resp) => {
  let name = req.body.state.name;
  let email = req.body.state.email;
  let pass = req.body.state.password;

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(pass, salt, function(err, hash) {
        sql.query('INSERT INTO users(username, email, password) VALUES(?, ?, ?)',[name, email, hash], function (err, res) {
         if(err) {
           console.log(err)
         }
         else{
           console.log('user added')
         }
         resp.send(res);
       });   
    });
  });
});

app.delete('/api/greeting/:id', async (req, res) => {
  dbService.deleteItem(req.params.id);
  res.sendStatus(200);
});

const port = 8080;

app.listen(port, () => process.stdout.write(`Server is listening on port ${port}`));
