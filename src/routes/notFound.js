
const { Router } = require('express')
const { 
    getNotFoundPage,
} = require('../controllers/errorController')

const router = Router()

router.get('*', getNotFoundPage)

module.exports = router