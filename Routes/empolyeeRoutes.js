import express from 'express';
import { activateEmployee, addEmployee, DeactiveEmployee, DeleteEmployee, getAllemployee, getEmployee, MigrateEmployee, UpdateEmployee } from '../Controller/empolyeeController.js';


const router= express.Router();

router.get('/:id',getAllemployee)
router.post('/addEmployee',addEmployee)
router.get('/getemployee/:id',getEmployee)
router.put('/migrateEmployee/:id',MigrateEmployee)
router.put('/deactivate/:id',DeactiveEmployee)
router.put('/activate/:id',activateEmployee)
router.put('/updateEmployee/:id',UpdateEmployee)
router.delete('/deleteEmployee/:id',DeleteEmployee)


export default router