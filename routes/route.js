const express=require('express')
const router=express.Router()

const [home,alldata,register]=require("../controllers/reqfuncontrollers")


router.get('/',home)

router.post('/alldata',alldata)
 


router.post('/register',register)
 

module.exports=router;