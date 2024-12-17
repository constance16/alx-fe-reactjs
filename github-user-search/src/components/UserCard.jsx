const UserCard = ({ user }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <img src={user.avatar_url} alt={user.login} className="rounded-full w-24 h-24 mx-auto" />
        <h2 className="text-center mt-2 text-lg font-bold">{user.name || user.login}</h2>
        <p className="text-center text-sm">{user.bio}</p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-500 text-center mt-4"
        >
          View Profile
        </a>
      </div>
    );
  };
  
  export default UserCard;
  