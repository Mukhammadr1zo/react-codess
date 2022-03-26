import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Comments() {
  const [posts, setPost] = React.useState(false);

  const { user_id } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments?postId=" + user_id
      );

      const data = await res.json();

      if (data) {
        setPost([...data]);
      }
    })();
  }, []);

  return (
    <main className="p-5">
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        {"Ortga"}
      </button>

      <ul className="mt-5">
        {posts?.length > 0 &&
          posts.map((user) => (
            <li className="list-group-item w-50 " key={user.id}>
              <strong>{user.name}</strong>
              <br />
              <a href={"mailto:" + user.email}>{user.email}</a>
            </li>
          ))}
      </ul>
    </main>
  );
}
export default Comments;
