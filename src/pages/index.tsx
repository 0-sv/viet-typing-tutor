import {Inter} from 'next/font/google'
import InputKeyDisplay from "@/components/InputKeyDisplay";
import {useState} from "react";
import KeyboardInfoModal from "@/components/KeyboardInfoModal";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const [lastKeyPressed, setLastKeyPressed] = useState('');
    const [modalOpen, setModalOpen] = useState(true);
    const [input, setInput] = useState('')

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <code className="font-mono font-bold">viet-typing-tutor (telex)</code>
            <label>Hôm nay trời đẹp vô cùng, không gian xung quanh tươi mới.</label>
            <InputKeyDisplay lastKeyPressed={lastKeyPressed} setLastKeyPressed={setLastKeyPressed}/>
            <KeyboardInfoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </main>
    )
}