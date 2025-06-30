import React from 'react';
import Link from 'next/link'

export default function Navbar() {
    return(
        <nav className='w-full bg-black text-white p-4 flex justify-between items-center'>
            <div className='font-bold text-xl'><Link href={'/'}>30in30</Link></div>
            <div className='space-x-4'>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'https://jimmer.dev'}>Dev</Link>
            </div>
        </nav>
    );
}