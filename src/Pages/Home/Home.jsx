import React from "react";
import { Link } from "react-router-dom";
import useToken from "../../Hooks/useToken";

function Home() {
  const [users, setUsers] = React.useState([]);
  const [setIsLoggedIn] = useToken(true);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await res.json();

      if (data) {
        setUsers([...data]);
      }
    })();
  }, []);

  return (
    <section>
      <h1>Home</h1>
      <button
        className="btn btn-secondary d-block"
        onClick={() => setIsLoggedIn(false)}
      >
        Log Out
      </button>

      <ul className="mt-5">
        {users?.length > 0 &&
          users.map((user) => (
            <li className="list-group-item w-50 " key={user.id}>
              <Link to={"/profile/" + user.id}>
                <strong>{user.name}</strong>
                <br />
                <a href={"mailto:" + user.email}>{user.email}</a>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Home;
