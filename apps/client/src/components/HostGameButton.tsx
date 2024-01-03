export default function HostGameButton() {
  return (
    <div>
      <input
        className="input input-ghost"
        id="nickname"
        type="text"
        placeholder="Enter your name!"
        autoComplete="off"
      />
      <button className="btn">Host Game</button>
    </div>
  );
}
