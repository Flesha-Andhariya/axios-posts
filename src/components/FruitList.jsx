function FruitList(){
    const fruits = ["Apple", "Banana", "Mango"];
    return(
        <div> 
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((fruit) => ( 
                <li key={fruit}>{fruit}</li> ))}
            </ul>
        </div>
    );
}

export default FruitList;