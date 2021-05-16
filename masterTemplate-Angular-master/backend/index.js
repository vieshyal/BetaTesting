const express = require('express');
const api_config = require('./config');
const app = express();
const port = api_config.port;
const userRouter = require('./routers/userManager');
const BetaRouter = require('./routers/BetaManager');
const CompanyRouter = require('./routers/CompanyManager');
const utilRouter = require('./routers/util');
const cors = require('cors');

var corsOptions = {
    origin: 'http://192.168.43.104:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());
app.use(cors(corsOptions));

app.use('/user', userRouter);
app.use('/Beta tests', BetaRouter);
app.use('/Company', CompanyRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'))

app.listen(port, '192.168.43.104', () => {
    console.log('Hurray!!!!! server started on port ' + port);
});