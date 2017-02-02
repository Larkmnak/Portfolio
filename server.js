var express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 5000,
    app      = express();
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())

app.get('/', function(req, res) {
 res.render("index");
})

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});