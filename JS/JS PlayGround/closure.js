function OuterFunction(OuterValue){
    console.log('Trigger');
    let tempVal = 1 ;
  return function InnerFunction(InnerValue)  {
    console.log('OuterVal - ', OuterValue);
    console.log('InnerVal - ', InnerValue);
    console.log('tempVal - ', tempVal);
    tempVal = tempVal + 1 ; 
  }
}

const value = OuterFunction(1);
value(2);
value(2);
value(2);

const value2 = OuterFunction(1);
value2(2);
value2(2);
value2(2);