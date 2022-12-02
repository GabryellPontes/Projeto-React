import { Link } from "react-router-dom";

import banner from '../../assets/banner.png'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHighLight} from './styles';

const Home = () => {
	return (<>
		<Header />
		<Container>
			<div>
			<Title>
				<TitleHighLight>
					Implemente
					<br />
				</TitleHighLight>
				o seu futuro global agora!
			</Title>
			<TextContent>
				Domine as tecnologias utilizandas pelas empresas mais inovadoras do mundo e encare o seu novo
				desafio profissional, evoluindo em comunidade com os melhores experts.
			</TextContent>
			<Button title="Começar agora" variant="secondary" onClick={() => null}/>
			</div>
			<div>
				<img src={banner} alt="Imagem principal" />	
			</div>
		</Container>
	</>)
}

export { Home }