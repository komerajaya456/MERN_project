const express=require('express')
const router=express.Router()

const [home,login,register]=require("../controllers/reqfuncontrollers")


router.get('/',home)

router.get('/login',login)
 


router.post('/register',register)
 

module.exports=router;