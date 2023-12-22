import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function UserDetails() {
  let { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const {
    data: posts,
    isLoading: isPostsLoading,
    error: errorInPosts,
  } = useFetch(`  https://jsonplaceholder.typicode.com/posts?userId=${id}`);

  console.log(data);

  return (
    <>
      <Link to="/">Back</Link>
      {isLoading && <h2>Loading ...</h2>}

      {error && <h2>Something went wrong ...</h2>}
      {data && (
        <div className="card">
          <h1>User Details</h1>
          <h3>Name: {data.name}</h3>
          <h3>Email: {data.email}</h3>
        </div>
      )}

      {isPostsLoading && <h2>Loading ...</h2>}

      {errorInPosts && <h2>Something went wrong ...</h2>}

      {posts &&
        posts.map((i) => (
          <>
            <div className="card">
              <h3>Name: {i.title}</h3>
              <p>Email: {i.body}</p>
            </div>
          </>
        ))}
    </>
  );
}
