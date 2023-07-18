const AdmissionModel = require('../Model/AdmissionModel');
var admissionModel = require('../Model/AdmissionModel');

exports.Admission = async (req,res) => {
   
    try {
        var data = await admissionModel.create(req.body);

        res.status(200).json(
            data
        )  
    
    } catch (error) {
        res.status(200).json(
            error
        )
    }
}

exports.Student_details = async (req,res) => {
    try{
        var id = req.params.id;
        var data = await admissionModel.findById(id);
        res.status(200).json(
            data
        )
    }
    catch(error){
        res.status(200).json({
            error
        })
    }
}

exports.Student_update = async (req,res) => {
    try{
        var id = req.params.id;
        var data = await admissionModel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(
            data
        )
    }
    catch(error){
        res.status(200).json({
            error
        })
    }
}
