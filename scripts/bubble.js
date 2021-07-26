async function bubble() {
    const bar = document.querySelectorAll(".bar");
    for(let i = 0; i < bar.length-1; i++){
        for(let j = 0; j < bar.length-i-1; j++){
            bar[j].style.background = 'blue';
            bar[j+1].style.background = 'blue';
            if(parseInt(bar[j].style.height) > parseInt(bar[j+1].style.height)){
                await animate(delay);
                swap(bar[j], bar[j+1]);
            }
            bar[j].style.background = 'white';
            bar[j+1].style.background = 'white';
        }
        bar[bar.length-1-i].style.background = 'green';
    }
    bar[0].style.background = 'green';
}

const bubbleSortbtn = document.querySelector(".bubbleSort");
bubbleSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
