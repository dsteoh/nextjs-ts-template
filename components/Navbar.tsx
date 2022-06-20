import type { NextPage } from 'next'
import Link from 'next/link'

const Navbar: NextPage = () => {
    return (
        <nav>
            <div className = "logo">
                <h1>Fruit List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/fruits"><a>Fruit Listing</a></Link>
        </nav>
    )
}

export default Navbar;