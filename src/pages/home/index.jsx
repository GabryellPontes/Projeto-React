import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';

const Home = () => {
	return (<>
		<h1>Home</h1>
		<Button title="Teste1" />
		<Button variant="secondery" title="Teste 2" />
		<Link to="/login">Ir para o login</Link>
	</>)
}

export { Home }