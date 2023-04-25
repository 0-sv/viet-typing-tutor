import {Inter} from 'next/font/google'
import InputKeyDisplay from "@/components/InputKeyDisplay";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <code className="font-mono font-bold">viet-typing-tutor</code>
            <InputKeyDisplay/>

        </main>
    )
}