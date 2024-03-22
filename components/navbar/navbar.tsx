import style from '@/components/navbar/navbar.module.css'
import Link from 'next/link';
import {signIn, signOut, useSession} from 'next-auth/react'


export default function Navbar() {
    const {data:session} = useSession();
    return (
        <nav className={style.navbar_body}>
            <div className={style.navbar_links}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/guilds">Guilds</Link></li>
                    {session && 
                        <li><Link onClick={() => signOut()} href="/">Signout {session.user?.email}</Link></li>
                    }
                    {!session && 
                        <li><Link onClick={() => signIn()} href="/">Signin</Link></li>
                    }
                </ul>
            </div>
    </nav>
    );
}