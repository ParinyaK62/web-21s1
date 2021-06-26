// Import libraries
const express = require('express')

// Setup app
const app = express()

// Middleware
app.use(express.static('public'))

// Routes
app.get('/lab', (req, res) => {
    res.send(`
    <html><body>
    <li>1. <a href="/profiles/parinya">/profiles/parinya</a></li>
    <li>2. <a href="/api/profiles/parinya">/api/profiles/parinya</a></li>
    <li>3. <a href="/cat-simulator">/cat-simulator</a></li>
    <li>4. <a href="/admin/grades">/admin/grades</a> AND <a href="/api/grades">/api/grades</a> AND <a href="/boredom">/boredom</a></li>
  </body></html>
  
    `)
  })

app.get('/profiles/parinya', (req, res) => {
    res.send(`
    <html><body>
      <h1>Parinya Krongpha</h1>
      <ul>
        <li>Nickname : Chinjung</li>
        <li>Like : Cat , Advaenture movie</li>
        </ul>
    </body></html>
    `)
})

app.get('/api/profiles/parinya', (req, res) => {
    res.json({
      name : "Parinya Krongpha",
      nickname : "Chinjung",
      like : "Cat , Advaenture movie"
      
    })
  })
  
app.get('/cat-simulator', (req, res) => {
    res.send(`
    <html><body>
    <h1><li><a href="/cat-result">Pet the cat</a></li></h1>
    <head><link rel="stylesheet" href="/styles.css"></head>
<body class="cats">    
        <img src="/cat1.jpg" />
      </html></body>
    `)
   })

   app.get('/cat-result', (req, res) => {
    res.send(`
    <html><body>
    <h1><li><a href="/cat-simulator">Ignore the cat</a></li></h1>
    <head><link rel="stylesheet" href="/styles.css"></head>
<body class="cats">
        <img src="/cat2.jpg" />
      </html></body>
    `)
   })   

app.get('/admin/grades', (req, res) => {
    res.sendStatus(401)
  })
     
app.get('/api/grades', (req, res) => {
    res.sendStatus(403)
  })
      
app.get('/boredom', (req, res) => {
    res.sendStatus(404).send('Sorry, cant find that');
   
  })
    
  
// Start server
const PORT = 3000
app.listen(PORT, () => console.log(
  `listening on http://localhost:${PORT}`))