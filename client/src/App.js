import { useEffect, useState } from "react";

function App() {
  const [cats, setCats] = useState(null);

  useEffect(() => {
    fetch("/api/cats")
      .then((res) => res.json())
      .then((cats) => setCats(cats));
  }, []);

  if (cats === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {cats.map((cat) => (
        <div key={cat._id}>
          <h1>
            {cat.name} - {cat.age}
          </h1>
          <img src={cat.url} />
        </div>
      ))}
    </div>
  );
}

export default App;
