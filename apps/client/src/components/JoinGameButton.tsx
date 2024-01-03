export default function JoinGameButton() {
  return (
    <div>
      <input
        className="input input-ghost mt-3"
        id="code"
        type="text"
        placeholder="Enter room code!"
        autoComplete="off"
      />
      <button className="btn">Join Game</button>
    </div>
  );
}
