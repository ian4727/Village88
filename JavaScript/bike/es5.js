function Bike(price, max_speed){
    this.price = price;
    this.max_speed = max_speed;
    this.miles = 0;

    this.displayInfo = function(){
        console.log('=== Bike details: Price:'+this.price+' Maximum Speed:'+this.max_speed+' Total miles driven:'+this.miles+' ===');
    }
    
    this.drive = function(){
        console.log('=== DRIVING ===');
        this.miles += 10;
        return this;
    }
    
    this.reverse = function(){
        console.log('=== REVERSING ===');
        if(this.miles>0){
            this.miles -= 5;
        }else{
            this.miles = 'Not detected';
        }
        return this;
    }
}

const bike1 = new Bike(1000, 30);
const bike2 = new Bike(2000, 50);
const bike3 = new Bike(3000, 10);

bike1.drive().drive().drive().reverse().displayInfo();
bike2.drive().drive().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();