import React, { useEffect } from 'react';
import { Page, Language } from '../types';
import { vehicles, translations } from '../data';

interface VehicleDetailProps {
    setCurrentPage: (page: Page) => void;
    selectedVehicleId: string | null;
    setSelectVehicle: (id: string) => void;
    lang: Language;
}

export const VehicleDetail: React.FC<VehicleDetailProps> = ({ setCurrentPage, selectedVehicleId, setSelectVehicle, lang }) => {
    const t = translations[lang];
    const vehicle = vehicles.find(v => v.id === selectedVehicleId);

    // Fallback if no vehicle selected (deep link scenario in real app, reset to fleet here)
    useEffect(() => {
        if (!vehicle) setCurrentPage(Page.FLEET);
    }, [vehicle, setCurrentPage]);

    if (!vehicle) return null;

    return (
        <div className="bg-background-dark min-h-screen">
            {/* Sticky Sub-Header */}
            <div className="sticky top-20 z-40 bg-background-dark/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
                <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setCurrentPage(Page.FLEET)} className="text-white hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <div className="h-6 w-px bg-white/20"></div>
                        <div className="flex flex-col">
                            <span className="text-xs text-champagne uppercase tracking-widest font-bold">2024 Model</span>
                            <span className="text-sm font-bold text-white leading-none">{vehicle.name}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:block text-sm font-bold text-white">${vehicle.price} {t["detail.daily"]}</span>
                        <button onClick={() => setCurrentPage(Page.BOOKING)} className="bg-primary hover:bg-primary-dark text-background-dark text-sm font-bold px-6 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(197,168,114,0.3)]">
                            {t["nav.reserve"]}
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                     <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background-dark z-10"></div>
                     <img 
                        src={vehicle.image} 
                        alt={vehicle.name}
                        className="w-full h-full object-cover transform scale-105"
                     />
                </div>
                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
                    <div className="mb-4 inline-flex items-center gap-2 border border-champagne/30 bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full">
                        <span className="material-symbols-outlined text-champagne text-sm">bolt</span>
                        <span className="text-champagne text-xs font-bold tracking-[0.2em] uppercase">{vehicle.category[lang]}</span>
                    </div>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-medium tracking-tighter leading-none mb-6 drop-shadow-2xl">
                         <span className="italic font-light text-white/90">{vehicle.name}</span>
                    </h1>
                </div>
            </section>

            {/* Specs */}
            <section className="max-w-[1440px] mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-5 flex flex-col gap-8 sticky top-32">
                        <div className="w-16 h-1 bg-primary mb-4"></div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                            {t["detail.specs"]}
                        </h2>
                        <div className="prose prose-invert prose-lg">
                            <p className="font-display text-xl leading-relaxed text-gray-300">
                                {vehicle.description[lang]}
                            </p>
                        </div>
                         <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Engine</p>
                                <p className="text-lg font-bold text-white">{vehicle.specs.engine}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Transmission</p>
                                <p className="text-lg font-bold text-white">{vehicle.specs.transmission[lang]}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                             <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">{t["detail.features"]}</p>
                             <ul className="space-y-2">
                                {vehicle.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-white/80">
                                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                        {f[lang]}
                                    </li>
                                ))}
                             </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-6">
                         {/* Stats Overlay on Image */}
                         <div className="relative group overflow-hidden rounded-xl aspect-[16/9] w-full bg-surface-dark">
                            <img 
                                src={vehicle.image} 
                                alt="Detail" 
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20 grid grid-cols-3 gap-2 md:gap-4">
                                <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-bold text-white">{vehicle.specs.zeroToSixty}<span className="text-sm font-normal text-gray-400 ml-1">s</span></div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">0-60 MPH</div>
                                </div>
                                <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-bold text-white">{vehicle.specs.speed}<span className="text-sm font-normal text-gray-400 ml-1">mph</span></div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Top Speed</div>
                                </div>
                                <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-bold text-white">{vehicle.specs.hp}<span className="text-sm font-normal text-gray-400 ml-1">hp</span></div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Horsepower</div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </section>
        </div>
    );
};