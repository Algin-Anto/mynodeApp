const express=require('express');
const router=express.Router();
const {SomeUserFunction}=require('../controllers/UserController');

router.get('/',SomeUserFunction)
//router.post('/login',login);
router.get('/red', (req, res) => {
    res.json({ color: 'red' });
   });
   router.get('/id/:value', (req, res) => {
    const { value } = req.params;
    res.json({ id: value });
   });
module.exports=router;