
export default function AlertButton() {
  function handleClick() {
    alert("click me");
  }

  return (
    <button onClick={handleClick}>
      Click...
    </button>
  );
}
