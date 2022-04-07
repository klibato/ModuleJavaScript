function my_timer(x){
    setInterval(function(){
        if (x >=0){
            console.log(x)
            x--
        }},1000);
    }