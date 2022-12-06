import { GlobalStyles } from "./styles/GlobalStyles";

import { Header } from "./components/Header/index";
import { Orders } from "./components/Orders";

// React Fragment, server para envolver os elementos sem gerar novo elemento no DOM
export function App() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Orders />
		</>
	)
}
