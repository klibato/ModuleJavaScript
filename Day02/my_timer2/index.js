function my_timer2(x){
    var element = document.createElement('h1'); 
    setInterval(function(){
        if (x >=0 +1){
            console.log(x)
            
            element.innerHTML = x
            x--
        }},1000);
       
    document.body.appendChild(element);
    // document.getElementById("ID").appendChild(element);
    }