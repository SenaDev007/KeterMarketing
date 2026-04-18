import Image from "next/image";
import Link from "next/link";

export function MinimalFooter() {
    const year = new Date().getFullYear();

    const navigation = [
        { title: "Accueil", href: "/" },
        { title: "Services", href: "/services" },
        { title: "Portfolio", href: "/portfolio" },
        { title: "À Propos", href: "/a-propos" },
        { title: "Contact", href: "/contact" },
    ];

    const legal = [
        { title: "Mentions légales", href: "/mentions-legales" },
        { title: "Confidentialité", href: "/mentions-legales#confidentialite" },
        { title: "Cookies", href: "/mentions-legales#cookies" },
    ];

    const socialLinks = [
        {
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            link: "https://www.linkedin.com/company/keter-marketing",
            label: "LinkedIn",
        },
        {
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
            link: "https://instagram.com/ketermarketing",
            label: "Instagram",
        },
        {
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            link: "https://x.com/ketermarketing",
            label: "X (Twitter)",
        },
    ];

    return (
        <footer className="relative">
            <div
                className="mx-auto max-w-4xl md:border-x"
                style={{
                    background:
                        "radial-gradient(35% 80% at 30% 0%, rgba(212,175,55,0.08), transparent), #0B0B0B",
                    borderColor: "rgba(212,175,55,0.15)",
                }}
            >
                {/* top border */}
                <div
                    className="absolute inset-x-0 h-px w-full"
                    style={{ background: "rgba(212,175,55,0.15)" }}
                />

                <div className="grid max-w-4xl grid-cols-6 gap-6 p-6">
                    {/* Brand column */}
                    <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
                        <Link href="/" className="flex items-center gap-1 w-max">
                            <Image
                                src="/images/logo-keter-marketing.png"
                                alt="Keter Marketing"
                                width={32}
                                height={32}
                                style={{ objectFit: "contain" }}
                            />
                            <span
                                style={{
                                    fontWeight: 700,
                                    fontSize: "15px",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                <span style={{ color: "#D4AF37" }}>ETER</span>
                                <span style={{ color: "#FFFFFF" }}> MARKETING</span>
                            </span>
                        </Link>

                        <p
                            className="max-w-sm font-mono text-sm text-balance"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                            On transforme vos visiteurs en clients. À chaque fois.
                        </p>

                        <div className="flex gap-2">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.label}
                                    aria-label={item.label}
                                    className="rounded-md p-1.5 transition-all duration-200"
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "rgba(255,255,255,0.5)",
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={item.link}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.borderColor = "#D4AF37";
                                        el.style.color = "#D4AF37";
                                        el.style.background = "rgba(212,175,55,0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.borderColor = "rgba(255,255,255,0.1)";
                                        el.style.color = "rgba(255,255,255,0.5)";
                                        el.style.background = "transparent";
                                    }}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-3 w-full md:col-span-1">
                        <span
                            className="mb-2 block text-xs font-bold tracking-widest uppercase"
                            style={{ color: "#D4AF37" }}
                        >
                            Navigation
                        </span>
                        <div className="flex flex-col gap-1">
                            {navigation.map(({ href, title }) => (
                                <Link
                                    key={href}
                                    className="w-max py-1 text-sm transition-colors duration-200"
                                    style={{ color: "rgba(255,255,255,0.45)" }}
                                    href={href}
                                    onMouseEnter={(e) =>
                                        ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                                    }
                                    onMouseLeave={(e) =>
                                        ((e.currentTarget as HTMLElement).style.color =
                                            "rgba(255,255,255,0.45)")
                                    }
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="col-span-3 w-full md:col-span-1">
                        <span
                            className="mb-2 block text-xs font-bold tracking-widest uppercase"
                            style={{ color: "#D4AF37" }}
                        >
                            Légal
                        </span>
                        <div className="flex flex-col gap-1">
                            {legal.map(({ href, title }) => (
                                <Link
                                    key={href}
                                    className="w-max py-1 text-sm transition-colors duration-200"
                                    style={{ color: "rgba(255,255,255,0.45)" }}
                                    href={href}
                                    onMouseEnter={(e) =>
                                        ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                                    }
                                    onMouseLeave={(e) =>
                                        ((e.currentTarget as HTMLElement).style.color =
                                            "rgba(255,255,255,0.45)")
                                    }
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* bottom border */}
                <div
                    className="absolute inset-x-0 h-px w-full"
                    style={{ background: "rgba(212,175,55,0.15)" }}
                />

                <div className="flex max-w-4xl flex-col justify-between gap-2 pt-3 pb-6">
                    <p
                        className="text-center text-sm font-thin"
                        style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                        © {year} Keter Marketing. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
