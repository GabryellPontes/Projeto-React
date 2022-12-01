import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
const Home = () => {
	return (<>
		<Header />
		<Button title="Teste1" />
		<Button variant="secondery" title="Teste 2" />
		<Link to="/login">Ir para o login</Link>
	</>)
}

export { Home }