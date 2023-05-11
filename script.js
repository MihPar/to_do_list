const addTasks = document.createElement('button')
document.body.append(addTasks)
addTasks.innerText = 'Add tasks'

const resetTasks = document.createElement('button')
document.body.append(resetTasks)
resetTasks.innerText = 'Reset tasks'

const container = document.createElement('div')
document.body.append(container)
container.id = 'container'

addTasks.onclick = function() {
    for (let i = 0; i < 5; i++) {
        const div = document.createElement('div')
        div.innerText = i + 1
        container.append(div)
    }
}

resetTasks.onclick = function() {
    // while (container.firstChild) {
    //     console.log(container.firstChild)
    //     container.firstChild.remove()
    // }
    // while (container.lastChild) {
    //     console.log(container.lastChild)
    //     container.lastChild.remove()
    // }
    // while (container.firstChild) {
    //     console.log(container.lastChild)
    //     container.lastChild.remove()
    // }
    // while (container.childNodes.length > 0) {
    //     console.log(container.lastChild)
    //     container.lastChild.remove()
    // } 

    /************************. Так делать не надо. ************************************/

    // for (let div of container.childNodes) {
    //     div.remove()        
    // }
/*
Индекс  Должно быть     Должен вернуть      На самом деле   Возвращает
0       [1,2,3,4,5]     1                   [1,2,3,4,5]     1
1       [1,2,3,4,5]     2                   [2,3,4,5]       3
2       [1,2,3,4,5]     3                   [2,4,5]         5
3       [1,2,3,4,5]     4
4       [1,2,3,4,5]     5
*/

    const len = container.childNodes.length
    for (let i = 0; i < len; i++) {
        container.firstChild.remove()
    }
}
