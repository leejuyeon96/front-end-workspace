import { useState } from "react";
import "./App.css";
import { Browser, Routes, Route, link } from "react-router-dom";

const Home = ({list, deleteMessage) => {
  const onClick=(e)=>{
    deleteMessage(e.target.id);
    
  };
  return (
       <>
        <h1>Messages</h1>
        <table>
          <tr>
          <th>ID</th>
          <th width="50">Writer</th>
          <th width="50">Message</th>
          <th width="50">Write Date</th>
          <th>Action</th>
          </tr>
          {list.map((item)=> item.id})
          <td>{item.id}</td>
          <td>{item.writer}</td>
          <td>{item.Message}</td>
          <td>{item.WriteDate}</td>
          <td><button onClick={onClick} id={id}>Delete</button></td>

        </table>
       </> 
  );
};

const createMessage = ({createMessage}) => {
  const [id, setId] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [writedate, setWritedate] = useState("");


  if (id==="" || writer==="" || content==="" ||writedate==="")
   alert("모든 값은 반드시 입력되어야 합니다.");
  return;
};
return (
  <>
  <h1>create Message</h1>
 
    <form onSubmit={onsubmit}>
    <div>
     <input type="text" placeholder="Input message id" value="id"/>
     <input type="text" placeholder="Input message writer" value="writer"/>
     <input type="text" placeholder="Input message content" value="content"/>
     <button type="submit">Add Message</button>
     </div>
  </form>
  </>
);
const App=() => {
  const (messages, setmessages) => useState{
    ID: "1",
    Writer: "Writer 1",
    Message: "Message 1",
    Write Date: "2022-01-01"

  },
  {
    ID: "2",
    Writer: "Writer2",
    Message: "Message2",
    Write Date: "2022-02-01"
  },
  {
    ID: "3",
    Writer: "Writer 3",
    Message: "Message 2"
    Write Date: "2022-03-01"
  },
};


};
  const addMessage=(id, writer, message, writedate) => {
    const result = message.Add()
   

  };

const deleteMessage = (id) => {
  delete id
};


<BrowserRouter>
    <li><Link to="/">List</Link></li>
    <li><Link to="/create">Add New Message</Link></li>
  <Routes>
    <Route path="/" element="">

    </Route>
  </Routes>
</BrowserRouter>
};

export default App;
