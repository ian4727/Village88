class Note{

    constructor(name, pitch){
        this.name = name;
        this.pitch = pitch;
    }

    static name_list = ['do', 're', 'mi', 'fa', 'sol', 'la', 'ti', 'do'];

    show(){
        return this;
    }
}

class Instrument{

    constructor(){
        this.record = [];
    }

    addnote(key, pitch){
        let note = new Note(key, pitch);
        this.record.push(note);
        return note;
    }

    removeLastNote(){
        this.record.pop();
    }

    changeNote(index, key, pitch){
        this.record[index] = [key, pitch];
    }

    shuffleRecord(){
        for(let i = this.record.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() + (i + 1));
            [this.record[i], this.record[j]] = [this.record[j], this.record[i]];
        }
    }

    autoCompose(number_of_notes){
        this.record = [];
        for(let i=0; i<number_of_notes; i++){
            let name = Note.name_list[Math.floor(Math.random() * Note.name_list.length)];
            let pitch = Math.ceil(math.random() * 7);
            let note = new Note(name, pitch);
            this.record.push(note);
        }
    }

    show_record(){
        console.log(this.record);
    }
}

class Piano extends Instrument{
    constructor(brand, model, color){
        super();
        this.brand = brand;
        this.model= model;
        this.color= color;
    }
}

class Xylophone extends Instrument{
    constructor(brand, model, color){
        super();
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}

let notes = document.getElementsByClassName('note');
let piano = new Piano('kawai', '12345', 'pink');

for(let i=0; i<notes.length; i++){
    notes[i].addEventListener('click', function(){
        let selected_instrument = this.getAttribute('instrument');
        let audio_extension = '';
        if(selected_instrument == 'piano'){
            audio_extension = 'mp3';
        }else if(selected_instrument == 'xylophone'){
            audio_extension = 'wav';
        }
        let audio = new Audio("./music/${this.getAttribute('instrument')}/${notes[i].getAttribute('note-value')}.${audio_extension}")
        audio.play();
        console.log(piano.addnote(notes[i].getAttribute('note-value'),1));
    })
}

function play_record(instrument,record){
    let selected_instrument = instrument.constructor.name.toLowerCase();
    let audio_extension = '';
    if(selected_instrument == 'piano'){
        audio_extension = 'mp3';
    }else if(selected_instrument == 'xylophone'){
        audio_extension = 'wav';
    }
    instrument.show_record();
    for(let i=0; i<record.length; i++){
        setTimeout(function(){
            let audio = new Audio(`./music/${selected_instrument}/${record[i].name}.${audio_extension}`)
            audio.play();

            console.log(record[i]);
        }, i * 500);    
    }
}

let random_notes_piano = document.getElementById('notes_quantity_piano');
random_notes_piano.addEventListener('input', function(){
    piano.autoCompose(parseInt(random_notes_piano.value));
})

let play_piano = document.getElementById('play_piano');
play_piano.addEventListener('click', function(){
    play_record(piano, piano.record);
})

let xylophone = new Xylophone('Tinker', '54321', 'green');
let random_notes_xylophone = document.getElementById('notes_quantity_xylophone');
random_notes_xylophone.addEventListener('input', function(){
    xylophone.autoCompose(parseInt(random_notes_xylophone.value));
})

let play_xylophone = document.getElementById('play_xylophone');
play_xylophone.addEventListener('click', function(){
    play_record(xylophone, xylophone.record);
})