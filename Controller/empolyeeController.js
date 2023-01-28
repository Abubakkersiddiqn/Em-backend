import { db } from "../db.js"
import moment from "moment"


export const getAllemployee =(req,res)=>{
    const q="SELECT `eid` ,`firstname`, `lastname` ,`email`, `designation`, `dob` FROM company c JOIN employee e ON c.id=e.uid WHERE c.id = ?"

    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}
export const addEmployee =(req,res)=>{

    const q="INSERT INTO employee (`firstname`, `lastname`,`email`, `designation`, `dob`,`uid`,`isActive`) VALUES(?)"

   const values=[
          req.body.firstname,
          req.body.lastname,
          req.body.email,
          req.body.designation,
          moment.utc(req.body.dob).format("YYYY-MM-DD"),
          req.body.uid,
          req.body.isActive  
    ]
    db.query(q,[values],(err,data)=>{
  
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const getEmployee =(req,res)=>{

    const q="SELECT * FROM employee WHERE eid = ?"

db.query(q,[req.params.id],(err,data)=>{
    if(err) return res.json(err)
    return res.status(200).json(data)
})
}

export const MigrateEmployee =(req,res)=>{
    const q="UPDATE employee SET `uid`=? WHERE eid=?"

    const values=[
        req.body.uid
    ]
    db.query(q,[...values,req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json("Migrated Sucessfully")
    })
}

export const DeactiveEmployee =(req,res)=>{
    const q="UPDATE employee SET `isActive`=? WHERE eid=?"

    const values=[
        req.body.isActive
    ]
    db.query(q,[...values,req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json("Deactive sucessfully")
    })

}
export const activateEmployee =(req,res)=>{
    const q="UPDATE employee SET `isActive`=? WHERE eid=?"

    const values=[
        req.body.isActive
    ]
    db.query(q,[...values,req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json("activate sucessfully")
    })

}

export const UpdateEmployee =(req,res)=>{

    const q="UPDATE employee SET `firstname`=?, `lastname`=?,`email`=?, `designation`=?, `dob`=?,`uid`=?,`isActive`=? WHERE eid=?"

    const values=[
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.designation,
        moment.utc(req.body.dob).format("YYYY-MM-DD"),
        req.body.uid,
        req.body.isActive  
  ]

 db.query(q,[...values,req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json("updated Employee sucessfully")
    })
}

export const DeleteEmployee = (req,res)=>{
    const q= "DELETE FROM employee WHERE eid=?"
     
    
    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
            return res.json('employee deleted sucessfully')
    })
    }