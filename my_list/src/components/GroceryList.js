import React, { Fragment } from 'react';
import ListItem from './ListItem';


const grocerylist = (props) => {
    return (
        <Fragment>
            <nav className="navbar bg-primary grey center">
                <h5>
                    <i className='fas fa-shopping-cart' /> Grocery List
                     </h5>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div id="main" className="card">
                            <div className="card-content">
                                <span className="card-title"> Grocery List</span>
                                <div className="row">
                                    <form id="task-form">
                                        <div className="input-field col s12">
                                            <input type="text" name="task" id="task"
                                                onChange={props.changeHandler}
                                                value={props.item} />
                                            <label for="task">{props.missingItem ? "Empty field ! Please insert valid text...":"Insert new grocery !"}</label>
                                        </div>
                                        <button type="submit" className={props.editItem ? "btn black" : "btn"}
                                            onClick={props.submitHandler}>{props.editItem ? "edit item" : "new item"}</button>
                                            <button type="submit" className="btn red" onClick={props.deleteAll}>Delete All</button>
                                    </form>
                                </div>
                            </div>
                                    {
                                        props.items.map(item => {
                                            return (
                                                <ListItem 
                                                key={item.id}
                                                title={item.title}
                                                deleteOne={() => props.deleteOne(item.id)}
                                                editOne={() => props.editOne(item.id)} />
                                            )
                                        })
                                    }
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    );
};

export default grocerylist;