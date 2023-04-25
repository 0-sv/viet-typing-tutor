import {KeyboardEventHandler, useState} from 'react';

const InputKeyDisplay = () => {
    const [lastKeyPressed, setLastKeyPressed] = useState('');

    const onKeyDown: KeyboardEventHandler = (event) => {
        setLastKeyPressed(event.key);
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onKeyDown={onKeyDown}
            />
            <p className="mt-4 text-lg">{lastKeyPressed && `Key pressed: ${lastKeyPressed}`}</p>
        </div>
    );
};

export default InputKeyDisplay;
