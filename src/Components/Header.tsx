import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/" className="nav-logo">
                    <h2 className="logo-text">☕ Coffee</h2>
                </Link>

                <ul>
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
