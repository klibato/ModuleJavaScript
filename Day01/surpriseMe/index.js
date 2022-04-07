function myFunction() {
    color=["green", "red", "blue", "grey"];
    index=Math.floor(Math.random()*color.length);
    document.body.style.backgroundColor=color[index];
}