import {Inter} from 'next/font/google'
import InputKeyDisplay from "@/components/InputKeyDisplay";
import {useState} from "react";
import KeyboardInfoModal from "@/components/KeyboardInfoModal";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const [lastKeyPressed, setLastKeyPressed] = useState('');
    const [modalOpen, setModalOpen] = useState(true);

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <code className="font-mono font-bold">viet-typing-tutor</code>
            <InputKeyDisplay lastKeyPressed={lastKeyPressed} setLastKeyPressed={setLastKeyPressed}/>
            <KeyboardInfoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </main>
    )
}