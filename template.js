const {parse} = require('json2csv');
const Report = require('./model');
const fs= require('fs')

exports.get = function(req, res){
    // const fields = [
    //     'EMPLOYEE',
    //     'FIRST_NAME',
    //     'LAST_NAME',
    //     'EMAIL',
    //     'PHONE_NUMBER',
    //     'HIRE_DATE',
    //     'JOB_ID',
    //     'SALARY',
    //     'COMMISION_ID',
    //     'MANAGER_ID',
    //     'DEPARTMENT_ID',
    //     'BONUS',
    //     'NEW_SALARY' 
    // ]
    const fields = Object.keys(Report.schema.obj);
    const csv = parse({data:'', fields:fields})
    res.set("Content-Disposition", "attachment;filename=authors.csv");
    res.set("Content-Type", "application/octet-stream");

    res.send(csv);
}