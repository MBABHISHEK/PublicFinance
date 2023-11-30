const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abhishek@2003@sql',
    database:"personal_finance",
    connectionLimit: 10,//hange this database name to your required database
});

connection.connect((err) => {
    if (err) {
      console.log('hai');
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to the database');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/user', (req, res) => {
    const {userid, username, dob, city, district, state, pincode, phone_num, age } = req.body;
    const query = 'INSERT INTO user (userid,username, dob, city, district, state, pincode, phone_num, age) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [userid,username, dob, city, district, state, pincode, phone_num, age];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });


  app.post('/account', (req, res) => {
    const {acc_id,acc_num,userid,acc_type,cur_balance } = req.body;
    const query = 'INSERT INTO account (acc_id,acc_num,userid,acc_type,cur_balance) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [acc_id,acc_num,userid,acc_type,cur_balance];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Err or adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });

  /*app.post('/category', (req, res) => {
    const {category_id,category_type,description,amount,date} = req.body;
    const query = 'INSERT INTO category (category_id,category_type,description,amount,date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [category_id,category_type,description,amount,date];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });*/

  app.post('/transaction', (req, res) => {
    const {transaction_id,category_id,userid,acc_id,date,amount,method } = req.body;
    const query = 'INSERT INTO transaction (transaction_id,category_id,userid,acc_id,date,amount,method ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [transaction_id,category_id,userid,acc_id,date,amount,method ];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });

  app.post('/budget', (req, res) => {
    const {budgetid,categoryid,amount,time_period,start_date,end_date } = req.body;
    const query = 'INSERT INTO budget (budgetid,categoryid,amount,time_period,start_date,end_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [budgetid,categoryid,amount,time_period,start_date,end_date];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });

  app.post('/goal', (req, res) => {
    const {goalid,ac_id,iduser,name,goal_amt,cur_amt,target_date } = req.body;
    const query = 'INSERT INTO goal (goalid,ac_id,iduser,name,goal_amt,cur_amt,target_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [goalid,ac_id,iduser,name,goal_amt,cur_amt,target_date];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });

  app.post('/loan', (req, res) => {
    const {loan_id,user_id,principle_amt,roi,emi,loan_period,start_date,end_date,due_date,status,loan_type,lender_name } = req.body;
    const query = 'INSERT INTO loan (loan_id,user_id,principle_amt,roi,emi,loan_period,start_date,end_date,due_date,status,loan_type,lender_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [loan_id,user_id,principle_amt,roi,emi,loan_period,start_date,end_date,due_date,status,loan_type,lender_name];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });

  app.post('/insurance', (req, res) => {
    const {seq_num,insuranceid,userid,policy_num,premium_amt,coverage_amt,duration,due_date,start_date,end_date,status,time_period } = req.body;
    const query = 'INSERT INTO insurance (seq_num,insuranceid,userid,policy_num,premium_amt,coverage_amt,duration,due_date,start_date,end_date,status,time_period) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [seq_num,insuranceid,userid,policy_num,premium_amt,coverage_amt,duration,due_date,start_date,end_date,status,time_period];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });

  app.post('/investment', (req, res) => {
    const {investmentid,userid,type,purchase_price,p_date,cur_value,interest_earned } = req.body;
    const query = 'INSERT INTO investment (investmentid,userid,type,purchase_price,p_date,cur_value,interest_earned ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [investmentid,userid,type,purchase_price,p_date,cur_value,interest_earned ];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });

  app.post('/tax', (req, res) => {
    const {tax_id,userid,due_date,period,amount,status } = req.body;
    const query = 'INSERT INTO tax (tax_id,userid,due_date,period,amount,status ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [tax_id,userid,due_date,period,amount,status ];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });

 /* app.post('/dependent', (req, res) => {
    const {did,loanid,name,dob,age } = req.body;
    const query = 'INSERT INTO dependent (did,loanid,name,dob,age ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [did,loanid,name,dob,age ];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });*/

 /* app.post('/recurring', (req, res) => {
    const {recurring_id,transaction_id,name} = req.body;
    const query = 'INSERT INTO recurring (recurring_id,transaction_id,name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [recurring_id,transaction_id,name];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json({ message: 'User added successfully', userId: result.insertId });
    });
  });*/
