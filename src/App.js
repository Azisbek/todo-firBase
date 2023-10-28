import { useCallback, useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { BASE_URL } from "./utils/linkFirbase";

function App() {
  const [array, setArray] = useState([]);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}/movies.json`);
      const data = await response.json();
      let transformArray = [];
      for (const key in data) {
        transformArray.unshift({
          id: data[key].id,
          title: data[key].title,
          text: data[key].text,
        });
      }
      console.log(data);
      setArray(transformArray);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);

  const postData = async (newItem) => {
    const response = await fetch(`${BASE_URL}/movies.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    console.log(newItem);
  };

  return (
    <div>
      <Form postData={postData} />
      <List array={array} />
    </div>
  );
}

export default App;
