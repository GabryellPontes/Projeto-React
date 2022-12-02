

import banner from '../../assets/banner.png'
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight} from './styles';

const Feed = () => {
	return (<>
		<Header autenticado={true}/>
		<Container>
			<Column flex={3}>
				<Title>Feed</Title>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</Column>
			<Column flex={1}>
				<TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
				<UserInfo percentual={40} nome="Lucas Leão" image="https://avatars.githubusercontent.com/u/68882888?v=4"/>
				<UserInfo percentual={20} nome="Gabryell Pontes" image="https://avatars.githubusercontent.com/u/68882888?v=4"/>
				<UserInfo percentual={80} nome="Higor Guilherme" image="https://avatars.githubusercontent.com/u/68882888?v=4"/>
				<UserInfo percentual={60} nome="João Silva" image="https://avatars.githubusercontent.com/u/68882888?v=4"/>
				<UserInfo percentual={10} nome="Carlinhos Bala" image="https://avatars.githubusercontent.com/u/68882888?v=4"/>
			</Column>
		</Container>
	</>)
}

export { Feed }