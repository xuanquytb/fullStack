const express = require('express')
const app = express()
const port = 3000


// cách viết 1 ==> rút gọn (Gọi là Arrow Function)
app.get('/',(req,res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    res.send("xin chào nodejs hân hạnh được làm quen!") // cách sử dụng tốt nhất
})

// cách viết 2 ==> rút gọn (Gọi là Arrow Function) 
// app.get('/',(req,res) => res.send("Hello Word!"))//cách viết ngắn gọn hơn của Arrow Function(Cách 1) ==> Dùng khi respon chỉ trả về 1 dòng


// cách viết 3 ==> cách viết thông thường
// app.get('/', function(req,res){
//     return res.send("Hello Word!");
// })

app.listen(port,() => console.log(`App được chạy trên http://localhost:${port}`))