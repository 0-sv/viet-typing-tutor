import React, {Dispatch, MouseEventHandler, SetStateAction} from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

interface Props {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const KeyboardInfoModal: React.FC<Props> = ({modalOpen, setModalOpen}) => {
    const onClick: MouseEventHandler = () => {
        setModalOpen(() => false)
    }
    
    return (
        <Modal
            isOpen={modalOpen}
            className="w-3/4 md:w-1/2 mx-auto mt-16 p-4 bg-white rounded-lg border border-gray-300 shadow-md"
        >
            <button
                onClick={onClick}
                className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-gray-500"
            >
                ×
            </button>
            <h2 className="text-2xl font-bold mb-4">Switch to Vietnamese Keyboard</h2>
            <p>
                To change the keyboard input language, follow these steps for your
                operating system:
            </p>
            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>Windows</strong>: Press <code>Win + Space</code> to open the
                    keyboard language selection list and choose Vietnamese. If
                    Vietnamese is not in the list, add it in Settings &gt; Time & Language
                    &gt; Language.
                </li>
                <li>
                    <strong>macOS</strong>: Enable the Vietnamese keyboard from System
                    Preferences &gt; Keyboard &gt; Input Sources. Click on the &amp;+&amp; button,
                    select Vietnamese, and add it. To switch between keyboards, press{" "}
                    <code>Control + Space</code>.
                </li>
                <li>
                    <strong>Linux (GNOME)</strong>: Add Vietnamese input method by
                    navigating to Settings &gt; Region & Language &gt; Input Sources. Click on
                    the &amp;+&amp; button, select Vietnamese, and add it. Switch between
                    keyboards using <code>Super + Space</code>.
                </li>
            </ul>
        </Modal>
    );
};

export default KeyboardInfoModal;
