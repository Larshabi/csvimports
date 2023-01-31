const csv = require('fast-csv');
const mongoose = require('mongoose');
const Report = require('./model');
const newcsv = require('csvtojson')

exports.post = async(req, res) => {
    if (!req.files) {
        return res.status(400).json({
            message: 'No files was uploaded'
        })
    }
    const reportFile = req.files.file;
    // console.log(req.files);
    // csv
    //     .parseString(reportFile.data.toString(), {
    //         headers: true,
    //         ignoreEmpty: true
    //     })
    //     .on("data", (data) => {
    //         data['_id'] = new mongoose.Types.ObjectId();
    //         console.log(data);
    //         report.push(data);
    //     })
    //     .on("end", () => {
    //         Report.create(report, (err, document) => {
    //             if (err) {
    //                 console.log(err);
    //                 return res.status(400).json({
    //                     error: err._message
    //                 })
    //             };
    //         })
    //         res.send(report.length + 'reports has been succefully uploaded')
    //     })
    const fd = await newcsv().fromFile(reportFile.tempFilePath);
    // // fd.forEach((x) => {
    // console.log(JSON.stringify(x).toString());
    // })
    console.log(fd)
    let report;
    fd.forEach(async(data) => {
        report = await Report.create(data);
    })
    console.log('done');
    return res.send(fd);

}

exports.getReport = async(req, res) => {
    const report = await Report.find({});
    return res.status(200).json({
        report,
        message: 'Done'
    })
}