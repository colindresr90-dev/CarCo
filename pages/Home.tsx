import React from 'react';
import { Page, Language } from '../types';
import { vehicles, translations } from '../data';

interface HomeProps {
    setCurrentPage: (page: Page) => void;
    setSelectVehicle: (id: string) => void;
    lang: Language;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage, setSelectVehicle, lang }) => {
    const t = translations[lang];
    // Filter featured cars from the centralized data
    const featuredCars = vehicles.filter(v => v.featured).slice(0, 3);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative min-h-screen w-full flex items-center overflow-hidden -mt-20 pt-20">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzT_D_vqZOJ3r-1ybNI8UiB9-_EwSvMBQ3B-C02BDHUcvFzTwIJl69gzRoW66ecW0qBT9tviRz-4ieeQICmHC_CdgRTYIIZTP37iK4KVPGHe59hjbUFxIdVoqg55dHsk2Vp6h6mUyqpNENIQfg_Pn_yxopVRnZLL0OYbQTpghO6jFTjqLnmrNQAy2l8mR2V4BF3fKaLLIw0p-yfR-S7o-N36NdsGbXF62JyXoGW5koN_e5tT9Rq0xgy9xuS7cDeKEl2s8WRvrcGWA" 
                        alt="Luxury Car" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-hero-gradient"></div>
                </div>

                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-32">
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary text-xs font-bold uppercase tracking-widest">{t["hero.badge"]}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                            {t["hero.title1"]} <br />
                            <span className="text-stroke-gold text-transparent">{t["hero.title2"]}</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl font-light max-w-xl leading-relaxed mt-4">
                            {t["hero.subtitle"]}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button 
                                onClick={() => setCurrentPage(Page.FLEET)}
                                className="bg-primary hover:bg-primary-dark text-background-dark px-8 py-4 rounded text-base font-bold uppercase tracking-wide transition-all flex items-center gap-2 group"
                            >
                                {t["hero.cta"]}
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Booking Bar Widget (Floating) */}
                <div className="absolute bottom-0 left-0 w-full z-20 border-t border-white/10 bg-surface-dark/90 backdrop-blur-xl">
                    <div className="max-w-[1440px] mx-auto px-6 py-6">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                            <div className="md:col-span-3">
                                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">{t["booking.pickup"]}</label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">location_on</span>
                                    <input className="w-full bg-black/40 border border-white/10 rounded px-4 pl-10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm" placeholder="e.g. JFK Airport" type="text" />
                                </div>
                            </div>
                            <div className="md:col-span-3">
                                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">{t["booking.return"]}</label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">flag</span>
                                    <input className="w-full bg-black/40 border border-white/10 rounded px-4 pl-10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm" placeholder="Same as pick-up" type="text" />
                                </div>
                            </div>
                            <div className="md:col-span-4 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">{t["booking.start"]}</label>
                                    <div className="relative group">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">calendar_today</span>
                                        <input className="w-full bg-black/40 border border-white/10 rounded px-4 pl-10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm" placeholder="Select date" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2 font-medium">{t["booking.end"]}</label>
                                    <div className="relative group">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">event</span>
                                        <input className="w-full bg-black/40 border border-white/10 rounded px-4 pl-10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm" placeholder="Select date" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <button onClick={() => setCurrentPage(Page.BOOKING)} className="w-full bg-primary hover:bg-primary-dark text-background-dark font-bold uppercase tracking-wide py-3 rounded transition-colors shadow-lg shadow-primary/20 h-[46px]">
                                    {t["booking.check"]}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Collection */}
            <section className="py-24 bg-background-dark">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{t["collection.title"]}</h2>
                            <p className="text-gray-400 max-w-md">{t["collection.subtitle"]}</p>
                        </div>
                        <button onClick={() => setCurrentPage(Page.FLEET)} className="text-white hover:text-primary flex items-center gap-2 border-b border-white/20 hover:border-primary pb-1 transition-all uppercase text-sm tracking-widest font-bold">
                            {t["collection.view_all"]}
                            <span className="material-symbols-outlined text-sm">arrow_outward</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCars.map((car) => (
                            <div key={car.id} className="group relative rounded overflow-hidden cursor-pointer bg-surface-dark border border-white/5 hover:border-primary/30 transition-all">
                                <div className="h-[300px] overflow-hidden">
                                    <img 
                                        src={car.image} 
                                        alt={car.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent p-6 flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-white mb-1 font-serif">{car.name}</h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-primary font-medium text-lg">${car.price} <span className="text-xs text-gray-400 font-normal uppercase">{t["detail.daily"]}</span></span>
                                        <button 
                                            onClick={() => {
                                                setSelectVehicle(car.id);
                                                setCurrentPage(Page.VEHICLE_DETAIL);
                                            }}
                                            className="bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                                        >
                                            {t["action.view"]}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};