 $(document).ready(function() {
       
    $('#carousel-1').owlCarousel({

    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            dots:false,
            loop:true
        }
    }
});


    $('#carousel-2').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            loop:true
        }
    }
});
      $('#carousel-3').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            loop:true,
            dots:false
        }
    }
});






     });

    $(document).ready(function(){
        // $("#div").click(function(){
        //     alert("vvdfv");
        //       var d=document.getElementById('div');
        //       d.innerHTML +="<br></br><option name='subcategory2' value='subcategory2'>Sub Category-2</option><br></br>"
        //       alert("sdvds");
        // });

        var current = 1,current_step,next_step,steps;
        steps = $("fieldset").length;
        $(".next").click(function(){
            current_step = $(this).parent();
            next_step = $(this).parent().next();
            next_step.show();
            current_step.hide();
            // setProgressBar(++current);

            // if(6 <= current && 10>current){
            //     span.innerText=current-5;
            //     document.getElementById("step").innerText=4

            // }
            // else{
            //     span.innerText=current;
            // }
        });
      
        $(".previous").click(function(){
            current_step = $(this).parent();
            next_step = $(this).parent().prev();
            next_step.show();
            current_step.hide();
            // setProgressBar(--current);
            // if(6 <= current && 10>current){
            //     span.innerText=current-5;
            //     document.getElementById("step").innerText=4
            // }
            // else{
            //     span.innerText=current;
            // }
        });
      
        // setProgressBar(current);
        // // Change progress bar action
        // function setProgressBar(curStep){
        //     var percent = parseFloat(100 / steps) * curStep;
        //     percent = percent.toFixed();
        //     $(".progress-bar")
        //         .css("width",percent+"%")
        //         .html(percent+"%");
        // }
        // $( "#regiration_form" ).submit(function(event) {
        //     jQuery('.alert-success').removeClass('hide').html( "Handler for .submit() called and see console logs for your posted variable" );
        //     console.log($(this).serialize());
        //     event.preventDefault();
        // });
        // document.getElementsByClassName("current_page").textContent=current;
    });