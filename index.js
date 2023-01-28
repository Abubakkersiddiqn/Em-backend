import express from 'express';

import cors from 'cors';
import CompanyRoutes from "./Routes/CompanyRoutes.js"
import employeeRoutes from "./Routes/empolyeeRoutes.js"
const app = express();
const corsOptions = {
    
    origin: [
      "http://localhost:3000",
     
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
  };
  
app.use(express.json());
app.use(cors(corsOptions))




app.get('/',(req,res)=>{
 res.send("Hello World")
})

app.use('/api/company',CompanyRoutes)
app.use('/api/employee',employeeRoutes)

app.listen(8800,()=>{
    console.log("Listening on port")
})
