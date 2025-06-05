export const IncompleteTodos = (props) => {
    const {incompleteTodos, setIncompleteTodos, completeTodos, setCompleteTodos} = props;

    const onClickComplete = (index) => {
        const newInCompleteTodos = incompleteTodos[index]
        const newCompleteTodos = [...completeTodos, newInCompleteTodos]
        setCompleteTodos(newCompleteTodos)
        const newIncompleteTodos = [...incompleteTodos]
        newIncompleteTodos.splice(index, 1)
        setIncompleteTodos(newIncompleteTodos)
    }

    const onClickDelete = (index) => {
        const newInCompleteTodos = [...incompleteTodos]
        newInCompleteTodos.splice(index, 1)
        setIncompleteTodos(newInCompleteTodos)
    }

    return (
        <div className="incomplete-area">
            <div className="title">未完了のTODO</div>
            <ul>
                {incompleteTodos.map((element, index) => {
                    return (
                        <div className="list-row" key={index}>
                            <p className="todo-item">{element}</p>
                            <button onClick={() => onClickComplete(index)}>完了</button>
                            <button onClick={() => onClickDelete(index)}>削除</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}