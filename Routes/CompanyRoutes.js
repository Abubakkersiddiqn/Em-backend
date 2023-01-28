import express from 'express';
import { addCompany, DeleteCompany, getAllCompany, getCompany, UpdateCompany } from '../Controller/companyController.js';

const router= express.Router();

router.get('/getallcompany',getAllCompany)
router.get('/getcompany/:id',getCompany)
router.post('/addcompany',addCompany)
router.put('/updatecompany/:id',UpdateCompany)
router.delete('/deletecompany/:id',DeleteCompany)
export default router