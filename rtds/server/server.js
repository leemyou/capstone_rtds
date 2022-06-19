const express = require('express') 
const app = express();
const port = 2999; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const bodyParser = require('body-parser');
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:3000'
}


const maria = require('mysql');
//mysql 연결
var connection = maria.createConnection({
    //서버 아이피 바뀔 때마다 바꿔줘야 함
    host: '192.168.20.67',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'capston',
});
connection.connect();


// 서버에서 가져온 데이터를 파싱해서 가져와준다
app.use(bodyParser.urlencoded({ extended: false }));    
app.use(bodyParser.json());
app.use(cors());



// get 방식으로 서버에 들어가면 보여짐
app.get('/', (req, res) =>{
    res.send('!RTDS Server is running!');
})




// 사용자 정보 저장
// /device에 있는 정보들 가져와서 db에 저장 - insert쿼리 사용
app.post("/device", (req, res) =>{
    const d_id = req.body.d_id;
    const u_name = req.body.u_name;
    const u_birth = req.body.u_birth;
    const u_phone = req.body.u_phone;
    const u_addr = req.body.u_addr;

    // DB insert query
    let sql = "INSERT INTO user_info (d_id, u_name, u_birth, u_phone, u_addr) VALUES (?, ?, ?, ?, ?);";
    
    console.log("Connected");
    connection.query(sql, [d_id, u_name, u_birth, u_phone, u_addr],
            function(err, rows, fields){
                if(err){
                    console.log("DB연동 실패");
                    console.log(err);
                }else{
                    console.log("성공!");
                }
            })
        }
    )





//센서 정보 화면
// 센서 정보를 가져옴 - select쿼리 사용
app.post('/sensor_info', (req, res) => {
    // //전달받은 파라미터값
    const startTime = req.body.start_t;
    const endTime = req.body.end_t;

    const sqlSelect = "select * from sensor1 where time between '"+startTime+"' and '"+endTime+"';"   //between 사용할 수 있음 하자

    console.log('Connected');
    console.log(startTime);
    console.log(endTime);
    connection.query(sqlSelect,
    (err, rows, fields) => {
        if (err) {
            console.log("데이터 가져오기 실패 또는 데이터 없음");
        }else {
            console.log(" 성공 ~!~!~! ");
            console.log(rows);
            res.send(rows);
        }
    })
})






// 실시간 조난자 위치 받아오기
app.get('/victim', (req, res) => {
    const sql = "SELECT * FROM `u_location` ORDER BY `count` DESC LIMIT 1;"   //between 사용할 수 있음 하자
    
    console.log('Connected');
        connection.query(sql,
            (err, rows) => {
                if (err) {
                    console.log("데이터 가져오기 실패 또는 데이터 없음");
                }else {
                    console.log(" 성공 ~!~!~! ");
                    console.log(rows);
                    res.send(rows);
                }
            }
        )
})







// 서버가 실행되면 콘솔창에 안내
app.listen(port, ()=>{
    console.log(`Connect at http://IP:${port}`); // '가 아닌 좌측상단의 esc버튼 밑의 `다.
})