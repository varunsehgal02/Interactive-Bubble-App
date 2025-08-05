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

    // Utility to reset all outlines
    function clearOutlines() {
        ['pink', 'purple', 'blue', 'reset'].forEach(id => {
            document.getElementById(id).style.outline = 'none';
        });
    }

    document.getElementById('pink').addEventListener('click', function () {
        backgroundcolor = "#ffc0cb";
        clearOutlines();
        this.style.outline = "5px solid black";
    });

    document.getElementById('purple').addEventListener('click', function () {
        backgroundcolor = "#ca45ca";
        clearOutlines();
        this.style.outline = "5px solid black";
    });

    document.getElementById('blue').addEventListener('click', function () {
        backgroundcolor = "#6868d4";
        clearOutlines();
        this.style.outline = "5px solid black";
    });

    document.getElementById('reset').addEventListener('click', function () {
        document.getElementById('container').innerHTML = '';
        clearOutlines();
        this.style.outline = "5px solid black";
    });

    // Fade function to shrink and remove circles
    const fade = () => {
        const circles = document.getElementById('container').children;

        for (const circle of [...circles]) {
            let height = parseInt(circle.style.height.replace('px', ''));
            if (height <= 0) {
                circle.remove();
                continue;
            }
            height--;
            const width = height;
            circle.style.height = `${height}px`;
            circle.style.width = `${width}px`;
        }
    };

    window.setInterval(fade, 50);
});
