var examDB=require('./examDB');
examDB.showOptions(3).then(function(data){
	console.log(data);
}).catch(function(error){
	console.log("报错了");
});