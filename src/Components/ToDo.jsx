import React, { useState } from 'react'
import "./ToDo.css"

const ToDo = () => {
    const [inputData, setInputData] = useState("");   //initial declaration
    const [items, setItem] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    const addItem = () => {
        if (!inputData) {
            alert("plz fill")
        } else if (inputData && !toggleSubmit) {
            setItem(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                }))
            setInputData('');
            setToggleSubmit(true);
            setIsEditItem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItem([...items, allInputData]);
            setInputData('');
        }
    }

    const deleteItems = (index) => {
        const updatedItems = items.filter((elem) => {
            return index !== elem.id;
        });
        setItem(updatedItems);
    }

    const editItem = (id) => {
        let neweditItem = items.find((elem) => {
            return elem.id = id;
        });
        setInputData(neweditItem.name);
        setToggleSubmit(false);
        setIsEditItem(id);

    }
    return (
        <>
            <div className="container">
                <div className="child-container">
                    <h1 className='H1'>To-Do List📝</h1>
                    <div className="addItems">
                        <input type="text" placeholder='✍ Enter the Task..'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <button className='buttonplus'>
                            {
                                toggleSubmit ? <i class="fa-solid fa-plus add-btn" title="Add Item" onClick={addItem}></i> :

                                    <i class="fa-solid fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                            }
                        </button>

                    </div>

                    <div className="showItems">
                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItems(elem.id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo