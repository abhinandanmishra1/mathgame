import Game from "./components/Game";
import "./App.css";

function App() {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<h1 className="text-3xl font-bold text-red-600">Let's Play the game!</h1>
			<Game />
		</div>
	);
}

export default App;
