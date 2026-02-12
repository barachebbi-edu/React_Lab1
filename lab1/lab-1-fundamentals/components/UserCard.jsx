import './UserCard.css';
function UserCard({ name, email, role }) {
    return(
        <div className="user-card">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}
export default UserCard;
