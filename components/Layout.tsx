import React, { useState } from 'react';
import { Page, Language } from '../types';
import { translations } from '../data';

interface LayoutProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    children: React.ReactNode;
    lang: Language;
    setLang: (lang: Language) => void;
}

export const Layout: React.FC<LayoutProps> = ({ currentPage, setCurrentPage, children, lang, setLang }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const t = translations[lang];

    // Dynamic header styling based on page
    const isRedTheme = currentPage === Page.CONTACT;
    const isBlueTheme = currentPage === Page.HERITAGE;
    
    let activeColorClass = "text-primary";
    if (isRedTheme) activeColorClass = "text-primary-red";
    if (isBlueTheme) activeColorClass = "text-primary-blue";

    const navItems = [
        { label: t["nav.fleet"], page: Page.FLEET },
        { label: t["nav.heritage"], page: Page.HERITAGE },
        { label: t["nav.locations"], page: Page.LOCATIONS },
        { label: t["nav.support"], page: Page.SUPPORT },
        { label: t["nav.concierge"], page: Page.CONTACT },
    ];

    const toggleLang = () => {
        setLang(lang === 'en' ? 'es' : 'en');
    };

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Header */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 bg-background-dark/90 backdrop-blur-md border-b border-white/5`}>
                <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <button onClick={() => setCurrentPage(Page.HOME)} className="flex items-center gap-3 group">
                        <span className={`material-symbols-outlined text-3xl transition-colors ${activeColorClass}`}>diamond</span>
                        <span className="text-2xl font-black tracking-tight text-white uppercase font-sans">
                            Car<span className={activeColorClass}>Co</span>
                        </span>
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => setCurrentPage(item.page)}
                                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                                    currentPage === item.page ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase">
                            {t["nav.signin"]}
                        </button>
                         <button 
                            onClick={toggleLang}
                            className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase border border-white/20 px-2 py-1 rounded"
                        >
                            {lang === 'en' ? 'EN' : 'ES'}
                        </button>
                        <button 
                            onClick={() => setCurrentPage(Page.BOOKING)}
                            className={`px-6 py-2.5 rounded text-background-dark text-sm font-bold uppercase tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 ${
                                isRedTheme ? 'bg-primary-red text-white' : 
                                isBlueTheme ? 'bg-primary-blue text-white' : 
                                'bg-primary hover:bg-primary-dark'
                            }`}
                        >
                            {t["nav.reserve"]}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-background-dark border-b border-white/10 p-6 flex flex-col gap-4 lg:hidden">
                         {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => {
                                    setCurrentPage(item.page);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-left text-sm font-medium text-gray-300 hover:text-primary uppercase tracking-wider"
                            >
                                {item.label}
                            </button>
                        ))}
                         <button 
                            onClick={() => {
                                toggleLang();
                                setIsMobileMenuOpen(false);
                            }}
                            className="text-left text-sm font-medium text-gray-300 hover:text-primary uppercase tracking-wider"
                        >
                            Change Language: {lang.toUpperCase()}
                        </button>
                         <button 
                            onClick={() => {
                                setCurrentPage(Page.BOOKING);
                                setIsMobileMenuOpen(false);
                            }}
                            className="w-full bg-primary text-background-dark py-3 rounded font-bold uppercase"
                        >
                            {t["nav.reserve"]}
                        </button>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-surface-dark border-t border-white/10 pt-20 pb-10 mt-auto">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <span className={`material-symbols-outlined text-3xl ${activeColorClass}`}>diamond</span>
                                <span className="text-xl font-black tracking-tight text-white uppercase">Car<span className={activeColorClass}>Co</span></span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                {t["hero.subtitle"]}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Company</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><button onClick={() => setCurrentPage(Page.HERITAGE)} className="hover:text-white transition-colors">{t["nav.heritage"]}</button></li>
                                <li><button className="hover:text-white transition-colors">Careers</button></li>
                                <li><button className="hover:text-white transition-colors">Press</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">{t["nav.support"]}</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><button onClick={() => setCurrentPage(Page.CONTACT)} className="hover:text-white transition-colors">{t["nav.concierge"]}</button></li>
                                <li><button onClick={() => setCurrentPage(Page.SUPPORT)} className="hover:text-white transition-colors">FAQ</button></li>
                                <li><button className="hover:text-white transition-colors">Terms</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Stay Updated</h4>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    className="bg-black/30 border border-white/10 border-r-0 rounded-l px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 w-full"
                                />
                                <button className={`px-4 py-2 rounded-r font-bold uppercase text-xs tracking-wide transition-colors ${isRedTheme ? 'bg-primary-red text-white' : 'bg-primary text-background-dark'}`}>
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 text-xs">{t["footer.rights"]}</p>
                        <div className="flex items-center gap-6">
                            <button onClick={toggleLang} className="text-gray-500 hover:text-white transition-colors text-xs uppercase font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-base">language</span> {lang.toUpperCase()}
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};