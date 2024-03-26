
export default function ColorPicker({onChange}){
    function handleOnChange(e){
        onChange(e.target.value);
    }

    return(
        <>
            <h2>Elige el color del texto</h2>
            <input type="color" onChange={handleOnChange} placeholder="Selecciona el color"></input>
        </>
    )
};