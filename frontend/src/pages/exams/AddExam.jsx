import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepOne from "./steps/StepOne";
import PageTitle from '../../components/PageTitle';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const AddExam = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const handleNextClick = () => {
        console.log("🚀 ~ handleNextClick ~ selectedOptions:", selectedOptions);
        console.log("📅 Date value:", date); // Logging date value for debugging
    
        // Check if date is empty or null
        if (!date) {
            console.error("Date is empty or null");
            // Handle this case accordingly
            return;
        }
    
        let path = '';
        switch (selectedOptions.title) {
            case 'Dictée':
                path = '/dictee';
                break;
            case 'Production écrite':
                path = '/production';
                break;
            case 'Écriture':
                path = '/ecriture';
                break;
            case 'Lecture compréhension':
                path = '/lecture';
                break;
            default:
                path = '/Langue';
        }
    
        // Parse date into a Date object
        const parsedDate = new Date(date);
    
        // Check if the parsedDate is valid
        if (isNaN(parsedDate.getTime())) {
            console.error("Invalid date format");
            // Handle this case accordingly
            return;
        }
    
        // Format the date
        const formattedDate = format(parsedDate, "EEEE dd MMMM yyyy", { locale: fr });
    
        navigate(path, { state: { selectedExam: { ...selectedOptions, date: formattedDate } } });
    };
    
    console.log("🚀 ~ selectedOptions.title:", selectedOptions.title); // Added for debugging

    return (
        <Fragment>
            <PageTitle activeMenu={"Ajouter un examen"} motherMenu={"Examens"} />
            <div className="row">
                <div className="col-xl-12 col-xxl-12">
                    <div className="card">
                        <div className="card-body">
                            <StepOne setSelectedOptions={setSelectedOptions} setDate={setDate} />
                            <div className="text-end toolbar toolbar-bottom p-2">
                                {selectedOptions.title && (
                                    <button
                                        onClick={handleNextClick}
                                        className="btn btn-primary sw-btn-next"
                                    >
                                        Suivant
                                    </button>
                                )}
                                {!selectedOptions.title && (
                                    <p>No exam selected</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AddExam;
