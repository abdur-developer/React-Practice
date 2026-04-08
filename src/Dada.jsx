import Task from "./Task"

export default function Dada({ msg }) {
    let hrStyle = {
        width: "100%",
        height: "5px",
        margin: "10px 0",
        backgroundColor: "red"
    }
    const tasks = ["Vat khaoa", "Gosol kora", "Gumano", "Walk in Road"];
    const tasksObj = [
        { name: "Vat khaoa", isDone: true },
        { name: "Gosol kora", isDone: true },
        { name: "Gumano", isDone: false },
        { name: "Walk in Road", isDone: false }
    ]
    return (
        <>
            <h3>Dadaaahhhhhhh, o Dada</h3>
            <p>{msg}</p>
            <p style={{ ...hrStyle }}></p>
            {/* <Task name="Vat khaoa" isDone={true}></Task>
            <Task name="Gosol kora" isDone={true}></Task>
            <Task name="Gumano" isDone={false}></Task>
            <Task name="Walk in Road" isDone={false}></Task> */}

            {
                // tasks.map(name => <Task name={name} isDone={true}></Task>)
                
                //চাইলে সরাসরি অবজেক্ট কেই পাঠানো যাবে
                tasksObj.map(task => <Task name={task.name} isDone={task.isDone}></Task>)
            }
        </>
    )
}