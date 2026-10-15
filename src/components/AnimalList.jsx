const animals = [
    { name : "cat", pet : true, id : 1},
    { name : "lion", pet : false, id : 2},
    { name : "dog", pet : true, id : 3},
];
 
export default function AnimalList(){
    const listItem = animals.map((animal) => (
        <li
        key={animal.id}
        style={{
            color : animal.pet ? "blue" : "red",
        }}
        >
        {animal.name}
        </li>
        ));
        return(
            <div>
                <h2> Animal List</h2>
                <ul>{listItem}</ul>
            </div>
        );
}