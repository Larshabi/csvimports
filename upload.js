const csv = require('fast-csv');
const mongoose = require('mongoose');
const Report = require('./model');

exports.post = (req, res)=>{
    if(!req.files){
        return res.status(400).json({
            message:'No files was uploaded'
        })
    }
    const reportFile = req.files.file;
    const report = []
    csv
    .parseString(reportFile.data.toString(), {
        headers: true,
        ignoreEmpty: true
    })
    .on("data",(data)=>{
        data['_id'] = new mongoose.Types.ObjectId();
        report.push(data);
    })
    .on("end", ()=>{
        Report.create(report, (err, document)=>{
            if(err) {
                return res.status(400).json({
                    error:err._message
                })
            };
        })
        res.send(report.length + 'reports has been succefully uploaded')
    })
}