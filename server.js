
const express = require('express');
        app = express();
        http = require('http').Server(app);
        io = require('socket.io')(http);

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
} )


http.listen(8000, () => console.log('SERVER ON'))

io.on('connection', (socket) => {
    console.log('Usuario conectado');
})

app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        defaultLayout: "index.hbs",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials"
    })
);

app.set('views', './views'); 
app.set('view engine', 'hbs'); 

app.get('/productos/vista', function(req, res) {
    res.render('main', { datos: productos, listExist: true });
});