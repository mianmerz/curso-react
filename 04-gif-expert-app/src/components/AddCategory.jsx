import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        const text = target.value;
        setInputValue(text);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if (newInputValue.length <= 1) return;

        onNewCategory(newInputValue);
        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input type="text" placeholder='Buscar gif' value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}