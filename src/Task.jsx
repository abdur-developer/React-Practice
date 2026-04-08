export default function Task({name, isDone}){
    if(isDone === true){
        return <p>{name} --- done</p>
    }else{
        return <p>{name} --- kora dorkar</p>
    }
}


// export default function Task({name, isDone}){
//     return <p>{name} --- {isDone || "kora dorkar"}</p>
// }


// export default function Task({name, isDone}){
//     return <p>{name} --- {isDone && "done"}</p>
// }


// export default function Task({name, isDone}){
//     return <p>{name} --- {isDone ? "done": "kora dorkar"}</p>
// }