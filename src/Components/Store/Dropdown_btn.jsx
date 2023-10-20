import React, { useState }  from "react";

const Dropdown_btn = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    return(
        <div className="m-3 mx-5">
            <label htmlFor="categoryDropdown">Selecciona una categoría:</label>
            <select 
            id="categoryDropdown"
            className="form-select"
            value={selectedCategory}
            onChange={handleCategoryChange}>
                <option value="">Elige una categoría</option>
                <option value="cabello">Cabello</option>
                <option value="cara">Cara</option>
                <option value="cuerpo">Cuerpo</option>
            </select>
        </div>
    )
}

export default Dropdown_btn