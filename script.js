document.addEventListener('DOMContentLoaded', function () {
    let position = 'absolute';
    let backgroundcolor = "#CCE8CC";

    class Circle {
        constructor(event) {
            this.radius = Math.floor(Math.random() * 191 + 10);
            this.left = event.clientX - parseInt(this.radius / 2) + 'px';
            this.top = event.clientY - parseInt(this.radius / 2) + 'px';
        }

        styles() {
            return `
                <div class="circle" style='
                    position:${position};
                    top:${this.top};
                    left:${this.left};
                    width:${this.radius}px;
                    height:${this.radius}px;
                    border-radius:${this.radius}px;
                    background-color:${backgroundcolor};
                '></div>`;
        }
    }

    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('button')) {
            const circle = new Circle(event);
            document.getElementById('container').innerHTML += circle.styles();
        }
    });

    document.getElementById('pink').addEventListener('click', function () {
        backgroundcolor = "#ffc0cb";
        this.style.outline = "5px solid black";
        document.getElementById('purple').style.outline = 'none';
        document.getElementById('blue').style.outline = 'none';
        document.getElementById('reset').style.outline = 'none';
    });

    document.getElementById('purple').addEventListener('click', function () {
        backgroundcolor = "#ca45ca";
        this.style.outline = "5px solid black";
        document.getElementById('pink').style.outline = 'none';
        document.getElementById('blue').style.outline = 'none';
        document.getElementById('reset').style.outline = 'none';
    });

    document.getElementById('blue').addEventListener('click', function () {
        backgroundcolor = "#6868d4";
        this.style.outline = "5px solid black";
        document.getElementById('pink').style.outline = 'none';
        document.getElementById('purple').style.outline = 'none';
        document.getElementById('reset').style.outline = 'none';
    });

    document.getElementById('reset').addEventListener('click', function () {
        document.getElementById('container').innerHTML = '';
        this.style.outline = "5px solid black";
        document.getElementById('pink').style.outline = 'none';
        document.getElementById('purple').style.outline = 'none';
        document.getElementById('blue').style.outline = 'none';
    });
});
