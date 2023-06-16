document.addEventListener('DOMContentLoaded', function(){
    let position = 'absolute';
    let backgroundcolor = '#CCE8CC';
    let outline = 'black';

    function Circle(event){
        var radius = Math.floor(Math.random() * 191 + 10);
        var left = (event.clientX - radius / 2) + 'px';
        var top = (event.clientY - radius / 2) + 'px';

        this.styles = function(){
            return `<div id='container' style='position:${position}; top:${top}; left:${left}; width:${radius}px; height:${radius}px; border-radius: ${radius}px; background-color: ${backgroundcolor}'</div> `;
            console.log(style);
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

    function fade(){
        var circles = document.getElementById('container').children;
        for(circle of circles){
          var height = parseInt(circle.style.height);
          if(height <= 0){
            circle.remove();
          }
          height--;
          var width = height;
          circle.style.height = `${height}px`;
          circle.style.width = `${width}px`;
        }
      }
      window.setInterval(fade, 50);
      
});
