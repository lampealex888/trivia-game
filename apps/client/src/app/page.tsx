import HostGameButton from "../components/HostGameButton";
import JoinGameButton from "../components/JoinGameButton";

export default function RootPage(): JSX.Element {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Trivia Game</h1>
          <p className="py-6">Welcome to my PERN trivia game!</p>
          <HostGameButton />
          <JoinGameButton />
        </div>
      </div>
    </div>
  );
}
