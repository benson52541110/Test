import { useState } from "react";
import "./App.css";

function App() {
	return (
		<div className="flex items-center justify-center h-screen p-20 bg-slate-400">
			<div className="w-full h-full p-10 bg-white rounded-md ">
				<div className="flex justify-between">
					<button className="px-4 py-2 text-white bg-blue-600 rounded-md">
						Add
					</button>
					<button className="px-4 py-2 text-white bg-green-600 rounded-md">
						Save
					</button>
					<button className="px-4 py-2 text-white bg-red-600 rounded-md">
						Update
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
