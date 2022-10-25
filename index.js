const app = require('./app');
const {config} = require('./Config/Config');

app.listen(config.port,()=>{
    console.log(`server is running at http://localhost:${config.port}`)
})