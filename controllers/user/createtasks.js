const Todo=require('../../model/todo')
exports.createtasks=(req,res,next)=>{
    res.render('user/index')
}
exports.sendtask= async (req, res) => {
  try {
    const task = await Todo.create(req.body);
    res.redirect('/alltask')
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.showtask=(req,res)=>{
  Todo.findAll()
  .then(tasks=>{
    return res.render('user/showtasks',{tasks})
  })
  .catch(err=>console.log(err))
}

exports.deleteTask=(req,res,next)=>{
  const tId=req.params.id;
  Todo.findByPk(tId)
  .then(()=> {
    Todo.destroy({ where: { id: tId } }) 
  })
  .then(() => res.redirect('/alltask'))
  .catch(err => console.log(err));
}

 
