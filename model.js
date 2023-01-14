const {Schema, model} = require('mongoose');

const reportSchema = new Schema({
    EMPLOYEE:String,
    FIRST_NAME:String,
    LAST_NAME:String,
    EMAIL:String,
    PHONE_NUMBER:String,
    HIRE_DATE:String,
    JOB_ID:String,
    SALARY:Number,
    COMMISION_PCT:Number,
    MANAGER_ID:Number, 
    DEPARTMENT_ID:Number,
    BONUS:Number,
    NEW_SALARY:Number   
},
{
    timestamps:true
})

const Report = model('Report', reportSchema);
module.exports = Report