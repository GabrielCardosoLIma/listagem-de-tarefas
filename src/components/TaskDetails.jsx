import React from "react";
import { useParams } from "react-router-dom"; 
import { useHistory } from "react-router-dom";
import './tasDetails.css';

import Button from "./Button";

const TasDetails = () => {
    const params = useParams();
    const history = useHistory();

  return (
    <>
      <div className="back-button-container">
        <Button onClick={() => history.goBack()}>Voltar</Button>
      </div>
      <div className="task-details-container">
          <h2>
              {params.taskTitle}
          </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque,
          laborum nisi exercitationem unde porro debitis, ratione quis ipsam
          dignissimos ipsum accusantium itaque impedit perferendis nobis
          praesentium minus nemo. Non?
        </p>
      </div>
    </>
  );
};

export default TasDetails;
