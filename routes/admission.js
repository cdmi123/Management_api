var express = require('express');
const {Login} = require('../Controller/LoginController');
const {checkToken} = require('../middleware/auth');
const {Admission,Student_details,Student_update} = require('../Controller/AdmissionController');
var router = express.Router();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true    
    optionSuccessStatus:200
}
router.use(cors(corsOptions));

router.post('/add_admission',Admission);
router.get('/student-details/:id',Student_details);
router.post('/student-update/:id',Student_update);



module.exports = router;