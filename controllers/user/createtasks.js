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
  let high=0,medium=0,low=0;
  Todo.findAll({ raw: true })
  .then(tasks=>{
    for(let data of tasks){
      if(data.priority=="high"){
        high++;
      }
      else if(data.priority=="medium"){
        medium++;
      }
      else{
        low++;
      }
    }
    return res.render('user/showtasks',{tasks,high:high,medium:medium,low:low})
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

 
