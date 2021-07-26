async function selection() {
    
    const bar = document.querySelectorAll(".bar");
    
    for (let i = 0; i < bar.length; i++) {
    
        let min_index = i;
        
        // Current bar color
        bar[i].style.background = 'blue';
        
        for (let j = i + 1; j < bar.length; j++) {
        
            // Searching bar color
            bar[j].style.background = 'red';

            await animate(delay);
        
            if (parseInt(bar[j].style.height) < parseInt(bar[min_index].style.height)) {
        
                if (min_index !== i) {
                    // Normal bar color
                    bar[min_index].style.background = 'white';
                }
        
                min_index = j;
        
            } else {
                bar[j].style.background = 'white';
            }
        }

        await animate(delay);

        swap(bar[min_index], bar[i]);

        bar[min_index].style.background = 'white';

        //Sorted bar color
        bar[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");

selectionSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});