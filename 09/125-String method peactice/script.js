const flights ="_Delayed_Departure;fao92766109;txl2133758440;11:25 +_Arrival:bru0943384722;fao93766109;11:45 +Delayed_Arrival;hel7439299980;fao93766109;12:05 +_Departure;fao93766109;lis232369855;12:30";

const getCode = str => str.slice(0,2).toUpperCase();

for( const fli of flights.split('+')){
   const [type, from,to,time] = fli.split(';');
   const output = ` ${type.startsWith('_Delayed')? 'red' : ''} ${type.replaceAll('_',' ')} 
   ${getCode(from)} ${getCode(to)} (${time.replace(':','h')})`.padStart(36);
   console.log(output);
  }