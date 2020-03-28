console.log('Hello world');
var readline = require ('readline'), rl = readline.createInterface(process.stdin,process.stdout);
rl.setPrompt('Inicio el programa: (on/off)');
rl.prompt()
rl.on('line', function(start){
    var start = start.trim();
    console.log('su computador esta: '+start);
});
rl.setPrompt('Quiere saber su edad (si/no): ');
rl.prompt()
rl.on(function(resp){
    switch(resp.trim()){
        case 'si':
            rl.setPrompt('ingrese el año de nacimiento: '), rl.prompt()
            rl.on('line', function(año){
                var año = int(año.trim())
                var edad = 2020 - año;
                console.log('la edad que tiene es : '+edad)
            })

        case 'no':
    }
})
