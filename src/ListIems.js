import React from "react";
import "./listItems.css";
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import FlipMove from "react-flip-move";


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item => (
        <div className="list" key={item.key}>
            <p>
            <input type="text" 
                id={item.key} 
                value={item.text}
                onChange={
                    (e) => {
                        props.setUpdate(e.target.value, item.key)
                    }
                }
            />
            <span>
                <FontAwesomeIcon className="faicons" icon={faTrash} 
                    onClick={ () => props.deleteItem(item.key)
                    }/>
                
            </span>
            </p>
            
        </div>
    ));
    return (
        <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
        </div>
    );
}

export default ListItems;