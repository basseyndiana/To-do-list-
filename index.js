const input = document.getElementById('taskinput');

const addBtn=document.getElementById('addBtn');
const listEl=document.getElementById('tasklist');
addBtn.addEventListener('click', 
        function() {
                
            const taskText=input.value;
            console.log(taskText)
            if(taskText==="") return;
            const li = document.createElement("li");
          
            li.textContent=taskText;
            listEl.appendChild(li)
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
});
            const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Del";
deleteBtn.style.width="px"
deleteBtn.style.backgroundColor="red";
deleteBtn.style.position="absolute"
deleteBtn.style.right="2.5em"
deleteBtn.style.bottom="7px"


deleteBtn.style.alignItems="left"

deleteBtn.addEventListener("click", function () {
    li.remove();
});

li.appendChild(deleteBtn);
                    
            input.value=""
        }
)