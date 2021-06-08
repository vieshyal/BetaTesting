const express = require('express');
const api_config = require('./config');
const app = express();
const port = api_config.port;
const userRouter = require('./routers/userManager');
const BetaRouter = require('./routers/BetaManager');
const CompanyRouter = require('./routers/CompanyManager');
const FeedbackRouter = require('./routers/FeedbackManager');

const utilRouter = require('./routers/util');
const cors = require('cors');

var corsOptions = {
<<<<<<< HEAD
    origin: 'http://192.168.43.177:4200',
=======
    origin: 'http://192.168.43.91:4200',
>>>>>>> 224f67ce64e5804c0db2a0106de0104906412ade
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// This is how to initialize Socket.io at backend
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
<<<<<<< HEAD
        origin: "http://192.168.43.177:4200",
=======
        origin: "http://192.168.43.91:4200",
>>>>>>> 224f67ce64e5804c0db2a0106de0104906412ade
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('client connected!!');

    socket.on('sendmsg', (data) => {
        console.log('a message from client');
        console.log(data);

        data.reply = false;
        socket.broadcast.emit('recmsg', data);
    })

})




app.use(express.json());
app.use(cors(corsOptions));

app.use('/user', userRouter);
app.use('/beta', BetaRouter);
app.use('/company', CompanyRouter);
app.use('/feedback', FeedbackRouter);

app.use('/util', utilRouter);

app.use(express.static('./uploads'))

app.listen(port, '192.168.43.177', () => {
    console.log('Hurray!!!!! server started on port ' + port);
});