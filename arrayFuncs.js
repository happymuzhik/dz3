var arrayFuncs = {
	forEach: function(array, modif){
		try{
			if (!array||!Array.isArray(array)||array.length==0){
				throw new Error('Первым параметром должен быть непустой массив!');
			}
			if (!modif||typeof modif!='function'){
				throw new Error('Вторым параметром должна быть функция!');
			}
			for (var i = 0; i < array.length; i++) {
			 	modif(array[i]);
			};
			return true;
		}catch(e){
			console.error(e.message);
		}
	},
	filter: function(array, modif){
		try{
			if (!array||!Array.isArray(array)||array.length==0){
				throw new Error('Первым параметром должен быть непустой массив!');
			}
			if (!modif||typeof modif!='function'){
				throw new Error('Вторым параметром должна быть функция!');
			}
			var _array = [];
			for (var i = 0; i < array.length; i++) {
				if(modif(array[i])){
					_array[_array.length] = array[i];
				}
			};
			return _array;
		}catch(e){
			console.error(e.message);
		}
	},
	map: function(array, modif){
		try{
			if (!array||!Array.isArray(array)||array.length==0){
				throw new Error('Первым параметром должен быть непустой массив!');
			}
			if (!modif||typeof modif!='function'){
				throw new Error('Вторым параметром должна быть функция!');
			}
			var _array = [];
			for (var i = 0; i < array.length; i++) {
			 	_array[_array.length] = modif(array[i]);
			};
			return _array;
		}catch(e){
			console.error(e.message);
		}
	},
	slice: function(array, start, end){
		try{
			if (!array||!Array.isArray(array)||array.length==0){
				throw new Error('Первым параметром должен быть непустой массив!');
			}
			if ( typeof start != 'number' || (end && typeof end != 'number')){
				throw new Error('Начало и конец должны быть числами!');
			}
			var _array = [];
			for (var i = 0; i < array.length; i++) {
				if (start<0){
					start = array.length + start;
					end = (end&&end<0)?(array.length + end):end;
				}
				if ( i >= start && i < ((end)?end:array.length) ){
					_array[_array.length] = array[i];
				}			 	
			};				
			return _array;
		}catch(e){
			console.error(e.message);
		}
	},
	reduce: function(array, callback){
		try{
			if (!array||!Array.isArray(array)||array.length==0){
				throw new Error('Первым параметром должен быть непустой массив!');
			}
			if (!callback||typeof callback!='function'){
				throw new Error('Вторым параметром должна быть функция!');
			}
			var res = null;
			res = array[0];			
			for (var i = 0; i < array.length-1; i++) {
			 	res = callback(res, array[i+1]);
			};
			return res;
		}catch(e){
			console.error(e.message);
		}
	},	
	splice: function(array, start, count){
		try{
			if (!array||!Array.isArray(array)||array.length==0){
				throw new Error('Первым параметром должен быть непустой массив!');
			}
			if ( typeof start != 'number' || (count && typeof count != 'number')){
				throw new Error('Начало и количество должны быть числами!');
			}
			if ( count < 0 ){
				throw new Error('Количетсво должно быть >= 0!');
			}			
			var _array = [], _removed = [], cnt = 0, _array_end = [];			
			if(count==0){
				for (var i = 3; i < arguments.length; i++) {
					_array_end[cnt] = array[start+cnt];
					array[start+(cnt++)] = arguments[i];
				};
				for (var i = 0; i < _array_end.length; i++) {
					array[array.length] = _array_end[i];
				};
			}else{
				for (var i = 0; i < array.length; i++) {
					if (start<0){ start = array.length + start;	}
					if ( i >= start && i <= ((count)?(start+count-1):array.length) ){						
						_removed[_removed.length] = array[i];
					}else{
						_array[_array.length] = array[i];
					}	 	
				};
				array.length = 0;
				for (var i = 0; i < _array.length; i++) {
					array[i] = _array[i];
				};
			}								
			return _removed;
		}catch(e){
			console.error(e.message);
		}
	},
};	
module.exports = arrayFuncs;