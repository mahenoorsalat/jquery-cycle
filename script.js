$(document).ready(function () {
    
    $('#shuffle').cycle({ 
        fx: 'shuffle',
        easing: 'easeOutBack',
        delay: -4000, 
        timeout: 2000, 
        next: '.arrowRight img', 
        prev: '.arrowleft img' 
    });
});
