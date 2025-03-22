const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// ใช้ body-parser เพื่อ parse ข้อมูล JSON
app.use(bodyParser.json());

// รับข้อมูลจาก client และบันทึกในฐานข้อมูล (สมมุติว่าบันทึกแค่ใน memory)
app.post('/api/save-location', (req, res) => {
    const { latitude, longitude, timestamp } = req.body;

    // บันทึกข้อมูลในฐานข้อมูลที่นี่ (เช่น MongoDB, MySQL, etc.)
    console.log('ได้รับข้อมูลตำแหน่ง:', { latitude, longitude, timestamp });

    // ส่ง response กลับไปที่ client
    res.json({ status: 'success', message: 'ข้อมูลตำแหน่งถูกบันทึกแล้ว' });
});

app.listen(port, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานที่ http://localhost:${port}`);
});
