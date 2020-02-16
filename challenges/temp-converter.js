console.log('tempConverter script has loaded');

// write this function!
function tempConverter(temp, deg) {
  console.log("degree " + deg)
  
  if(String(deg) === 'farenheit'){
    return (((Number(temp))*1.8)+32);
  }
  else if(String(deg).toLowerCase() === 'celcius'){
    return Number(((Number(temp)-32)*5/9).toFixed(2));
  } else{
    return deg + " is not supported"
  }
  
}
debugger

// if the user wants to convert to farenheit
console.assert(tempConverter(53, 'farenheit') === 127.4, 'first');
console.assert(tempConverter(0, 'farenheit') === 32, 'second');
console.assert(tempConverter(-40, 'farenheit') === -40, 'third');

// if the user wants to convert to celcius
console.assert(tempConverter(0, 'celcius') === -17.78, 'fourth result = ' +tempConverter(0, 'celcius')+ " expected: -17.78" );
console.assert(tempConverter(4, 'celcius') == -15.56, 'fifth');
console.assert(tempConverter(12.4, 'celcius') == -10.89, 'sixth');

// if the user inputs an invalid degree
console.assert(tempConverter(34, 'toad') === 'toad is not supported', 'seventh');
console.assert(tempConverter(2.5, '') === ' is not supported', 'eighth');
console.assert(tempConverter(500, 'Farenheit') === 'Farenheit is not supported', 'ninth');

function tempConverterHandler() {
  // prompt the user for a noun, verb and adjective
  const userTempStr = prompt('enter a temperature to convert');
  // cast userDegreesStr to a Number, and assign the value to userDecrees
  const userDegrees = prompt('would you like to convert to farenheit(f) or celcius(c)?');
  console.assert(typeof userDegrees === 'string', "don't forget to cast userDegrees to a string!");

  // perform core logic
  let result = tempConverter(userTempStr,userDegrees);

  // write this line!

  // alert result for the user
  alert(`${userTempStr}${userDegrees ==="farenheit" ? "celcius": "farenheit"} = ${result} ${userDegrees}`)
  // write this line!

  // log action for the developer
  console.log('\n--- tempConverter ---');
  console.log('userTemp:', '(' + typeof userTemp + '),', userTemp);
  console.log('userDegrees:', '(' + typeof userDegrees + '),', userDegrees);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('temp-converter-button').addEventListener('click', tempConverterHandler);
