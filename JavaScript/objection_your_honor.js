class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Prosecutor extends Person{
    constructor(name, age){
        super(name, age);
    }
    
    prosecute(defendant, courtCase){
        this.defendant = defendant;
        this.case = courtCase;   
    }  
}

class Defendant extends Person{
    constructor(name, age, title){
        super(name, age);
        console.log('Name: '+name);
        console.log('Age: '+age+' years old');  
        
        this.case = new Case(title, 0, 0, 0, 0, 0);
        console.log('Case Title: ' + title);
    }
}

class Case{
    constructor(title, years, months, days, minAge, maxAge){
        this.title = title;
        this.imprisonmentTerm = new Date();
        this.imprisonmentTerm.setFullYear(this.imprisonmentTerm.getFullYear() + years);
        this.imprisonmentTerm.setMonth(this.imprisonmentTerm.getMonth() + months);
        this.imprisonmentTerm.setDate(this.imprisonmentTerm.getDate() + days);
        this.ageLimit = { minAge, maxAge };
    }

    computeReleaseDate(verdict){
        let releaseDate = new Date(this.imprisonmentTerm);
        if(verdict === 'guilty'){
            releaseDate.setDate(releaseDate.getDate() + 1); 
        }
        releaseDate.setDate(releaseDate.getDate() + 14); 
        return releaseDate.toLocaleDateString();
    }  
}

class TrialCourt{
    static initiateTrial(defendant, prosecutor, courtCase){
        if (defendant.age > 18) {
            this.verdict = 'guilty';
            console.log('Filed by: '+prosecutor.name)
            console.log('Verdict: GUILTY');
            
            const releaseDate = courtCase.computeReleaseDate(this.verdict);
            console.log(`Release date: ${releaseDate}`);
            this.releaseDate = releaseDate;
        } else {
            this.verdict = 'not guilty';
            console.log('Verdict: NOT GUILTY');
        }
    }

    static getVerdict(defendant){
    }
}

let case1 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor = new Prosecutor ("John", 30);
let defendant2 = new Defendant ("Onel", 25);

prosecutor.prosecute(defendant2, case1);
TrialCourt.initiateTrial(defendant2, prosecutor, case1); 