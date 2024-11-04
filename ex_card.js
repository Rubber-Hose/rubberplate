
const newbutton = document.getElementById('button_new');
newbutton.addEventListener('click',addSW)
//function doMath = calculate the total weight between all the sets
function doMath() {
    //get all the elements in class set
    const totset = document.getElementsByClassName("set");
    //get all the elements in class weight
    const totweight = document.getElementsByClassName("weight");
    let totalProduct = 0;
    //parse all the elements in class set and weight as floats
    for (let i = 0; i < totset.length; i++) {
        const setValue = parseFloat(totset[i].value) || 0;
        const weightValue = parseFloat(totweight[i].value) || 0;
        //total product between everything adding between different sets
        totalProduct += setValue * weightValue;
    }
    //Return the total product
    document.getElementById('result').innerText = `Total Set Weight: ${totalProduct}`;
}
//function addSW
function addSW(){
    //create a new element div
    const newSW = document.createElement('div');

    //create a new element input
    const newset = document.createElement("input");
    //give to the element input type + className + placeHolder
    newset.type="number";
    newset.className="set";
    newset.placeholder="Set"
    const newweight = document.createElement("input");
    //give to the element input type + step + className + placeHolder
    newweight.type="number";
    newweight.step="0.01";
    newweight.className="weight";
    newweight.placeholder="Weight";


    const done = document.createElement("button")
    done.value = "do Math"
    done.onclick = doMath();
    //append newset and newweight as children
    newSW.appendChild(newset)
    newSW.appendChild(newweight)

    document.getElementById("newsw").appendChild(newSW);


}
//adds reset after click on button
document.getElementById('new').addEventListener('click', () => {
    const button = document.getElementById('new');

    // Remove the animation class to reset it
    button.classList.remove('button-animation-one');

    // Trigger reflow to restart the animation
    void button.offsetWidth;

    // Add the animation class back
    button.classList.add('button-animation-one');
});


