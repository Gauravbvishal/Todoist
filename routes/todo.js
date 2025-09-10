const express=require('express')
const router=express();
const createController=require('../controllers/user/createtasks')
 
router.get('/',createController.createtasks)
router.post('/add-todo',createController.sendtask)
router.get('/alltask',createController.showtask)
router.get('/delete/:id',createController.deleteTask);
// router.get('/edit/:id',createController.deleteTask);




module.exports=router;