import React, { useState }  from "react";

const Dropdown_btn = ({ onCategoryChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const filterResult = (categoria) => {
        const result = Products.filter((curData)=>{
            return curData.categoria===categoria;
        });
        setData()
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedCategory(category);
        onCategoryChange(category);
    }

    return(
        <div className="m-3 mx-5">
            <label htmlFor="categoryDropdown">Selecciona una categoría:</label>
            <select 
            id="categoryDropdown"
            className="form-select"
            value={selectedCategory}
            onChange={handleCategoryChange}>
                <option value="">Seleccionar</option>
                <option value="cabello" onClick={
                    ()=>filterResult('cabello')}>Cabello</option>
                <option value="cara" onClick={
                    ()=>filterResult('cara')}>Cara</option>
                <option value="cuerpo" onClick={
                    ()=>filterResult('cuerpo')}>Cuerpo</option>
            </select>
        </div>
    )
}

export default Dropdown_btn