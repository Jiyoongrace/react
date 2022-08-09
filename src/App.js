import { useState } from "react";

function App(){
    // ToDo를 작성해줄 state를 비어있는 array를 만든다.
    const [toDo, setToDo] = useState("");

    // ToDo들을 담아줄 state를 array로 만든다.
    const [toDos, setToDos] = useState([]);

    // 이벤트들 만들어주기
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }

        // 첫번째 인자로 현재 state를 받아준다, 그리고 todo가 추가된 새로운 array를 리턴해준다.
        // ...을 앞에 붙여주면 currentArray에 있는 요소가 모두 추가된다!
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };

    return(
        <div>
            <h1> My To Do List [{toDos.length}개]</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do ..."
                />
                <button> ADD </button>
            </form>
            <hr />
            {/*컴포넌트를 리턴해주기*/}
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;