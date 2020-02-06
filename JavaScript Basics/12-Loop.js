// For Loop

for(var i=0;i<10;++i){
    console.log(i);
}

// While Loop

let a = 10;

while(a>0){
    console.log(a);
    --a;
}


// For Each Loop

const heroes = ['Superman','Batman','Antman','Deadpool'];

heroes.forEach(function(hero){      // Callback Function acts as Argument
    console.log(hero);
    
})