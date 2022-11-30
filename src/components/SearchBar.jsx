export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button 
         onClick={()=> props.onSearch("Esto es el id")}
         >Agregar</button>
      </div>
   );
}
