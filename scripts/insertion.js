async function insertion(){
    const bar = document.querySelectorAll(".bar");
    // color
    bar[0].style.background = 'green';
    for(let i = 1; i < bar.length; i++){
        let j = i - 1;
        let key = bar[i].style.height;
        // color
        bar[i].style.background = 'blue';

        await animate(delay);

        while(j >= 0 && (parseInt(bar[j].style.height) > parseInt(key))){
            // color
            bar[j].style.background = 'blue';
            bar[j + 1].style.height = bar[j].style.height;
            j--;

            await animate(delay);

            // color
            for(let k = i; k >= 0; k--){
                bar[k].style.background = 'green';
            }
        }
        bar[j + 1].style.height = key;
        // color
        bar[i].style.background = 'green';
    }
}

const insertionSortbtn = document.querySelector(".insertionSort");
insertionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


