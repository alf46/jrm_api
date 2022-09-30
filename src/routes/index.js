var { Router } = require('express')
var router = Router()

router.get('/', (req, res) => {
    res.json({
        env: process.env.NODE_ENV
    })
})

module.exports = router