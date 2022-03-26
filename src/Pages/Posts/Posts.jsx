import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {
  const [user, setUser] = React.useState(false);

  const { user_id } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + user_id
      );

      const data = await res.json();

      if (data) {
        setUser({ ...data });
      }
    })();
  }, [user_id]);

  return (
    <main className="p-5">
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        {"<- Ortga"}
      </button>

      {user && (
        <div className="my-5 list-group-item w-50">
          <h2> {user.title}</h2>
          <p> {user.body}</p>

          <Link to={"/comments/" + user.id}>
            <h4>Comments</h4>
          </Link>
        </div>
      )}
    </main>
  );
}
export default Profile;
