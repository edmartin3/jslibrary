// https://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
function dateAdd(date, interval, units) {
	var ret = new Date(date); //don't change original date
	var checkRollover = function() { if(ret.getDate() != date.getDate()) ret.setDate(0);};
	switch(interval.toLowerCase()) {
		case 'year'		: ret.setFullYear(ret.getFullYear() + units); checkRollover();  break;
		case 'quarter'	: ret.setMonth(ret.getMonth() + 3*units); checkRollover();  break;
		case 'month'	: ret.setMonth(ret.getMonth() + units); checkRollover();  break;
		case 'week'		: ret.setDate(ret.getDate() + 7*units);  break;
		case 'day'		: ret.setDate(ret.getDate() + units);  break;
		case 'hour'		: ret.setTime(ret.getTime() + units*3600000);  break;
		case 'minute'	: ret.setTime(ret.getTime() + units*60000);  break;
		case 'second'	: ret.setTime(ret.getTime() + units*1000);  break;
		default			: ret = undefined;  break;
  }
  return ret;
}
