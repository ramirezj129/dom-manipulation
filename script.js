let items = []
document.getElementById('enter').addEventListener('click', () =>{

    first = document.getElementById('first').value
    second = document.getElementById('second').value


    if(first && second){

    items.push({task:first, description: second, likes: 0})
    updateTable()


    document.getElementById('first').value = ''
    document.getElementById('second').value = ''
    let alert =  document.getElementById('alert')
    alert.setAttribute("hidden", true)


    }
    else{

        let alert =  document.getElementById('alert')

        alert.removeAttribute("hidden")
      

    }


})



function updateTable(){

    const output = document.getElementById('output')
    output.innerHTML = ``

    
    items.sort((a,b) => b.likes - a.likes )

    mostLikedIndex = -1
    mostLiked = 0

    items.forEach((item,index)=>{
        if(item.likes > mostLiked){
            mostLiked = item.likes
            console.log(mostLiked)
            mostLikedIndex = index
            console.log(item)
    
        }


    })


  

    items.forEach((item,index) => {
        const row = document.createElement('tr')

        const taskCell = document.createElement('td')
        taskCell.textContent = item.task
        row.appendChild(taskCell)


        const descriptionCell = document.createElement('td')
        descriptionCell.textContent = item.description
        row.appendChild(descriptionCell)

        const actionCell = document.createElement('td')
        const deleteButton = document.createElement('button')
        const likeButton = document.createElement('button')
        let likeLabel = document.createElement('label')
        const dislikeButton = document.createElement('button')
        


        likeLabel.textContent = item.likes


        deleteButton.textContent = 'Delete'
        deleteButton.className = 'btn btn-danger'

        likeButton.textContent = 'Like'
        likeButton.className = 'btn btn-primary'

        dislikeButton.textContent = 'Dislike'
        dislikeButton.className = 'btn btn-warning'

        deleteButton.addEventListener('click', () =>{

            items.splice(index, 1)
            updateTable()

        })

        likeButton.addEventListener('click', () =>{

            item.likes++
            updateTable()

        })

        
        dislikeButton.addEventListener('click', () =>{
            if(item.likes > 0)
            item.likes--
            updateTable()

        })


        actionCell.classList.add('d-flex','align-items-center', 'justify-content-evenly')


        actionCell.appendChild(likeLabel)
        actionCell.appendChild(likeButton)
        actionCell.appendChild(dislikeButton)
        actionCell.appendChild(deleteButton)



    
        row.appendChild(actionCell)

        if(index === mostLikedIndex){
            taskCell.className = 'highlight'
            descriptionCell.className = 'highlight'
        }

        output.appendChild(row)

    })

}