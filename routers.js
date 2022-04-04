const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send('Hello World!')
})

router.get('/users/:id', function (req, res) {
    const id = req.params.id
    if(Number(id) === 1){
        const user = {
            id : 1,
            name : "Ahmad Hafidh Ayatullah",
            age : 25
        }
        res.send(user)
    }else{
        const user = {
            id : 2,
            name : "Elfin Sanjaya",
            age : 25
        }
        res.send(user)
    }
})
  
router.get('/users', function (req, res) {
    const name = req.query.name
    const age = req.query.age
    res.send(name + " " + age)
})
  
router.put('/users', (req, res) => {
    res.send('Got a PUT request at /user')
})
  
router.delete('/users', (req, res) => {
    res.send('Got a DELETE request at /user')
})

module.exports = router