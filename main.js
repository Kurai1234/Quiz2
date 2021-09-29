$(document).ready(()=>{


    const $content =$('.paragraph');
    
   
    
    $('.readmorebutton').on('click', () => {
    $content.show();
    });
    
    $('.readlessbutton').on('click', () => {
    $content.hide();
    });
    
    
    $($content).mouseover(function(){
    
    $content.css("background","green");
    
    });
    $($content).mouseout(function(){
    
        $content.css("background","#356ba2");
        
        });
        
    
        });