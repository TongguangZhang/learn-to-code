// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]; // Hook
    // const handleSelectItem = (item: string) => console.log(item);
    const [buttonState, setAlertState] = useState(false);

    return (
        <div>
            {/* <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}></ListGroup> */}
            {buttonState && <Alert onClick={() => setAlertState(false)}>Alert</Alert>}
            <Button color="danger" onClick={() => setAlertState(true)}>
                Button
            </Button>
        </div>
    );
}

export default App;

