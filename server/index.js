const path    = require( 'path' );
const express = require( 'express' );
const app     = express();

const staticPath = path.resolve( __dirname, '../dist' );

app.use( express.static( staticPath ) );

const port = process.env.PORT || 3000;

// not found in static files, so default to index.html
app.use( ( req, res ) => res.sendFile( `${staticPath}/index.html` ) );

app.listen( port, () => {
    console.log( `Example app listening on port ${port}!` ); // eslint-disable-line
} );
