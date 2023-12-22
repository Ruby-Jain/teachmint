import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Link to={`/user/${user.id}`}>
      <div className="card">
        <h2>{user.name}</h2>
      </div>
    </Link>
  );
}

UserCard.propTypes = {
  user: PropTypes.object,
};
