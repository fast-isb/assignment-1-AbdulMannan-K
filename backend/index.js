import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
// import router from './routes/users.js';
import router from './routes/patients.js'
import cors from 'cors'
import path from 'path'

const __dirname = path.resolve();

const app = express()
const port = 3001

app.use(cors());
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.json())
// app.use('/users', router);
app.use('/patients',router);

app.get('/',(req,res)=>{
    console.log("found");
    res.send('nope');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})