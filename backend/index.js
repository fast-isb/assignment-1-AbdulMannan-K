import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
// import router from './routes/users.js';
import router from './routes/patients.js'
import cors from 'cors'

const app = express()
const port = 3001

app.use(cors());

app.use(bodyParser.json())
// app.use('/users', router);
app.use('/patients',router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})