document.addEventListener('DOMContentLoaded', function(){
    let position = 'absolute';
    let backgroundcolor = '#CCE8CC';
    let outline = 'black';

    class Circle{
        constructor(event){
            this.radius = Math.floor(Math.random() * 191 + 10);
            this.left = event.clientX - parseInt(this.radius / 2) + 'px';
            this.top = event.clientY - parseInt(this.radius / 2) -80; + 'px';
        }

        styles(){
            return `<div id='container' style='position:${position}; top:${this.top}; left:${this.left}; width:${this.radius}px; height:${this.radius}px; border-radius: ${this.radius}px; background-color: ${backgroundcolor}'</div> `;
        }
    }

    document.getElementById('container').addEventListener('click', function(event){   
        let circle = new Circle(event);
        document.getElementById('container').innerHTML += circle.styles();
    });

    document.getElementById('pink').addEventListener('click', function(event){
        this.style.outline = '2px solid gray';
        purple.style.outline = 'none';
        blue.style.outline = 'none';

        backgroundcolor = '#ffc0cb';   
    });

    document.getElementById('purple').addEventListener('click', function(event){
        this.style.outline = '2px solid gray';
        pink.style.outline = 'none';
        blue.style.outline = 'none';
        
        backgroundcolor = '#ca45ca';
    });

    document.getElementById('blue').addEventListener('click', function(event){
        this.style.outline = '2px solid gray';
        purple.style.outline = 'none';
        pink.style.outline = 'none';
        
        backgroundcolor = '#6868d4';
    });

    document.getElementById('reset').addEventListener('click', function(event){
        this.style.outline = '2px solid gray';
        purple.style.outline = 'none';
        pink.style.outline = 'none';
        blue.style.outline = 'none';
        document.getElementById('container').innerHTML = '';
    });

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





      

        

        
   