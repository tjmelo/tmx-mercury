function Search({ search }){
    return(
        <input 
            type="text" 
            onKeyUp={ search } 
            className="form-control form-control-lg mb-4" 
            placeholder="Digite o nome de um estado aqui..." />
    )
}

export default Search;