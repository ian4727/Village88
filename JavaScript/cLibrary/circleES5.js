document.addEventListener('DOMContentLoaded', function(){
    let position = 'absolute';

    function getRandomColor(){
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    function Circles(event){
        this.radius = Math.floor(Math.random() * 200 + 10) + 'px';
        this.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        this.top = Math.floor(Math.random() * window.innerHeight) + 'px';
        this.color = getRandomColor();
        console.log(getRandomColor(), this.radius);

        this.styles = function(){
            return `<div id='canvass' style='position:${position}; top:${this.top}; left:${this.left}; width:${this.radius}; height:${this.radius}; border-radius: 50%; background-color: ${this.color}'></div> `;
        }
    }

    document.getElementById('button').addEventListener('click', function(event){
        for (let i = 0; i < 100; i++) {
          let cLib = new Circles(event);
          document.getElementById('canvass').innerHTML += cLib.styles();
        }
      });   
      
    const fade = () => {
        const circles = document.getElementById('canvass').children;
        let height = 0;
        for (const circle of circles) {
            let height = parseInt(circle.style.height);
            if (height <= 200) {
                circle.style.opacity = 3 - height / 200;
            }else{
                circle.remove();
            }
            height++;
            const width = height;
            circle.style.height = `${height}px`;
            circle.style.width = `${width}px`;
        }
    };
    window.setInterval(fade, 50);
    
    // draw 100 circles on #canvas
    //cLib.draw_circles("canvas");
// any other code you need to make this work
});