"use client"

import React, { useEffect, useState } from 'react';
import Link from "next/link";

function Navbar() {
    
    const navlinks = [
        {id: 1, text: "The JavaScript language", href: "#javascript-part-1"},
        {id: 2, text: "Browser: Document, Events, Interfaces", href: "#javascript-part-2"},
        {id: 3, text: "Additional articals", href: "#javascript-part-3"},
    ]
  return (
    <div className='flex justify-between'>
        {navlinks.map((link) => (
            <Link key={link.id} href={link.href}>
            <div className="group relative hover:bg-gray-300 rounded-md transition-shadow">
                <li className="block text-white hover:text-slate-800 p-2">
                {link.text}
                </li>
            </div>
            </Link>
        ))}
    </div>

  )
}

export default Navbar