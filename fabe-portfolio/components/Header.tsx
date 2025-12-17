import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="logo">JZ</div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/aboutme">About Me</Link>
                <Link href="/projects">Projects</Link>
            <a href="#footer">Contact</a>
            </nav>
        </header>
    );
}