const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;
const path = require( 'path' );
const mongoose = require( 'mongoose' );
mongoose.set( 'useCreateIndex', true );
let db;

//Switch Between DB's in Prod
( process.env.NODE_ENV !== 'production' ) ? db = 'mongodb://localhost:process.env.27017/pGenerator' : db = '';

//Connect To Database

mongoose.connect( db, { useUnifiedTopology: true, useNewUrlParser: true } )
    .then( () => console.log( 'Connected to pGenerator Database' ) )
    .catch( ( err ) => console.log( `Database Connection Error: ${ err }` ) );


//Body Parser
app.use( express.json( { urlencoded: true } ) );

//Routes

const userApi = require('./Routes/userApi')
const passwordApi = require('./Routes/passwordApi')

app.use( '/api/user', userApi );
app.use('/api/user/password', passwordApi)

//

app.listen(PORT, ()=> console.log(`Server started on Port ${PORT}`))