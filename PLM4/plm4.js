function isLeapYer(year){
   if((year % 400 ===0) || (year % 4 ===0) && (year % 100 !==0) ){
      console.log(`${year} year is leap Year `);
   }else{
    console.log(`${year} year is not a leap Year `);
   }

}

isLeapYer(2030)