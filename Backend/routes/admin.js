var express = require('express');
var router = express.Router();
var admincontroller=require('../Controller/admincontroller')
var subjectcontroller=require('../Controller/subjectcontroller')
var topiccontroller=require('../Controller/topiccontroller')
var viewtopiccontroller=require('../Controller/viewtopiccontroller')
var teachercontroller=require('../Controller/teachercontroller')


var verifyToken=require('../middleware/verifyToken');

const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  var upload = multer({ storage: storage });

router.post('/addadmin',upload.single('image') ,admincontroller.addadmin)
router.post('/logadmin', admincontroller.logadmin)
router.get('/listadmin', verifyToken,admincontroller.listadmin)
router.put('/updateadmin/:id',upload.single('image') , admincontroller.updateadmin)
router.put('/updateadmin2/:id',upload.single('image') , admincontroller.updateadmin2)
router.get('/detailsadmin/:id',verifyToken, admincontroller.detailsadmin)
router.delete('/deleteadmin/:id',verifyToken, admincontroller.deleteadmin)

//SUBJECT ROUTES
router.post('/addsubject',upload.single('image') ,subjectcontroller.addsubject)
router.get('/listsubject', verifyToken,subjectcontroller.listsubject)

router.put('/updatesubject/:id',upload.single('image') , subjectcontroller.updatesubject)
router.get('/detailsubject/:id',verifyToken, subjectcontroller.detailsubject)
router.delete('/deletesubject/:id',verifyToken, subjectcontroller.deletesubject)


//TOPIC ROUTES --------------------------------
router.post('/addtopic',upload.single('image') ,topiccontroller.addtopic)
router.get('/listtopic', verifyToken,topiccontroller.listtopic)
// router.get('/listsubjects/:id', verifyToken,topiccontroller.listsubjects)
router.get('/detailtopic/:id',verifyToken, topiccontroller.detailtopic)
router.put('/updatetopic/:id',upload.single('image') , topiccontroller.updatetopic)
router.get('/listtopic2', verifyToken,topiccontroller.listtopic2)
router.delete('/deletetopic/:id',verifyToken, topiccontroller.deletetopic)
//VIEW TOPIC ROUTES..................................................................................
router.post('/addcontent',upload.single('image') ,viewtopiccontroller.addcontent)
router.get('/listviewtopic/:id', verifyToken,viewtopiccontroller.listviewtopic)
router.get('/detailviewtopic/:id',verifyToken, viewtopiccontroller.detailviewtopic)
router.put('/updateviewtopic/:id',upload.single('image') , viewtopiccontroller.updateviewtopic)
router.delete('/deleteviewtopic/:id',verifyToken, viewtopiccontroller.deleteviewtopic)

//VIEW CONTENT ROUTES..............................................................................................
router.get('/detailviewcontent/:id', verifyToken, viewtopiccontroller.viewcontent)

//TEACHER ROUTES................................................................
router.post('/addteacher',upload.single('image') ,teachercontroller.addteacher)
router.get('/listteacher', verifyToken,teachercontroller.listteacher)
router.get('/detailsteacher/:id',verifyToken, teachercontroller.detailsteacher)
router.put('/updateteacher/:id',upload.single('image') , teachercontroller.updateteacher)
router.delete('/deleteteacher/:id',verifyToken, teachercontroller.deleteteacher)
router.get('/listteacher2', verifyToken,teachercontroller.listteacher2)
module.exports = router;