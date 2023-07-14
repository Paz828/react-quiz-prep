const UserItem = ({ user }) => {
  const handleClick = (e) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div id={user.id} onClick={handleClick} style={{ padding: ".25%" }}>
      <h1 style={{ padding: ".25%" }}>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserItem;
