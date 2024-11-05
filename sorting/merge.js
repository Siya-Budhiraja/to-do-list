else {
    ele[k].style.background = 'lightgreen';
}
ele[k].style.height = right[j];
j++;
k++;
}

async function mergeSort(ele, l, r){
console.log('In mergeSort()');
if(l >= r){
console.log(return cause just 1 elemment l=${l}, r=${r});
return;
}
const m = l + Math.floor((r - l) / 2);
console.log(left=${l} mid=${m} right=${r}, typeof(m));
await mergeSort(ele, l, m);
await mergeSort(ele, m + 1, r);
await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
let ele = document.querySelectorAll('.bar');
let l = 0;
let r = parseInt(ele.length) - 1;
disableSortingBtn();
disableSizeSlider();
disableNewArrayBtn();
await mergeSort(ele, l, r);
enableSortingBtn();
enableSizeSlider();
enableNewArrayBtn();
});