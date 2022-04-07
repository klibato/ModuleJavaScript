function my_timer(x){

    var index = {
        [Symbol.iterator](){
            return {
                i:0, 
                next(){
                    if (this.i < x) {
                        return { value: this.i --, done: false };
                        
                    }
                    return { value: undefined, done: true };
                }
            }
        }
    }
}
for (let value of index) {
    console.log(value);
  }