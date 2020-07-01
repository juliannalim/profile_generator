const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  rl.question('What\'s your name?', (answer1) => {
    rl.question('What\'s an activity you like doing?', (answer2) => {
      rl.question('What do you listen to while doing that?', (answer3) => {
        rl.question('Which meal is your favourite?', (answer4) => {
          rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
            rl.question('Which sport is your absolute favourite?', (answer6) => {
              rl.question('What is your superpower?', (answer7) => {
                console.log(`My name is ${answer1}. My unique ability is ${answer7}. I listen to ${answer3} and I like to do the activity: ${answer2}. I enjoy ${answer4} the most espeically when I eat ${answer5}. During my meals, I enjoy watching ${answer6} on the sports channel.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
  // console.log(`Thank you for your valuable feedback: ${answer}`);

  //rl.close();
});