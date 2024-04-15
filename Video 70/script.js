// to fill in the boxes with random colors each time on refreshing the page
// rgba(0,0,0) -> rgba(255,255,255,1) it is the range of rbga parameters
// generate four random number in range 0 to 255 and 0 to 1 for each box and use those values as colors
document.querySelectorAll(".box").forEach(e=>{
    let r = Math.floor(Math.random()*(255-0+1)+1);
    let g = Math.floor(Math.random()*(255-0+1)+1);
    let b = Math.floor(Math.random()*(255-0+1)+1);
    let a = Math.random();
    e.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
})
