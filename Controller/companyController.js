import { db } from '../db.js';

export const getAllCompany=(req,res)=>{
    const q="SELECT * FROM company"
    db.query(q,(err,data)=>{
      if(err) return res.send(err);
      return res.send(data)
    })
}

export const getCompany=(req,res)=>{
    const q="SELECT * FROM company WHERE id = ?"

db.query(q,[req.params.id],(err,data)=>{
    if(err) return res.json(err)
    return res.status(200).json(data)
})
}

export const addCompany = (req,res)=>{
    const q = "INSERT INTO company(`companyName`,`address`,`lat`,`lng`) VALUES(?)"
    const values =[
        req.body.companyName,
        req.body.address,
        req.body.lat,
        req.body.lng
       
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json('company created sucessfully')
    })
}

export const UpdateCompany = (req,res)=>{

    const q="UPDATE company SET `companyName`=? ,`address`=? ,`lat`=?,`lng`=? WHERE id=?"
    const values =[
        req.body.companyName,
        req.body.address,
        req.body.lat,
        req.body.lng
       
    ]
    db.query(q,[...values,req.params.id],(err,data)=>{
        if(err) return res.json(err);
        return res.json('company updated sucessfully')
    })


}

export const DeleteCompany = (req,res)=>{
const q= "DELETE FROM company WHERE id=?"
 

db.query(q,[req.params.id],(err,data)=>{
    if(err) return res.json(err);
        return res.json('company deleted sucessfully')
})
}
