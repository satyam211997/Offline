import { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  function addHandle() {
    //     setListData([...listData, activity]);
    //     console.log(listData);

    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  function deleteTodo(i){
          listData.filter((data)=>{
                    return i!=data
          })

  }
  return (
    <div className="main">
      <div className="container">
        <h1 className="header">Todo-List</h1>
        <div>
          <input
            type="text"
            placeholder="Add Activity"
            value={activity}
            onChange={(e) => {
              setActivity(e.target.value);
            }}
          />
          <button onClick={addHandle}>Add </button>
        </div>
        <div>
          <h3>Your Todos</h3>
          {listData != [] &&
            listData.map((data, i) => {
              return (
                <>
                  <p key={i}>
                    <div>{data}</div>
                    <button onClick={deleteTodo}>delete</button>
                  </p>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Todo;
