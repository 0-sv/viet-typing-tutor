import React, {Dispatch, SetStateAction} from 'react';

interface Props {
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

const KeyboardButton: React.FC<Props> = ({setModalOpen}) => {
    return (
        <button onClick={() => setModalOpen(true)}>
      <span role="img" aria-label="keyboard" className="text-4xl">
        ⌨️
      </span>
        </button>
    );
};

export default KeyboardButton;