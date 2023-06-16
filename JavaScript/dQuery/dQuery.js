const $query = function(selector){
    const mini_library = {
        element: document.querySelectorAll(selector),
        hide: function(){
            for(let i=0 ; i<this.element.length; i++){
                this.element[i].style.display = 'none';
            }
        },
        show: function(){
            for(let i=0; i<this.element.length; i++){
                this.element[i].style.display = 'block';
            }
        },
        click: function(x){
            for(let i=0; i<this.element.length; i++){
                this.element[i].addEventListener('click', x);
            }
        }
    }
    return mini_library;
} 

//clicking on h1 should hide all the h1
$query('h1').click(function() {
    console.log('h1 is clicked');
    $query('h1').hide();
});

//clicking on p should hide all the paragraphs
$query('p').click(function() {
    console.log('p is clicked');
    $query('p').hide();
});
//clicking on #show_all should show both h1 and p
$query('#show_all').click(function() {
    console.log('#show_all is clicked');
    $query('h1').show();
    $query('p').show();
});
//clicking on #hide_all should hide both h1 and p
$query('#hide_all').click(function() {
    console.log('#hide_all is clicked');
    $query('h1').hide();
    $query('p').hide();
});
      