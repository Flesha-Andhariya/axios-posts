
function ProfileCard() {
  const name = "React Learner";
  function handleClick() {
    alert("Hello! Welcome to React.");
  }
  return (
    <div>
      <h2>{name}</h2>
      <img
        src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
        alt="Profile"
        width="150"
      />
      <p>I am learning React components.</p>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
export default ProfileCard;
