import React from 'react';
import { Button } from 'react-bootstrap';

function Q1Section({ question, leftItems, rightItems, setQuestion, setLeftItems, setRightItems }) {
    const addLeftItem = () => {
        setLeftItems([...leftItems, '']);
    };

    const addRightItem = () => {
        setRightItems([...rightItems, '']);
    };

    const handleLeftItemChange = (index, value) => {
        const updatedItems = [...leftItems];
        updatedItems[index] = value;
        setLeftItems(updatedItems);
    };

    const handleRightItemChange = (index, value) => {
        const updatedItems = [...rightItems];
        updatedItems[index] = value;
        setRightItems(updatedItems);
    };

    const removeLeftItem = (index) => {
        const updatedItems = [...leftItems];
        updatedItems.splice(index, 1);
        setLeftItems(updatedItems);
    };

    const removeRightItem = (index) => {
        const updatedItems = [...rightItems];
        updatedItems.splice(index, 1);
        setRightItems(updatedItems);
    };

    return (
        <div>
            <div className='input-group my-3 input-primary'>
                <span className="input-group-text">Question</span>
                <input type="text" className="form-control" value={question} onChange={(e) => setQuestion(e.target.value)} />
            </div>
            <div className='input-group'>
                <span className="input-group-text mb-3">Les phrases à gauche</span>
                <button type="button" className="form-control" onClick={addLeftItem}>Ajouter</button>
                {leftItems.map((item, index) => (
                    <div key={index} className="input-group input-danger-o mb-3">
                        <input type="text" className="form-control" value={item} onChange={(e) => handleLeftItemChange(index, e.target.value)} />
                        <Button variant="danger" onClick={() => removeLeftItem(index)} className="btn ">
                            <i className="fas fa-times" />
                        </Button>
                    </div>
                ))}
            </div>
            <div className='input-group'>
                <span className="input-group-text mb-3">Les phrases à droite</span>
                <button type="button" className="form-control" onClick={addRightItem}>Ajouter</button>
                {rightItems.map((item, index) => (
                    <div key={index} className="input-group input-danger-o mb-3">
                        <input type="text" className="form-control" value={item} onChange={(e) => handleRightItemChange(index, e.target.value)} />
                        <Button variant="danger" onClick={() => removeRightItem(index)} className="btn ">
                            <i className="fas fa-times" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Q1Section;
