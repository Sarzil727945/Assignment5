//input1 Field function
function inputValue1(input1ID){
     const input1Field = document.getElementById(input1ID);
     const input1ValueNumber = Number(input1Field.value);
     input1Field.value ='';
     if(isNaN(input1ValueNumber)){
          alert('Please give your input value one number!!');
          return;
          }
     else if( input1ValueNumber < 0){
          alert('Your input value one is invalid!!')
          return;
          }
     else if( input1ValueNumber == 0){
          alert('Your input value one is null!!')
          return;
          }
     
     return input1ValueNumber;  
 }

//input2 Field function
 function inputValue2(input2ID){
     const input2Field = document.getElementById(input2ID);
     const input2ValueNumber = Number(input2Field.value);
     input2Field.value ='';
     if(isNaN(input2ValueNumber)){
          alert('Please give your input value two number!!');
          return;
          }
     else if(input2ValueNumber < 0 ){
          alert('Your input value two is invalid!!')
          return;
          }
     else if(input2ValueNumber == 0){
          alert('Your input value two is null!!')
          return;
          }
     
     return input2ValueNumber;
 }

 function colorCodeNumber(){
     const random = Math.round(Math.random()*1000000);
     return random;
 }
 
 //  background color function
 function sixDigitColorCode(){
     const colorCode = colorCodeNumber();
     const colorCodeString = colorCode+'';
 
     if(colorCodeString.length==6){
          return colorCode;
     }
     else{
          return sixDigitColorCode();
     }
 }

