import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";


/** Show information about a word.
 *
 * Is rendered by Words to show a "card" for each word.
 *
 * Receives view func prop from parent, which is called on view.
 *
 * WordCard -> WordDetail
 */

const WordDetail = ({ id, name }) => {
  
  return (
    <div className="word-detail">
      <Card>
        <CardBody>
          <CardTitle className="text-success" tag="h4">
            {name}
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default WordDetail;