const express = require('express') 
const app = express();
const port = 2999; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '1234',
    database: 'rtds'
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));    // 이게 머임..?
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) =>{
    res.send('!RTDS Server is running!')
})

app.post("/device", (req, res) =>{
    const d_id = req.body.d_id;
    const u_name = req.body.u_name;
    const u_birth = req.body.u_birth;
    const u_phone = req.body.u_phone;
    const u_addr = req.body.u_addr;

    connection.query("Insert Into test values (?)", [d_id, u_name, u_birth, u_phone, u_addr],
    function(err, rows, fields){
        if(err){
            console.log("DB연동 실패");
        }else{
            console.log("성공!");
            // console.log(fields);
        };
    });
});


app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`); // '가 아닌 좌측상단의 esc버튼 밑의 `다.
})