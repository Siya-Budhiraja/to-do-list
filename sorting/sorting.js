createNewArray();
function createNewArray(noOfBars = 60) {
    deleteChild(); 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array)
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = ${array[i]*2}px;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(barNo${i});
        bars.appendChild(bar);
    }
}


function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});