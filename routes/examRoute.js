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

route.post('/checkSubject',(req,resp)=>{
	var id=req.body.id;
	var value=req.body.value;
	//console.log(id,value);
	examDB.checkSubject(id,value).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

//展示选项
route.get('/showOptions',(req,resp)=>{
	var id=req.query.subject_id;
	examDB.showOptions(id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.post('/deleteSubject',(req,resp)=>{
	examDB.deleteSubject(req.body.id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	});
});

route.get('/query/:key',(req,resp)=>{
	examDB.query(req.params.key).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(errror);
	});
});


route.post('/saveSubject',(req,resp)=>{
	var ana = req.body.analysis;//涉及的知识点 analysis
	var choiceContents = req.body.choiceContents;
	choiceContents = JSON.parse(choiceContents);
	// var anw = req.body.anwser;
	var stem = req.body.stem;
	var checkState = req.body.checkState;
	var did = +req.body.department_id;
	var sid = +req.body.subjectLevel_id;
	var tid = +req.body.subjectType_id;
	var cid = +req.body.topic_id;
	console.log(ana,choiceContents,checkState,stem,did,sid,tid,cid);
	examDB.saveSubject(ana,choiceContents,checkState,stem,did,sid,tid,cid).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	})
})

route.post('/addChoice',(req,resp)=>{
	//choiceContents数组保存的是字符串类型，choiceCorrects数组保存的是数字类型。在sql语句中进行拼接时需要注意。
	var choiceContents = req.body.choiceContents;
	var choiceCorrects = req.body.choiceCorrects;
	choiceContents = JSON.parse(choiceContents);
	choiceCorrects = JSON.parse(choiceCorrects);

	var id = +req.body.id;
	//通过内容表中的index来确定choice表中插入的correct值
	choiceContents.forEach(function(item,index){
		examDB.addChoice(item,+choiceCorrects[index],id).then((data)=>{
		// return;
		resp.send(data);
		}).catch((error)=>{
			resp.send(error);
		})
	});	
})
/*route.post('/addChoice',(req,resp)=>{
	var choiceContent = req.body.choiceContent;
	var choiceCorrect = req.body.choiceCorrect;
	showSubDB.addChoice(choiceContent,choiceCorrect).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	})
})

route.post('/findById',(req,resp)=>{
	var id = req.body.id;
	showSubDB.addChoice(id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	})
})*/
module.exports=route;