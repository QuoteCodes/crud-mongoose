const router = require('express').Router()
const {getAllUser, getUser, createUser, deleteUser, updateUser, updatePacth} = require('../controllers/user-controller')

router.get('/', getAllUser)
router.get('/:id', getUser)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)
router.patch('/:id', updatePacth)

module.exports = router