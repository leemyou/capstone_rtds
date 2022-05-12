const express = require('express') 
const app = express();
const port = 2999; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');



//mysql 연결
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'rtds',
});
connection.connect();

// 서버에서 가져온 데이터를 파싱해서 가져와준다
app.use(bodyParser.urlencoded({ extended: false }));    
app.use(bodyParser.json());
app.use(cors());



// get 방식으로 서버에 들어가면 보여짐
app.get('/', (req, res) =>{
    res.send('!RTDS Server is running!!@#!@#!#!@#!@#!#!#!#!@');
})





// /device에 있는 정보들 가져와서 db에 저장 - insert쿼리 사용
app.post("/device", (req, res) =>{
    const d_id = req.body.d_id;
    const u_name = req.body.u_name;
    const u_birth = req.body.u_birth;
    const u_phone = req.body.u_phone;
    const u_addr = req.body.u_addr;

    // console.log(req);   // 확인용
    console.log("제발 시발 뭐라도 실행이 되라 좀 시발새끼들아");

    // DB insert query
    let sql = "INSERT INTO userinfo (d_id, name, birth, phone, addr) VALUES (?, ?, ?, ?, ?);";
    // let sqlValues = [d_id, u_name, u_birth, u_phone, u_addr];
    connection.query(sql, [d_id, u_name, u_birth, u_phone, u_addr],
    function(err, rows, fields){
        if(err){
            console.log("DB연동 실패");
            console.log(err);
        }else{
            console.log("성공!");
            // console.log(fields);
        };
    });
});



// 센서 정보를 화면에 뿌림 - select쿼리 사용
app.post('/sensor_info', (req, res) => {
    // ============================================================
    // 나중에 where절 넣어서 조건으로 뽑아올 수 있게 해야함
    connection.query("SELECT * FROM sensor1", 
    function(err, rows, fields) {
        if (err) {
            console.log("데이터 가져오기 실패");
        }else {
            console.log(" 성공 ~!~!~! ");
        }
    })
})




// 서버가 실행되면 콘솔창에 안내
app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`); // '가 아닌 좌측상단의 esc버튼 밑의 `다.
})