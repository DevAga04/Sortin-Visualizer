//let delay = 30;
async function merge(bar, low, mid, high){
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await animate(delay);
        // color
        bar[low + i].style.background = 'orange';
        left[i] = bar[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await animate(delay);
        // color
        bar[mid + 1 + i].style.background = 'yellow';
        right[i] = bar[mid + 1 + i].style.height;
    }
    await animate(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await animate(delay);
        
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            // color
            if((n1 + n2) === bar.length){
                bar[k].style.background = 'green';
            }
            else{
                bar[k].style.background = 'lightgreen';
            }
            
            bar[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            // color
            if((n1 + n2) === bar.length){
                bar[k].style.background = 'green';
            }
            else{
                bar[k].style.background = 'lightgreen';
            } 
            bar[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await animate(delay);
        // color
        if((n1 + n2) === bar.length){
            bar[k].style.background = 'green';
        }
        else{
            bar[k].style.background = 'lightgreen';
        }
        bar[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await animate(delay);
        // color
        if((n1 + n2) === bar.length){
            bar[k].style.background = 'green';
        }
        else{
            bar[k].style.background = 'lightgreen';
        }
        bar[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(bar, l, r){
    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(bar, l, m);
    await mergeSort(bar, m + 1, r);
    await merge(bar, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let bar = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(bar.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(bar, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


