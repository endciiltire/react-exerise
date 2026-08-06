import { useEffect, useState } from "react";
function Title() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("hello");

  useEffect(() => {
    if (title.trim() === "") {
      document.title = "welcome"
    } else {
      document.title = `${name}, ${title}`;
    }
  }, [name, title])
  return (
    <div>
      <h1> enter your name </h1>
      <input type="text" name="title" id="title" placeholder="enter the title"
        onChange={(e) => setTitle(e.target.value)}
        value={title} /> <br />
      <h1>choose greating</h1>
      <input type="text" name="name" id="name" placeholder="eneter your greating"
        onChange={(e) => setName(e.target.value)}
        value={name} />



    </div>
  )
}


export default Title;

