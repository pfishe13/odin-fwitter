import React, { useState } from 'react';

const InformationPopup = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <div className="popup">
          <div className="popup-box">
            <p>
              Welcome to my twitter clone! Feel free to add a tweet to the
              timeline.
            </p>
            <p>
              If you want to change your profile name, user name, and profile
              picture, click on the profile attributes at the bottom of the left
              sidebar to toggle the editing (I tried to mark it with a popup...
              It's in the bottom left corner, you get the point)!
            </p>
            <p>
              Also, since this is only a clone, many of the buttons, as well as
              the search bar, are not actually functional. The main purpose of
              this clone was to work on structure and getting the design as
              close as possible to the actual thing!
            </p>
            <span onClick={handleClose}>Close</span>
          </div>
          <div className="popup-box click-here">
            <p>Click here!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default InformationPopup;
