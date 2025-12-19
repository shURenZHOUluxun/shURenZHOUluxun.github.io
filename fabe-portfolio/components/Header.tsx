import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="logo">JZ</div>
            <nav>
                <Link href="/" rel="noopener noreferrer">Home</Link>
                <Link href="/aboutme" rel="noopener noreferrer">About Me</Link>
                {/* <Link href="/projects" rel="noopener noreferrer">Projects</Link> */}
            {/* <a href="#footer">Contact</a> */}
            </nav>
        </header>
    );
}