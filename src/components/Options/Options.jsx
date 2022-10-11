import React from 'react';

const Options = ({optn}) => {
    console.log(optn)
    return (
        <div>
            <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
        <label className="form-check-label" for="gridRadios1">
          {optn}
        </label>
      </div>
        </div>
    );
};

export default Options;