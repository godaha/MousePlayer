/*!
 * MousePlayer v1.0.0
 * 
 */

function MousePlayer(parameter){
	let infor = [];
	infor.error_att = {
		nodom:"Container does not exist \n\nPlease check the < container > attribute",
		nexterr:"'next' attribute must be a function",
		enderr:"'end' attribute must be a function"
	}//属性错误
	function error_att(type){
		console.error("Attribute error: "+infor.error_att[type]);
	}//属性错误提示


	////////检查属性

	function typefunc(dom){
		let typs = typeof(parameter[dom]);
		if(typs!='function'&&typs!='undefined'){return 1;}else{return 0;}
	}
	if(typeof(parameter.container)!='object'){error_att('nodom');return;}
	if(typefunc('next')){error_att('nexterr');return;}
	if(typefunc('end')){error_att('enderr');return;}
	if(){
		
	}

	////////





	//上面为基础检查
	/****************************************/


	



}

