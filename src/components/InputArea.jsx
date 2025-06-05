export const InputArea = (props) => {
    // 親コンポーネントからpropsを受け取る
    const {inputText, setInputText, incompleteTodos, setIncompleteTodos} = props;

    const onClickAdd = () => {
        if (inputText === "") {
            return;
        }
        setIncompleteTodos([...incompleteTodos, inputText]);
        setInputText("");
        console.log(incompleteTodos);
        console.log(inputText);
    }

    const onChangeInputText = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div className="input-area">
            <input placeholder="TODOを入力" value={inputText} onChange={onChangeInputText}/>
            <button onClick={onClickAdd}>追加</button>
        </div>
    )
}