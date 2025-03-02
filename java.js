document.getElementById("change-color")
.addEventListener("click",function(){
    const color =['Red','Green','Blue'];
})

function btn(Id) {
    const task = document.getElementById("task-count").innerText;
    const convertedtask = parseInt(task);

    const good = document.getElementById("good").innerText;
    const convertedgood = parseInt(good);

    let newTaskCount = convertedtask - 1;
    let newGoodCount = convertedgood + 1;

    document.getElementById("task-count").innerText = newTaskCount;
    document.getElementById("good").innerText = newGoodCount;

    const button = document.getElementById(Id);
    button.disabled = true;
    button.style.backgroundColor = "#d3d3d3"; 

    alert('Board updated Successfully');
    if(newTaskCount === 0){
        alert("All the task completed")
    }

    let catchId = document.getElementById("header-1");
    let gotHeader = catchId.innerText;
    let catchAppend = document.getElementById("append");
    const p = document.createElement("p");
    p.classList.add(
        "p-4",
        "bg-gray-100",
        "rounded-lg",
        "mr-12",
        "mt-6"
    )
    p.innerText =`You have complete the ${gotHeader}`
    catchAppend.appendChild(p);

}


for (let i = 1; i <= 6; i++) {
    const buttonId = "completed-" + i;
    document.getElementById(buttonId).addEventListener("click", function() {
        btn(buttonId); 
    });
}





