var ninja1 = {
  hp: 100,
  strength: 15,
  attack: function() {
     return Math.floor(Math.random() * this.strength + 1);
  }
}
//console.log(ninja1.attack()); 
var ninja2 = {
  hp: 100,
  strength: 10,
  attack: function() {
     return Math.floor(Math.random() * this.strength + 1);
  }
}

let round = 1;
for(i=1; i<=10; i++){
    console.log('===Round '+round+'===');
    let damage = ninja1.attack();
    ninja2.hp -= damage;
    console.log('Ninja1 attacks Ninja2 and does a damage of '+damage+'! Ninja1 health: '+ninja1.hp+'. Ninja2 health: '+ninja2.hp);
    
    damage = ninja2.attack();
    ninja1.hp -= damage;
    console.log('Ninja2 attacks Ninja1 and does a damage of '+damage+'! Ninja1 health: '+ninja1.hp+'. Ninja2 health: '+ninja2.hp);
    round++;
}
if(ninja1.hp > ninja2.hp){
    console.log('Ninja1 WINS!!!');
}else{
    console.log('Ninja2 WINS!!!');
}