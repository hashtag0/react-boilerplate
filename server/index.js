const path    = require( 'path' );
const express = require( 'express' );
const app     = express();

const staticPath = path.resolve( __dirname, '../dist' );

app.use( express.static( staticPath ) );

const port = process.env.PORT || 3000;

app.listen( port, () => {
    console.log( `Example app listening on port ${port}!` ); // eslint-disable-line
} );
