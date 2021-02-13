export default function blogs() {
    return (
        <section id="blogs">
            <div className="container mx-auto mt-40">
                <div className="p-6">
                    <h1 className="text-primary dark:text-white text-4xl font-bold mb-2">Blogs</h1>
                    <svg width="55" height="10" viewBox="0 0 55 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="55" height="10" rx="5" fill="#67C457" />
                    </svg>
                </div>
                <div>
                    <div className="mt-24">
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-2xl md:text-4xl">
                            <div className="w-full px-4 h-32">
                                <a href="https://www.instagram.com/p/CHfCc4JD1EE/" target="_blank" className="text-primary font-core">
                                    Clean Code JS
                                    </a>
                                <svg width="55" height="10" viewBox="0 0 55 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="55" height="10" rx="5" fill="#67C457" />
                                </svg>

                            </div>
                            <div className="w-full px-4 h-32">
                                <a href="https://www.instagram.com/p/CGmENPND9GT/" target="_blank" className="text-primary font-core">
                                    HTTP Code
                                    </a>
                                <svg width="55" height="10" viewBox="0 0 55 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="55" height="10" rx="5" fill="#67C457" />
                                </svg>

                            </div>
                            <div className="w-full px-4 h-32">
                                <a href="https://www.instagram.com/p/CJyWol2D8pM/" target="_blank" className="text-primary font-core">
                                    Array Method JS
                                    </a>
                                <svg width="55" height="10" viewBox="0 0 55 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="55" height="10" rx="5" fill="#67C457" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
