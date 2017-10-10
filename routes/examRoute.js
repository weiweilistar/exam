require('babel-polyfill');
var express=require('express');
var route = express.Router();
var examDB=require('../db/examDB');
//查询
route.get('/getAllSubjectType',(req,resp)=>{
	examDB.getAllSubjectType().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/getSubjectLevel',(req,resp)=>{
	examDB.getSubjectLevel().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/getAllDepartmentes',(req,resp)=>{
	examDB.getAllDepartmentes().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/getAllTopics',(req,resp)=>{
	examDB.getAllTopics().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.post('/getDepartmentTopics',(req,resp)=>{
	examDB.getDepartmentTopics(req.body.direct,req.body.level,req.body.type,req.body.topic).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});
module.exports=route;