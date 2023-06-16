<script>
$(document).ready(function() {
    $('img').on('click', function(){
        let src = $(this).attr('src');
        let altSrc = $(this).attr('data-alt-src');
    
        $(this).attr('src', altSrc);
        $(this).attr('data-alt-src', src);
     })

});
</script>