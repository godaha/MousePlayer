/*!
 * MousePlayer v1.0.0
 * Author is Gott.ha / Godha
 * Official website: mouseplayer.godha.cn
 * Github repository: https://github.com/godaha/MousePlayer (English)
 * Gitee repository: https://gitee.com/godha/mouseplayer (简体中文).
 */

function MousePlayer(parameter){

	function isUndef(d){
		return d === undefined || d === null || d === ''
	}

	function isTrue(d){
		return d === true
	}

	function isFalse(d){
		return d === false
	}



	/**
    * Basic parameter inspection.
    * If the parameter is wrong, this ends all and prompts for an error.
    */

	var infor = [];
	infor.error_att = {
		nodom:"Container does not exist \n\nPlease check the < container > attribute",
		nexterr:"'next' attribute must be a function",
		enderr:"'end' attribute must be a function"
	}

	function error_att(type){
		console.error("Attribute error: "+infor.error_att[type]);
	}
	function typefunc(dom){
		var typs = typeof parameter[dom];
		return typs!='function'&&typs!='undefined'
	}

	


	if(typeof parameter.container!='object'){
		error_att('nodom');
		return
	}
	if(typefunc('next')){
		error_att('nexterr');
		return
	}
	if(typefunc('end')){
		error_att('enderr');
		return
	}


	/*  */


	



}

