const { default: mongoose } = require('mongoose');
var validator = require('validator');

const Admissionschema = new mongoose.Schema({

    surname:{
        type:String,
        required:[true,"surname name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter surname name");
            }
        }
    },
    studentname:{
        type:String,
        required:[true,"student name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter student name");
            }
        }
    },
    fathername:{
        type:String,
        required:[true,"father name require"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter father name");
            }
        }
    },
    stu_contact_no:{
        type:String,
        required:[true,"Enter conatct no"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter contact no");
            }
        }
    },
    stu_whatsapp_no:{
        type:String,
        required:[true,"Enter student whatsapp no"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter student whatsapp no");
            }
        }
    },
    parent_contact_no:{
        type:String,
        required:[true,"Enter parents contact no"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter parents contact no");
            }
        }
    },
    parent_whatsapp_no:{
        type:String,
        required:[true,"enter parents whatsapp no"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("enter parents whatsapp no");
            }
        }
    },
    address:{
        type:String,
        required:[true,"Enter address"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter address");
            }
        }
    },
    dob:{
        type:String,
        required:[true,"select dob"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("select dob");
            }
        }
    }, 
    image:{
        type:String,
        required:[true,"select image"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("select image");
            }
        }
    },
     qualification:{
        type:String,
        required:[true,"enter qualification"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("enter qualification");
            }
        }
    }, 
    reference:{
        type:String,
        required:[true,"select reference"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("select reference");
            }
        }
    }, 

    course:{
        required:[true,"couser name require"],
        type: mongoose.Schema.Types.ObjectId,
        ref: "course_content",
    }, 

    course_duration:{
        type:String,
        required:[true,"select course duration"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("select course duration");
            }
        }
    }, 

    daily_time:{
        type:String,
        required:[true,"select daily time"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("select daily time");
            }
        }
    }, 
    course_content:{
        required:[true,"couser name require"],
        type: mongoose.Schema.Types.ObjectId,
        ref: "course_content",
    }, 
    total_fees:{
        type:String,
        required:[true,"enter total_fees"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("enter total_fees");
            }
        }
    }, 
    joining_date:{
        type:String,
        required:[true,"select join date"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("select join date");
            }
        }
    }, 
    ending_date:{
        type:String,
        required:[true,"select end date"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("select end date");
            }
        }
    }, 
    job_responsbility:{
        type:String,
        required:[true,"select job responsibility"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("select job responsibility");
            }
        }
    },

    college_course:{
        type:String,
        required:[true,"select college course"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("select college course");
            }
        }
    },

    installment_details:{
        type:Array,
        Details:{

            amount:{
                type:Number
            },
            installment_date:{
                type:Date
            },
            p_status:{
                type:String,default:"0"
            }
        },
    },
    faculty:{
        type:String,
        required:[true,"select faculty"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("select faculty");
            }
        }
    },
    batch_time:{
        type:String,
        required:[true,"batch time"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("select batch time");
            }
        }
    },
    runnng_topic:{
        type:String,
        required:[true,"running topic"],
        validate(value){
            if(validator.isEmpty(value)){
                throw new Error("Enter running topic");
            }
        }
    },
    pc_laptop:{
        type:String,default:"PC"
    },
    pc_no:{
        type:String,default:"0"
    },
    laptop_compulsory:{
        type:String,default:"NO"
    },
    gst:{
        type:String,default:"NO"
    },
    extra_note:{
        type:String,default:""
    },
    reception_note:{
        type:String,default:""
    }
    
});

const AdmissionModel = mongoose.model('Admission', Admissionschema);

module.exports = AdmissionModel;
