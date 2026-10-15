function Item({name,isBought}) {
    return(
        <li ClassName = "item">
        {name} {isBought ? "Bought" : "not Bought"}
        </li>
    );
}
export default function ShoppingList(){
    return(
        <section>
            <h1>My shoping List</h1>
            <ul>
                <Item name="milk" isBought={true} />
                <Item name="bread" isBought={true} />
                <Item name="chocolate" isBought={false} />
                <Item name="apples" isBought={false} />
            </ul>
        </section>
    );
}


