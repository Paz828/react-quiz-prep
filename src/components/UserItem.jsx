const UserItem = ({ user }) => {
  const handleClick = (e) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div id={user.id} onClick={handleClick} style={{ padding: ".5%" }}>
      <h1>{user.name}</h1>
    </div>
  );
};

export default UserItem;
