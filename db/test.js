
var examDB=require('./examDB');
examDB.query('8').then(function(data){
	console.log(data);
}).catch(function(error){
	console.log("报错了");
});