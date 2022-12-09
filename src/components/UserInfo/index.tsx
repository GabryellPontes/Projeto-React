import React from "react";
import { Iuserinfo } from "./types";

import { Container, UserPicture, NameText, Progress } from './styles';

const UserInfo = ({nome, image, percentual}: Iuserinfo) => {
  return (
    <Container>
        <UserPicture src={image}/>
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual}/>
            </div>
    </Container>
  )
}

export { UserInfo }
