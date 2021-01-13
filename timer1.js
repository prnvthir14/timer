// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

//need to get and store command line args
var beepAfterThisManySecondsInput = process.argv.slice(2);
console.log(beepAfterThisManySecondsInput)
let validTimes = []
//convert to numbers
//and push valid arguemnts to be used later in setTimeout
for (let x of beepAfterThisManySecondsInput){
  //console.log(isNaN(x))
  if ((beepAfterThisManySecondsInput.length === 1 && beepAfterThisManySecondsInput[0]==='') || Number(x) < 0 || (isNaN(x))){

    //do nothing

    } else {

      //push to validTimes //works
      setTimeout(() => {

      process.stdout.write('\x07');
  
    },x*1000)
    
  }
}



//try to lump conditions in one line