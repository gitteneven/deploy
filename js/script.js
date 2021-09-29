{
    const $canvas = document.querySelector(`.canvas`);
    const ctx = $canvas.getContext(`2d`);


    const amount = 10;
    const width = $canvas.width / amount;
    let currentRect= 0; 
    let step = 1; 

    let r =0; 
    let g = 0;
    let b = 0;


    const animate = () => {
     const x = currentRect * width;
        ctx.fillStyle = `rgba(${r},${g},${b},0.1)`;
        ctx.fillRect(x, 0, width, $canvas.height);

        //draw the next rectangle
        currentRect++;

        //if all the rectangles are drawn 
        if (currentRect === amount){
            //start over again
            currentRect=0;
            //increase the total alpha
            step++;
            if(step === 10){
                step = 1;
                r = Math.random() * 255;
                g = Math.random() * 255;
                b = Math.random() * 255;
                ctx.clearRect(0,0, $canvas.width, $canvas.height);

            }
        }
        console.log(currentRect);


        requestAnimationFrame(animate); 
    }

    const init = () => {
        animate();
    };

    init();
}