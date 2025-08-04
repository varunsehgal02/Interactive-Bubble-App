document.addEventListener('DOMContentLoaded', function(){
    let position = 'absolute';
    let backgroundcolor = "#CCE8CC";
    
    class Circle{
        constructor(event){
            this.radius = Math.floor(Math.random() * 191 + 10);
            this.left = event.clientX - parseInt(this.radius/2)+ 'px';
            this.top = event.clientY - parseInt(this.radius/2)+ 'px';
        }

        styles() {
            return `
                <div id="container" = >
            `
        }
    }
})