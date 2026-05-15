export default function Header() {

    const scrollTo = (id) => {

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        })

    }

    return (
        <header className="sticky top-0 z-50 w-full">

            {/* Main Navbar */}
            <div className="bg-[#020e17] text-white px-6 md:px-12 py-4 flex items-center justify-between shadow-md">

                {/* Left */}
                <div className="flex items-center gap-3">

                    <img
                        src="/logo.jpeg"
                        alt="logo"
                        className="w-10 h-10 object-cover rounded-lg"
                    />

                    <div className="text-xl font-semibold">

                        <span className="text-white">
                            SJI
                        </span>{" "}

                        <span className="text-green-400">
                            Investment
                        </span>

                    </div>

                </div>

                {/* Navigation */}
                <nav className="hidden md:flex gap-8 text-sm font-medium">

                    <button
                        onClick={() => scrollTo("home")}
                        className="hover:text-green-400 transition"
                    >
                        Home
                    </button>

                    <button
                        onClick={() => scrollTo("stock")}
                        className="hover:text-green-400 transition"
                    >
                        Stock
                    </button>

                    <button
                        onClick={() => scrollTo("etf")}
                        className="hover:text-green-400 transition"
                    >
                        ETF
                    </button>

                    <button
                        onClick={() => scrollTo("wealth")}
                        className="hover:text-green-400 transition"
                    >
                        Wealth
                    </button>

                    <button
                        onClick={() => scrollTo("news")}
                        className="hover:text-green-400 transition"
                    >
                        News
                    </button>

                    <button
                        onClick={() => scrollTo("about")}
                        className="hover:text-green-400 transition"
                    >
                        About Us
                    </button>

                </nav>

                {/* Right */}
                <div className="flex items-center gap-3">

                    <button className="border border-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-500 hover:text-black transition">

                        ເຂົ້າສູ່ລະບົບ

                    </button>

                    <button className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition">

                        ເປີດບັນຊີ

                    </button>

                </div>

            </div>

        </header>
    )
}