import medicinesDao  from "../daos/medicines.dao.js";
export const getAll = async (req, res) =>{
     await medicinesDao.getAll()
    .then((medicines)=>{
        res.json(medicines);
    })
    .catch((err)=>{
        res.json({message:err})
    });
};


export const insertMedicine = async (req, res) =>{
    await medicinesDao.insertMedicine(req.body)
   .then((medicines)=>{
       res.json(medicines);
   })
   .catch((err)=>{
       res.json({message:err})
   });
};