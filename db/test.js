var examDB=require('./examDB');
examDB.getDepartmentTopics().then(function(data){
	console.log(data);
}).catch(function(error){
	console.log("报错了");
});