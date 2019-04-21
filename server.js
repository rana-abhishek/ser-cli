const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'NewReactTempalte/build')));
app.use(express.static('images'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const fileStorage = multer.diskStorage({
    destination: 'images',
    filename: (req, file, cb) => {
        cb(null, Math.random(1, 10) + '-' + file.originalname)
    }
})

// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth: {
//         api_key: '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'
//     }
// }))

let transporter = nodemailer.createTransport({
    host: "techject.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'abhishek.rana@techject.com', // generated ethereal user
      pass: 'rana_1996' // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
      }
  });

app.post('/api/sendmail', multer({ storage: fileStorage}).array('uploadedImages', 5) , (req, res) => {
    // console.log(req.body, req.files, req.file)
    const urls = req.files.map(item => item.path);
    const urlwithkeys = urls.map(item => ({path: item}));
    console.log(req.body.name, req.files)
    // console.log(req.body)
    // console.log(urlwithkeys);
    return transporter.sendMail({
        to: 'abhishek.rana@techject.com',
        from: 'info@vitalclinic.com',
        subject: 'Enquiry for Vital Clinic',
        html: `
            <h2>Name: ${req.body.name}</h2><br/>
            <h3>Email: ${req.body.email}</h3><br/>
            <h3>Mobile Number: ${req.body.mobile}</h3><br/>
            <h3>Address: ${req.body.address}</h3><br/>
            <h3>Message: ${req.body.message}</h3><br/>
        `
        ,
        attachments: urlwithkeys
    })
        .then(result => {
            res.status(200).send('Message Delivered');
        })
        .catch(err => {
            res.status(400).send(err);
        })
})

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (req, res) => {
        res.sendfile(path.join(__dirname, 'NewReactTempalte', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Server is running at port:', port)
});
