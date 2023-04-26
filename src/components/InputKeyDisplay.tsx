import React, {KeyboardEventHandler, useRef} from 'react';

interface Props {
    setRandomKey: CallableFunction
}

const InputKeyDisplay: React.FC<Props> = ({setRandomKey}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClearInput = () => {
        if (inputRef.current)
            inputRef.current.value = '';
    };

    const onKeyDown: KeyboardEventHandler = (event) => {
        if (event.key === 'Enter') {
            setRandomKey()
            handleClearInput()
        }
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                className="text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                onKeyDown={onKeyDown}
                ref={inputRef}
            />
        </div>
    );
};

export default InputKeyDisplay;
