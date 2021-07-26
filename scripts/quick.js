
async function partitionLomuto(bar, l, r){
    let i = l - 1;
    // color pivot element
    bar[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        // color current element
        bar[j].style.background = 'yellow';
        // pauseChamp
        await animate(delay);

        if(parseInt(bar[j].style.height) < parseInt(bar[r].style.height)){
            i++;
            swap(bar[i], bar[j]);
            // color 
            bar[i].style.background = 'orange';
            if(i != j) bar[j].style.background = 'orange';
            // pauseChamp
            await animate(delay);
        }
        else{
            // color if not less than pivot
            bar[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await animate(delay);
    swap(bar[i], bar[r]); // pivot height one
    // color
    bar[r].style.background = 'pink';
    bar[i].style.background = 'green';

    // pauseChamp
    await animate(delay);
    
    // color
    for(let k = 0; k < bar.length; k++){
        if(bar[k].style.background != 'green')
            bar[k].style.background = 'white';
    }

    return i;
}

async function quickSort(bar, l, r){
    if(l < r){
        let pivot_index = await partitionLomuto(bar, l, r);
        await quickSort(bar, l, pivot_index - 1);
        await quickSort(bar, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <bar.length && r <bar.length){
            bar[r].style.background = 'green';
            bar[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let bar = document.querySelectorAll('.bar');
    let l = 0;
    let r = bar.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(bar, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});