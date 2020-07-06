
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.use(express.static('dist'))
