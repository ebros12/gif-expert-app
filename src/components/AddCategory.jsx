import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('berserk')
    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        const newInput = inputValue.trim()
        event.preventDefault();
        if ( newInput.length < 1) return;
      
      
        onNewCategory(newInput)
        setInputValue('');
    
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange= {onInputChange}
            />
        </form>
    )
}