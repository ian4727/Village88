document.addEventListener('DOMContentLoaded', function(){
    let position = 'absolute';
    let backgroundcolor = '#CCE8CC';
    let outline = 'black';

    class Circle{
        constructor(event){
            this.radius = Math.floor(Math.random() * 191 + 10) + 'px';
            this.left = event.clientX - (this.radius / 2) + 'px';
            this.top = event.clientY - (this.radius / 2) -80; + 'px';
        }

        styles(){
            return `<div id='container' style='position:${position}; top:${this.top}; left:${this.left}; width:${this.radius}; height:${this.radius}; border-radius: ${this.radius}; background-color: ${backgroundcolor}'</div> `;
        }
    }

    document.getElementById('container').addEventListener('click', function(event){   
        let circle = new Circle(event);
        document.getElementById('container').innerHTML += circle.styles();
    });

    const colors = document.querySelectorAll('#pink, #purple, #blue, #reset');

    for(const color of colors){
        color.addEventListener('click', function(event){
            for(const b of colors){
                b.style.outline = 'none';
            }
            this.style.outline = '2px solid gray';
            switch (this.id){
            case 'pink':
                backgroundcolor = '#ffc0cb';
                break;
            case 'purple':
                backgroundcolor = '#ca45ca';
                break;
            case 'blue':
                backgroundcolor = '#6868d4';
                break;
            case 'reset':
                document.getElementById('container').innerHTML = '';
                backgroundcolor = '#CCE8CC';
                break;
            }
        });
    } 

    for(const shape of shapes){
        shape.addEventListener('click', function(event){
            for(const a of shapes){
                a.style.outline = 'none';
            }
            this.style.outline = '2px solid gray';
            switch (this.id){
            case '':
                backgroundcolor = '#ffc0cb';
                break;
            case 'purple':
                backgroundcolor = '#ca45ca';
                break;
            case 'blue':
                backgroundcolor = '#6868d4';
                break;
            case 'reset':
                document.getElementById('container').innerHTML = '';
                backgroundcolor = '#CCE8CC';
                break;
            }
        });
    } 

    


    const fade = () => {
        const circles = document.getElementById('container').children;
        for (const circle of circles) {
            let height = parseInt(circle.style.height);
            if (height <= 0) {
            circle.remove();
            }
            height--;
            const width = height;
            circle.style.height = `${height}px`;
            circle.style.width = `${width}px`;
        }
    };
    window.setInterval(fade, 100);

});





      

        

        
   