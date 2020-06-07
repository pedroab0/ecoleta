// Importar a depedência do sqlite3
// Import sqlite3 dependecy
const sqlite3 = require("sqlite3").verbose()

// Criar objeto que irá fazer operações no banco de dados
// Create object that will perform operations on the database
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto de banco de dados para nossas operações
// Use the database object for our operations
// db.serialize(() => {
//     // 1 Criar uma tabela
//     // 1 Create a table
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places(
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         name TEXT,
//     //         image TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     // 2 Inserir dados na tabela
//     // 2 Insert data into the table
//     // const query = `
//     //     INSERT INTO places (
//     //         name,
//     //         image,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?)
//     // `

//     // const values = [
//     //     "Papersider",
//     //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80.unsplash.com/flagged/photo-1566843017081-a27f11f2bf05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Nº 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão",
//     // ]

//     // function afterInsertData(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastro Concluído")
//     //     console.log(this)  
//     // }
    
//     // //db.run(query, values, afterInsertData)

//     // 3 Consultar os dados da tabela
//     // 3 Consult the table data
//     // db.all(`SELECT * FROM places`, function(err, rows){
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão os seus registros: ")
//     //     console.log(rows)
//     // })

//     // 4 Deletar um dado da tabela
//     // 4 Delete data from the table
//     // db.run(`DELETE FROM places WHERE id = ?`, [10], function(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Registro deletado com sucesso!")
//     // })
// })