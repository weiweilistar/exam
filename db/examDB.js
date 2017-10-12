require('babel-polyfill');
var pool=require('./pool');
module.exports={
	getAllSubjectType(){
		var sql ="select * from tbl_exam_subjecttype"
		return pool.execute(sql);
	},
	getSubjectLevel(){
		var sql="select * from tbl_exam_subjectlevel"
		return pool.execute(sql);
	},
	getAllDepartmentes(){
		var sql="select * from tbl_exam_epartment"
		return pool.execute(sql);
	},
	getAllTopics(){
		var sql="select * from tbl_exam_topic"
		return pool.execute(sql);
	},
	getDepartmentTopics(did,lid,sid,tid){
		var sql="select * from tbl_exam_subject where department_id="
		+did+" and subjectlevel_id="
		+lid+" and subjecttype_id="
		+sid+" and topic_id="
		+tid;
		return pool.execute(sql);
	},
	checkSubject(id,value){
		var sql='update tbl_exam_subject set checkState="'+value+'" where id='+id;
		return pool.execute(sql);
	},
	showOptions(id){
		var sql="select * from tbl_exam_choice where subject_id="+id;
		return pool.execute(sql);
	},
	deleteSubject(id){
		var sql="delete * from tbl_exam_subject where id="+id;
		return pool.execute(sql);
	},
	//模糊查询
	query(key){
		var sql="select * from tbl_exam_subject where stem like '%"+key+"%'";
		return pool.execute(sql)
	},
	//7.插入题目
	addSubject(analysis,choiceContents,checkState,stem,department_id,subjectLevel_id,subjectType_id,topic_id){
		var sql = "insert into tbl_exam_subject values(null,'"+analysis+"','"+choiceContents.join()+"','"+checkState+"','"+stem+"',null,"+department_id+","+subjectLevel_id+","+subjectType_id+","+topic_id+",null)";
		return pool.execute(sql);
	},	//8.插入选项
	addChoice(choiceContent,choiceCorrect){
		var sql = 'insert into tbl_exam_choice values(null,"'+choiceContent+'","'+choiceCorrect+'",null)';
		return pool.execute(sql);
	}
}