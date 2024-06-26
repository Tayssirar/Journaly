import React from "react";
import { Link } from "react-router-dom";
import LottieGif from '../../components/LottieGif';
import Error from '../../assets/images/404-error.json';


const Error404 = () => {
   return (
      <div className="fix-wrapper">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-md-6">
                  <div className="form-input-content text-center error-page">
                  <LottieGif illustration={Error} width={300} height={300}/>
                  <h4 className="error-text font-weight-bold">404</h4>

                     <h5>
                        <i className="fa fa-exclamation-triangle text-warning" />{" "}
                        The page you were looking for is not found!
                     </h5>
                     <p>
                        You may have mistyped the address or the page may have
                        moved.
                     </p>
                     <div>
                        <Link className="btn btn-primary" to="/">
                           Back to Home
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Error404;
