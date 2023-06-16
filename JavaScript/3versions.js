//Traditional callbacks
function EmitRandomNumber() {
    let count = 1;
    let rand = Math.floor(Math.random() * 101);
    if (rand > 80) {
      console.log(`Attempt #${count}. EmitRandomNumber is called.`);
      console.log('2 seconds have lapsed.');
      console.log(`Random number generated is ${rand}`);
      return rand;
    } else {
      while (rand <= 80 && count < 10) {
        console.log(`Attempt #${count}. EmitRandomNumber is called.`);
        rand = Math.floor(Math.random() * 101);
        console.log('2 seconds have lapsed.');
        console.log(`Random number generated is ${rand}`);
        console.log('-----');
        count++;
        
      }
      
    }
  }
  
  setTimeout(function() {
    EmitRandomNumber();
  }, 2000);

  
//Promises
let count = 0;
function EmitRandomNumber() {
    return new Promise((resolve, reject) => {
    let rand = Math.floor(Math.random() * 101);
    if (rand > 80) {
      console.log(`Attempt #${count + 1}. EmitRandomNumber is called.`);
      console.log('2 seconds have lapsed.');
      console.log('Random number generated is ' + rand);
      resolve(rand);
    } else {
        let interval = setInterval(() => {
        rand = Math.floor(Math.random() * 101);
        console.log(`Attempt #${count + 1}. EmitRandomNumber is called.`);
        console.log('2 seconds have lapsed.');
        console.log('Random number generated is ' + rand);
        console.log('-----');
        count++;
        if (rand > 80 || count >= 10) {
            clearInterval(interval);
            if (rand > 80) {
                /*console.log(`Attempt #${count + 1}. EmitRandomNumber is called.`);
                console.log('2 seconds have lapsed.');
                console.log('Random number generated is ' + rand);
                resolve(rand);*/
            } else {
                reject(new Error('Failed to generate a random number below 80 in 10 attempts.'));
            }
        }
      }, 200);
    }
  });
}

setTimeout(() => {
  EmitRandomNumber()
    //.then(rand => console.log(rand))
    .catch(err => console.log(err.message));
}, 2000);



//Async and await
async function EmitRandomNumber() {
    let count = 1;
    let rand = Math.floor(Math.random() * 101);
    if (rand > 80) {
        console.log(`Attempt #${count}. EmitRandomNumber is called.`);
        console.log(`2 seconds have lapsed.`);
        console.log(`Random number generated is ${rand}`);
        return rand;
    } else {
        while (rand <= 80 && count < 10) {
        console.log(`Attempt #${count}. EmitRandomNumber is called.`);
        rand = Math.floor(Math.random() * 101);
        console.log(`2 seconds have lapsed.`);
        console.log(`Random number generated is ${rand}`);
        console.log(`-----`);
        count++;
        }
    }
}
    
async function main() {
await new Promise((resolve) => setTimeout(resolve, 2000));
await EmitRandomNumber();
}
    
main();

