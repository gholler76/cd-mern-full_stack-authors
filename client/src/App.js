import { Router, Link } from "@reach/router";
import Main from "./views/Main.js";
import RapperDetail from "./views/RapperDetail";
import CreateRapper from "./views/CreateRapper";
import EditRapper from "./views/EditRapper";

function App() {
	return (
		<div>
			<button>
				<Link to="/">Home</Link>
			</button>
			<Router>
				<Main path="/"></Main>
				<RapperDetail path="/:id"></RapperDetail>
				<CreateRapper path="/create"></CreateRapper>
				<EditRapper path="/:id/edit"></EditRapper>
			</Router>
		</div>
	);
}

export default App;
