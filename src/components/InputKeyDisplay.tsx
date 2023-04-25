import React, {Dispatch, KeyboardEventHandler, SetStateAction} from 'react';

interface Props {
    lastKeyPressed: string;
    setLastKeyPressed: Dispatch<SetStateAction<string>>;
}

const InputKeyDisplay: React.FC<Props> = ({lastKeyPressed, setLastKeyPressed}) => {
    const onKeyDown: KeyboardEventHandler = (event) => {
        setLastKeyPressed(event.key);
    };

    return (
        <div className="flex flex-col items-center">
            <p className="mt-4 text-lg">{lastKeyPressed && `Key pressed: ${lastKeyPressed}`}</p>
            <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export default InputKeyDisplay;
