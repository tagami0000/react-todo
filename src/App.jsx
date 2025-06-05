// 基本的にこのファイルにどんどんコンポーネントを追加する

import React, { useState } from 'react';
import './App.css';
import './styles.css';
import { InputArea } from './components/InputArea';
import { IncompleteTodos } from './components/IncompleteTodos';
import {CompleteTodos} from './components/CompleteTodos';


function App() {
    const [inputText, setInputText] = useState();
    const [incompleteTodos, setIncompleteTodos] = useState(["a", "b", "c"]);
    const [completeTodos, setCompleteTodos] = useState([]);

    return (
        <div className="App">
            <InputArea inputText={inputText} setInputText={setInputText} incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos}/>
            <IncompleteTodos incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos} completeTodos={completeTodos} setCompleteTodos={setCompleteTodos}/>
            <CompleteTodos completeTodos={completeTodos} setCompleteTodos={setCompleteTodos} incompleteTodos={incompleteTodos} setIncompleteTodos={setIncompleteTodos}/>
        </div>
    );
}

export default App;