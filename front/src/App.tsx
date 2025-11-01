import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<string>("loading...");

  useEffect(() => {
  fetch('http://localhost:3000/ping')
    .then((res) => res.json())
    .then((data) => setData(data.message))
    .catch((err) => setData("error: " + err.message));
}, []);

  return (
    <div style={{ padding: "2rem", fontSize: "1.5rem" }}>
      API response: {data}
    </div>
  );
}

export default App;
