import React from 'react'
import { Controller } from "react-hook-form";
import { Iinput } from "./types";

import { ErrorText, IconContainer, InputContainer, InputText} from './styles';

  const Input = ({leftIcon, name, control, errorMessage, ...rest}: Iinput) => {
    
    
    return (
      <>
      <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
      <Controller
      name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <InputText value={value} onChange={onChange} {...rest} />
      )}
      />
      
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
      </>
    )
  }

export { Input };