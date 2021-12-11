
var last_position_of_x, last_position_of_y;
var mouseEvent="empty";
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    width =screen.width;

    new_width = screen.width-70;
    new_height = screen.height-300;

    if(width<992){
    document.getElementById('myCanvas').width=new_width;
        document.getElementById('myCanvas').height=new_height;
        document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart",my_touchstart);
    
    function my_touchstart(e)
    {
        
        color = document.getElementById("inputclr").value;
        width_of_line = document.getElementById("inputwdh").value;
       
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);

    
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
      

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;

        canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e) {
    color=document.getElementById("inputtclr").value;
    width=document.getElementById("inputwdh").value;
    mouseEvent="mousedown"; 
}
 canvas.addEventListener("mousemove",mymousemove);
 function mymousemove(e){
     current_position_of_x=e.clientX-canvas.offsetLeft;
     current_position_of_y=e.clientY-canvas.offsetTop;
     if(mouseEvent=="mousedown"){
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=width;
         ctx.moveTo(last_position_of_x,last_position_of_y);
         ctx.lineTo(current_position_of_x,current_position_of_y);
         ctx.stroke();
     }
     last_position_of_y=current_position_of_y;
     last_position_of_x=current_position_of_x;
 }
 canvas.addEventListener("mouseup",mymouseup);
 function mymouseup(e){
     mouseEvent="mouseup";
 }

 canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e){
     mouseEvent="mouseleave";
 }
    }
    function clear_area(){
       ctx.clearRect(0,0,canvas.width,canvas.height);
    }

