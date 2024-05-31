import React from 'react';

function Q2Section({ question, lines, setQuestion, setLines }) {
    const addLine = () => {
        setLines([...lines, '']);
    };

    const removeLine = (index) => {
        const updatedLines = [...lines];
        updatedLines.splice(index, 1);
        setLines(updatedLines);
    };

    return (
        <div className="q2-section">
            <div className='input-group my-3 input-primary'>
                <span className="input-group-text">Question</span>
                <input
                    type="text"
                    className="form-control"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ajouter ta question "
                />
            </div>
            <div>
                <button className="form-control" onClick={addLine}>Ajouter une ligne</button>
                {lines.map((_, index) => (
                    <div key={index} className="input-group my-3">
                        <span className="form-control">
                            ....................................................
                        </span>
                        <button className="btn btn-danger" onClick={() => removeLine(index)}>
                            <i className="fas fa-times" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Q2Section;
