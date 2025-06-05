
export const CompleteTodos = (props) => {
    const {completeTodos, setCompleteTodos, incompleteTodos, setIncompleteTodos} = props;

    const onClickReturn = (index) => {
        const newInCompleteTodos = [...incompleteTodos, completeTodos[index]]
        const newCompleteTodos = [...completeTodos]
        newCompleteTodos.splice(index, 1)
        setIncompleteTodos(newInCompleteTodos)
        setCompleteTodos(newCompleteTodos)
    }

    return (
        <div className="complete-area">
            <div className="title">完了のTODO</div>
            {completeTodos.map((element, index) => {
                return (
                    <div className="list-row" key={index}>
                        <p className="todo-item">{element}</p>
                        <button onClick={() => onClickReturn(index)}>戻す</button>
                    </div>
                )
            })}
        </div>
    )
}