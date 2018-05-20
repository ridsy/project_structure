export function addtodo(text){
    return {
        type:'ADD_TODO',
        text
    }
}

export function showtodo(){

    return {
        type:'SHOW_TODO'
    }
}