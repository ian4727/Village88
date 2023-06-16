/*let colors = document.querySelectorAll('.color');
let shapes = document.querySelectorAll('.shape');
document.addEventListener('DOMContentLoaded', function(){
    let position = 'absolute';
    let backgroundcolor = '#CCE8CC'; 

    class Selector{
        constructor(container, colors, shapes){
            this.container = container;
            this.colors = colors;
            this.shapes = shapes;
        }

        selectShape(){
            let shape = document.createElement('div');
            shape.classList.add(this.colors);
            return shape;
        }
    }

    class Circle extends Selector{
        constructor(container, colors, shapes){
            super(colors, shapes);
            //const contained = container.getBoundingClientRect();
            this.radius = Math.floor(Math.random() * 191 + 10) + 'px';
            this.left = (event.clientX) - (parseInt(this.radius) / 2) + 'px';
            this.top = (event.clientY) - (parseInt(this.radius) / 2) + 'px';
        }
      
        styles(){
            return `<div id='display' style='position:${position}; top:${this.top}; left:${this.left}; width:${this.radius}; height:${this.radius}; border-radius: ${this.radius}; background-color: ${backgroundcolor}'></div> `;
        }

        create(){
            let circle_element = this.select_shape();
            this.container.appendChild(circle_element);
        }
      }
      
    class Square extends Selector{
        constructor(container, colors, shapes){
            super(colors, shapes);
            this.size = Math.floor(Math.random() * 191 + 10) + 'px';
            this.left = (event.clientX) - (parseInt(this.size) / 2) + 'px';
            this.top = (event.clientY) - (parseInt(this.size) / 2) + 'px';
        }

        styles(){
            return `<div id='display' style='position:${position}; top:${this.top}; left:${this.left}; font-size:${this.size}; background-color: ${backgroundcolor}'></div> `;
        }

        create(){
            let square_element = this.select_shape();
            this.container.appendChild(square_element);
        }
    }

    class Star extends Selector{
        constructor(container, colors, shapes){
            super(colors, shapes);
            this.size = Math.floor(Math.random() * 191 + 10) + 'px';
            this.left = (event.clientX) - (parseInt(this.size) / 2) + 'px';
            this.top = (event.clientY) - (parseInt(this.size) / 2) + 'px';
        }

        styles(){
            return `<div id='display' style='position:${position}; top:${this.top}; left:${this.left}; width:${this.size}; height:${this.size}; color: ${backgroundcolor}'>&#9733;</div> `;
        }

        create(){
            let star_element = this.select_shape();
            this.container.appendChild(star_element);
        }
    }


    /*document.getElementById('container').addEventListener('click', function(event){   
        let circle = new Circle(event, colors, shapes);
        let square = new Square(event, colors, shapes);
        let star = new Star(event, colors, shapes);
        /*document.getElementById('container').innerHTML += circle.styles();
        document.getElementById('container').innerHTML += square.styles();
        document.getElementById('container').innerHTML += star.styles();
        let newShapeContainer = document.createElement('div');
        newShapeContainer.innerHTML += circle.styles();
        newShapeContainer.innerHTML += square.styles();
        newShapeContainer.innerHTML += star.styles();
        /* + square.styles() + star.styles();
        document.getElementById('container').appendChild(newShapeContainer);
    });

    document.getElementById('container').addEventListener('click', function(event){   
        let circle = new Circle(event, colors, shapes);
        let square = new Square(event, colors, shapes);
        let star = new Star(event, colors, shapes);
        document.getElementById('container').appendChild(circle.styles());
        document.getElementById('container').appendChild(square.styles());
        document.getElementById('container').appendChild(star.styles());
    }); 

    

    */

    let colors = document.querySelectorAll('.color');
    let shapes = document.querySelectorAll('.shape');
    document.addEventListener('DOMContentLoaded', function(){
        let position = 'absolute';
        let backgroundcolor = '#CCE8CC'; 
    
        class Selector{
            constructor(container, colors, shapes){
                this.container = container;
                this.colors = colors;
                this.shapes = shapes;
            }
    
            selectShape(){
                let shape = document.createElement('div');
                shape.classList.add('shape');
                return shape;
            }
        }
    
        class Circle extends Selector{
            constructor(event, container, colors, shapes){
                super(container, colors, shapes);
                this.radius = Math.floor(Math.random() * 191 + 10) + 'px';
                this.left = (event.clientX) - (parseInt(this.radius) / 2) + 'px';
                this.top = (event.clientY) - (parseInt(this.radius) / 2) + 'px';
            }
          
            styles(){
                return `<div id='display' style='position:${position}; top:${this.top}; left:${this.left}; width:${this.radius}; height:${this.radius}; border-radius: ${this.radius}; background-color: ${backgroundcolor}'></div> `;
            }
    
            create(){
                let circle_element = this.selectShape();
                circle_element.innerHTML = this.styles();
                this.container.appendChild(circle_element);
            }
        }
          
        class Square extends Selector{
            constructor(event, container, colors, shapes){
                super(container, colors, shapes);
                this.size = Math.floor(Math.random() * 191 + 10) + 'px';
                this.left = (event.clientX) - (parseInt(this.size) / 2) + 'px';
                this.top = (event.clientY) - (parseInt(this.size) / 2) + 'px';
            }
    
            styles(){
                return `<div id='display' style='position:${position}; top:${this.top}; left:${this.left}; width:${this.size}; height:${this.size}; background-color: ${backgroundcolor}'></div> `;
            }
    
            create(){
                let square_element = this.selectShape();
                square_element.innerHTML = this.styles();
                this.container.appendChild(square_element);
            }
        }
    
        class Star extends Selector{
            constructor(event, container, colors, shapes){
                super(container, colors, shapes);
                this.size = Math.floor(Math.random() * 191 + 10) + 'px';
                this.left = (event.clientX) - (parseInt(this.size) / 2) + 'px';
                this.top = (event.clientY) - (parseInt(this.size) / 2) + 'px';
            }
    
            styles(){
                return `<div id='display' style='position:${position}; top:${this.top}; left:${this.left}; width:${this.size}; height:${this.size}; color: ${backgroundcolor}'></div> `;
            }
        }

        const colors = document.querySelectorAll('.color');
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

    const shapes = document.querySelectorAll('.shape');
    for(const shape of shapes){
        shape.addEventListener('click', function(event){
            for(const a of shapes){
                a.style.outline = 'none';
            }
            this.style.outline = '2px solid gray';
            this.style.backgroundColor = this.color;
            
            switch (this.id) {
            case 'circle':
                
                break;
            case 'square':
                
                break;
            case 'star':
                
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
    window.setInterval(fade, 50);

    

});

