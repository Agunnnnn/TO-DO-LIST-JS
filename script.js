document.querySelector('#push').onclick = function() {
    if(document.querySelector('#NewTask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#Tasks').innerHTML += `
        <div class="Tasks 
            flex items-center 
            justify-between
            border 
            rounded-lg 
            font-bold
            text-1xl
            mt-5
            shadow-lg">
            <span id="taskname" 
                class = "task-text flex-1 text-center cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-1">
                ${document.querySelector('#NewTask input').value }
            </span>
            <button class="delete
            border 
            bg-[#243b55]
            py-[5px] px-[10px]
            rounded-lg
            ml-20">
            <i class="fa-solid fa-trash-can" style="color: #ffffff;"></i>
            </button>
        </div>
        `
        
        updateAllListeners();
        
        document.querySelector('#NewTask input').value = '';
    }
}

function updateAllListeners() {
    updateDeleteButtons();
    updateTaskTextListeners();
}

function updateDeleteButtons() {
    var current_task = document.querySelectorAll(".delete");
    for(var i=0; i < current_task.length; i++){
        current_task[i].onclick = function(){
            this.parentNode.remove();            
        }
    }
}

function updateTaskTextListeners() {
    var taskTexts = document.querySelectorAll(".task-text");
    for(var i=0; i < taskTexts.length; i++){
        taskTexts[i].onclick = function(){
            this.classList.toggle("completed");
        }
    }
}

Input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") updateTaskTextListeners();
})

updateAllListeners();
