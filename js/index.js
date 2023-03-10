// button blog part 
document.getElementById('btn-blog').addEventListener('click', function(){
     window.location.href = "blog.html";
})
// button blog part

// common js call 
 // Triangle part
 document.getElementById('btn-triangle').addEventListener('click', function(){
     const triangleInput1Value = inputValue1('triangle-input1');
     const pushField1 = document.getElementById('trianglePush-field1');
     pushField1.innerText = triangleInput1Value;
    
     const triangleInput2Value = inputValue2('triangle-input2');
     const pushField2 = document.getElementById('trianglePush-field2');
     pushField2.innerText = triangleInput2Value;
    
     const multiTriangleValue = +((0.5 *triangleInput1Value * triangleInput2Value).toFixed(2));
     const triangleTotalPush = document.getElementById('triangleTotal');
     if(isNaN(multiTriangleValue)){
         alert('Please give your input!!');
         triangleTotalPush.innerText ='0';
         return;
         }
     triangleTotalPush.innerText = multiTriangleValue;
     const hidden =document.getElementById('unhidden1');
     hidden.style.display='block';
     });
// Triangle part

// Rhombus part
document.getElementById('btn-rhombus').addEventListener('click', function(){
     const rhombusInput1Value = inputValue1('rhombus-input1');
     const rhombusPushField1 = document.getElementById('rhombusPush-field1');
     rhombusPushField1.innerText = rhombusInput1Value;
    
     const rhombusInput2Value = inputValue2('rhombus-input2');
     const rhombusPushField2 = document.getElementById('rhombusPush-field2');
     rhombusPushField2.innerText = rhombusInput2Value;
    
     const multiRhombusValue = +((0.5 *rhombusInput1Value * rhombusInput2Value).toFixed(2));
     const rhombusTotalPush = document.getElementById('rhombusTotal');
     if(isNaN(multiRhombusValue)){
         alert('Please give your input!!');
         rhombusTotalPush.innerText ='0';
         return;
        }

        rhombusTotalPush.innerText = multiRhombusValue; 
        const hidden = document.getElementById('unhidden2');
        hidden.style.display='block';
 
})
// Rhombus part

//  Rectangle part 
 document.getElementById('btn-rectangle').addEventListener('click', function(){
     const rectangleInput1Value = inputValue1('rectangle-input1');
     const rectanglePushField1 = document.getElementById('rectanglePush-field1');
     rectanglePushField1.innerText = rectangleInput1Value;
    
     const rectangleInput2Value = inputValue2('rectangle-input2');
     const rectanglePushField2 = document.getElementById('rectanglePush-field2');
     rectanglePushField2.innerText = rectangleInput2Value;
    
     const multiRectangleValue = +((rectangleInput1Value * rectangleInput2Value).toFixed(2));
     const rectangleTotalPush = document.getElementById('rectangleTotal');
     if(isNaN(multiRectangleValue)){
         alert('Please give your input!!');
         rectangleTotalPush.innerText ='0';
         return;
         }
        rectangleTotalPush.innerText = multiRectangleValue; 
        const hidden =document.getElementById('unhidden3');
        hidden.style.display='block';
  
 })
 //  Rectangle part

//  Pentagon part
document.getElementById('btn-pentagon').addEventListener('click', function(){
     const pentagonInput1Value = inputValue1('pentagon-input1');
     const pentagonPushField1 = document.getElementById('pentagonPush-field1');
     pentagonPushField1.innerText = pentagonInput1Value;
    
     const pentagonInput2Value = inputValue2('pentagon-input2');
     const pentagonPushField2 = document.getElementById('pentagonPush-field2');
     pentagonPushField2.innerText = pentagonInput2Value;
    
     const multiPentagonValue = +((0.5 *pentagonInput1Value * pentagonInput2Value).toFixed(2));
     const pentagonTotalPush = document.getElementById('pentagonTotal');
     if(isNaN(multiPentagonValue)){
         alert('Please give your input!!');
         pentagonTotalPush.innerText ='0';
         return;
         }
         pentagonTotalPush.innerText = multiPentagonValue;
         const hidden =document.getElementById('unhidden4');
         hidden.style.display='block';
  
})
//  Pentagon part 

//  Parallelogram part 
document.getElementById('btn-parallelogram').addEventListener('click', function(){
     const parallelogramInput1Value = inputValue1('parallelogram-input1');
     const parallelogramPushField1 = document.getElementById('parallelogramPush-field1');
     parallelogramPushField1.innerText = parallelogramInput1Value;
    
     const parallelogramInput2Value = inputValue2('parallelogram-input2');
     const parallelogramPushField2 = document.getElementById('parallelogramPush-field2');
     parallelogramPushField2.innerText = parallelogramInput2Value;
    
     const multiParallelogramValue = +((parallelogramInput1Value * parallelogramInput2Value).toFixed(2));
     const parallelogramTotalPush = document.getElementById('parallelogramTotal');
     if(isNaN(multiParallelogramValue)){
         alert('Please give your input!!');
         parallelogramTotalPush.innerText ='0';
         return;
         }
         parallelogramTotalPush.innerText = multiParallelogramValue; 
         const hidden =document.getElementById('unhidden5');
        hidden.style.display='block';
  
 })
 // Parallelogram part

 //  Ellipse part 
document.getElementById('btn-ellipse').addEventListener('click', function(){
     const ellipseInput1Value = inputValue1('ellipse-input1');
     const ellipsePushField1 = document.getElementById('ellipsePush-field1');
     ellipsePushField1.innerText = ellipseInput1Value;
    
     const ellipseInput2Value = inputValue2('ellipse-input2');
     const ellipsePushField2 = document.getElementById('ellipsePush-field2');
     ellipsePushField2.innerText = ellipseInput2Value;
    
     const multiEllipseValue = +((3.14 * ellipseInput1Value * ellipseInput2Value).toFixed(2));;
     const ellipseTotalPush = document.getElementById('ellipseTotal');
     if(isNaN(multiEllipseValue)){
         alert('Please give your input!!');
         ellipseTotalPush.innerText ='0';
         return;
         }

        ellipseTotalPush.innerText = multiEllipseValue; 
        const hidden =document.getElementById('unhidden6');
        hidden.style.display='block';
  
 })
 // Ellipse part

//  background color changes

// card1 part 
document.getElementById('background-color1').addEventListener('mouseover', function(){
    const backgroundField = document.getElementById('background-color1');
    const colorCode = sixDigitColorCode();
    const colorHexCode ='#'+colorCode;
    backgroundField.style.backgroundColor=colorHexCode;
});

// card2 part  
document.getElementById('background-color2').addEventListener('mouseover', function(){
    const backgroundField = document.getElementById('background-color2');
    const colorCode = sixDigitColorCode();
    const colorHexCode ='#'+colorCode;
    backgroundField.style.backgroundColor=colorHexCode;
});

// card3 part 
document.getElementById('background-color3').addEventListener('mouseover', function(){
    const backgroundField = document.getElementById('background-color3');
    const colorCode = sixDigitColorCode();
    const colorHexCode ='#'+colorCode;
    backgroundField.style.backgroundColor=colorHexCode;
});

// card4 part 
document.getElementById('background-color4').addEventListener('mouseover', function(){
    const backgroundField = document.getElementById('background-color4');
    const colorCode = sixDigitColorCode();
    const colorHexCode ='#'+colorCode;
    backgroundField.style.backgroundColor=colorHexCode;
});

// card5 part 
document.getElementById('background-color5').addEventListener('mouseover', function(){
    const backgroundField = document.getElementById('background-color5');
    const colorCode = sixDigitColorCode();
    const colorHexCode ='#'+colorCode;
    backgroundField.style.backgroundColor=colorHexCode;
});

// card6 part 
document.getElementById('background-color6').addEventListener('mouseover', function(){
    const backgroundField = document.getElementById('background-color6');
    const colorCode = sixDigitColorCode();
    const colorHexCode ='#'+colorCode;
    backgroundField.style.backgroundColor=colorHexCode;
});

// card7 result part 
document.getElementById('background-color7').addEventListener('mouseover', function(){
    const backgroundField = document.getElementById('background-color7');
    const colorCode = sixDigitColorCode();
    const colorHexCode ='#'+colorCode;
    backgroundField.style.backgroundColor=colorHexCode;
});
//  background color changes 
 

  

 
