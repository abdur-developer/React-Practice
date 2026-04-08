import Task from "./Task"

export default function Dada({ msg }) {
    let hrStyle = {
        width: "100%",
        height: "5px",
        margin: "10px 0",
        backgroundColor: "red"
    }
    return (
        <>
            <h3>Dadaaahhhhhhh, o Dada</h3>
            <p>{msg}</p>
            <p style={{...hrStyle}}></p>
            <Task name="Vat khaoa" isDone={true}></Task>
            <Task name="Gosol kora" isDone={true}></Task>
            <Task name="Gumano" isDone={false}></Task>
            <Task name="Walk in Road" isDone={false}></Task>
        </>
    )
}