console.log('Hello world');
var readline = require ('readline'), rl = readline.createInterface(process.stdin,process.stdout);
rl.setPrompt('Inicio el programa: (on/off)');
rl.prompt()
rl.on('line', function(start){
    switch(start.trim()){
        case 'on':
            console.log('su programa esta: '+String(start));
            break;
    };
});
