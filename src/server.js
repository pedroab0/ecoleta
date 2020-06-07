const express = require("express")
const server = express()

// Pegar o banco de dados
// Get the database
const db = require("./database/db")

// Configurar pasta pública
// Set up public folder
server.use(express.static("public"))

// Habilitar o uso do req.body na nossa aplicação
// Enable the use of req.body in our application
server.use(express.urlencoded({ extended: true }))

// Utilizando template engine
//Using template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//req = request = requisição
//res = response = resposta

// Configurar caminhos da minha aplicação
// Configure my application paths

// Página inicial
// Home page
server.get("/", (req, res ) => {
    return res.render("index.html")
})

// Criando outras rotas
// Creating other routes
server.get("/create-point", (req, res ) => {

    // req.query: Query strings da nossa url
    //console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    
    //req.body: O corpo da nosso formulário
    //console.log(req.body)

    // Inserir dados no banco de dados
    // Insert data into the database
    const query = `
    INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?)
    `

    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastro Concluído")
        console.log(this)  

        return res.render("create-point.html", { saved: true })
    }
    
    db.run(query, values, afterInsertData)
})

server.get("/search", (req, res ) => {

    const search = req.query.search

    if(search == "") {
        // Pesquisa vazia
        // Empty Search
        return res.render("search-results.html", { total: 0 })
    }


    // Pegar os dados do banco de dados
    // Get data from database
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err) {
            return console.log(err)
        }

        const total = rows.length
        // Mostrar a página HTML com os dados do banco de dados
        // Show the HTML page with the data from database
        return res.render("search-results.html", {places: rows, total: total})
    })
})

// Ligar o servidor
// Turn on the server
server.listen(3001)