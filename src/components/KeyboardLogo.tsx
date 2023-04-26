import React, {Dispatch, SetStateAction} from 'react';

interface Props {
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

const KeyboardButton: React.FC<Props> = ({setModalOpen}) => {
    return (
        <button onClick={() => setModalOpen(true)}>
      <span role="img" aria-label="keyboard">
        ⌨️
      </span>
        </button>
    );
};

export default KeyboardButton;