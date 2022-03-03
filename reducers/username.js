export default function(username = "", action){
    console.log(action)
    if(action.type == 'addUsername'){
        return action.username
    } else {
        return username
    }
}