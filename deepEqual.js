var deepEqual = function(obj1, obj2){
	if(typeof obj1 != 'object' || typeof obj2 != 'object' ){ return false; }
	if ( Array.isArray(obj1) != Array.isArray(obj2) ){ return false; }
	if ( Array.isArray(obj1) ){
		if ( obj1.length != obj2.length ){ return false; }
		for (var i = 0; i < obj1.length; i++) {
			if (typeof obj1[i] == 'object'){
				if(!deepEqual(obj1[i], obj2[i])){
					return false;
				}
			}else if (obj1[i] != obj2[i]){
				return false;
			}
		};
	}else{
		for (k in obj1) {
			if (typeof obj1[k] == 'object'){
				if(!deepEqual(obj1[k], obj2[k])){
					return false;
				}
			}else if (!obj2[k] || obj1[k]!=obj2[k]){
				return false;
			}
		};
		for (k in obj2) {
			if (typeof obj2[k] == 'object'){
				if(!deepEqual(obj2[k], obj1[k])){
					return false;
				}
			}else if (!obj1[k] || obj2[k]!=obj1[k]){
				return false;
			}
		};
	}		
	return true;
};
module.exports = deepEqual;