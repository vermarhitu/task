"use strict";
const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connected.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(4000, () => console.log('Server is runnig at port no : 4000'));


//Insert a task
app.post('/tasks', (req, res) => {
    let task = req.body;
    var sql = "Insert into projects SET project_name = ?, project_description = ?, status = ?";
    mysqlConnection.query(sql, [task.project_name, task.project_description, 1], (p_err, p_rows, p_fields) => {
        if (!p_err){
            var sql = "Insert into tasks SET project_id = ?, task_name = ?, task_description = ?, status = ?";
            mysqlConnection.query(sql, [p_rows['insertId'], task.task_name, task.task_description, 1], (err, rows, fields) => {
                if (!err){
                    res.send('Inserted');
                }
                else
                    console.log(err);
            })
        }
        else
            console.log(p_err);
    })
});

