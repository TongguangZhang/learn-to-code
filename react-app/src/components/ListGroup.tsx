import { MouseEvent } from "react";

function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    const message = items.length === 0 && <p>No item found</p>;

    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>List</h1>
            {message}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className="list-group-item" key={item} onClick={handleClick}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
