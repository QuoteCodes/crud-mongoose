const router = require('express').Router()
const {getAllUser, getUser, createUser, deleteUser, doLogin,updateUser, updatePacth} = require('../controllers/user-controller')
const {isLogin,isAdmin} = require('../middleware/secure')

router.get('/', getAllUser)
router.get('/:id', getUser)
router.post('/', isLogin, isAdmin, createUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)
router.patch('/:id', updatePacth)
router.post('/login', doLogin)



module.exports = router