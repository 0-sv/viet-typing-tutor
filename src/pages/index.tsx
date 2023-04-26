import {Inter} from 'next/font/google'
import InputKeyDisplay from "@/components/InputKeyDisplay";
import {useEffect, useState} from "react";
import KeyboardInfoModal from "@/components/KeyboardInfoModal";
import KeyboardButton from "@/components/KeyboardLogo";

const inter = Inter({subsets: ['latin']})

interface VietnameseWord {
    telex: string;
    translation: string;
}

interface Dictionary {
    [key: string]: VietnameseWord;
}

export default function Home() {
    const [lastKeyPressed, setLastKeyPressed] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState<Dictionary>({});
    const [randomKey, setRandomKey] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://raw.githubusercontent.com/0-sv/viet-typing-tutor/main/public/data.json');
            return await response.json();
        }

        fetchData().then(data => setData(data));
    }, []);


    useEffect(() => {
        setRandomKey(getRandomKey())
    }, [data]);

    const getRandomKey = (): string => {
        const keys = Object.keys(data);
        const randomIndex = Math.floor(Math.random() * keys.length);
        return keys[randomIndex];
    }

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <code className="font-mono font-bold">viet-typing-tutor (telex)</code>
            <div>
                <label>word:</label>
                <label
                    className="block text-sm font-medium border border-gray-300">{randomKey}
                </label>
            </div>
            <div>
                <label>translation:</label>
                <label
                    className="block text-sm font-medium border border-gray-300">{data[randomKey]?.translation}
                </label>
            </div>
            <div>
                <label>you should type:</label>
                <label
                    className="block text-sm font-medium border border-gray-300">{data[randomKey]?.telex}
                </label>
            </div>
            <InputKeyDisplay lastKeyPressed={lastKeyPressed} setLastKeyPressed={setLastKeyPressed}/>
            <KeyboardInfoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div>
                <KeyboardButton setModalOpen={setModalOpen}/>
            </div>
        </main>
    )
}