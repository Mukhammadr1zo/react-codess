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
        setPost({ ...data });
      }
    })();
  }, [user_id]);

  return (
    <main className="p-5">
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        {"<- Ortga"}
      </button>

      <li className="list-group-item w-50 mt-3">
        <strong>et fugit eligendi deleniti quidem qui sint nihil autem</strong>
        <br />
        <p>Presley.Mueller@myrl.com</p>
        <h5>
          doloribus at sed quis culpa deserunt consectetur qui
          praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate
          autem\nvoluptatem repellendus aspernatur dolorem in
        </h5>
      </li>
      <li className="list-group-item w-50 mt-3">
        <strong>
          repellat consequatur praesentium vel minus molestias voluptatum
        </strong>
        <br />
        <p>Dallas@ole.me</p>
        <h5>
          maiores sed dolores similique labore et inventore et\nquasi temporibus
          esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis
          molestiae mollitia quia et magnam dolor
        </h5>
      </li>
      <li className="list-group-item w-50 mt-3">
        <strong>et omnis dolorem</strong>
        <br />
        <p>Mallory_Kunze@marie.org</p>
        <h5>
          ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit
          vero accusamus maiores\nvoluptates quia aliquid ullam eaque
        </h5>
      </li>
      <li className="list-group-item w-50 mt-3">
        <strong>et fugit eligendi deleniti quidem qui sint nihil autem</strong>
        <br />
        <p>Presley.Mueller@myrl.com</p>
        <h5>
          doloribus at sed quis culpa deserunt consectetur qui
          praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate
          autem\nvoluptatem repellendus aspernatur dolorem in
        </h5>
      </li>
    </main>
  );
}
export default Comments;
