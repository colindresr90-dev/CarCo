import React, { useState } from 'react';
import { Page, Language } from '../types';
import { vehicles, translations } from '../data';

interface FleetProps {
    setCurrentPage: (page: Page) => void;
    setSelectVehicle: (id: string) => void;
    lang: Language;
}

export const Fleet: React.FC<FleetProps> = ({ setCurrentPage, setSelectVehicle, lang }) => {
    const t = translations[lang];
    const [activeCategory, setActiveCategory] = useState('All Models');

    // Extract unique categories from data
    const categories = ['All Models', ...Array.from(new Set(vehicles.map(v => v.category[lang])))];

    const filteredCars = activeCategory === 'All Models' 
        ? vehicles 
        : vehicles.filter(c => c.category[lang] === activeCategory);

    return (
        <div className="w-full flex flex-col lg:flex-row min-h-screen bg-background-dark">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 lg:h-[calc(100vh-80px)] lg:sticky lg:top-20 bg-background-dark border-r border-white/5 p-6 overflow-y-auto shrink-0 z-40">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-serif font-semibold">Filters</h2>
                        <button 
                            onClick={() => setActiveCategory('All Models')} 
                            className="text-xs text-primary hover:text-white uppercase tracking-wider font-medium"
                        >
                            {t["filter.reset"]}
                        </button>
                    </div>
                    {/* Categories */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t["filter.category"]}</h3>
                        <div className="space-y-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`flex items-center justify-between w-full p-2 rounded text-sm text-left transition-colors ${
                                        activeCategory === cat ? 'bg-surface-highlight text-white' : 'text-gray-400 hover:text-white hover:bg-surface-highlight/50'
                                    }`}
                                >
                                    <span>{cat}</span>
                                    {activeCategory === cat && <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>}
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr className="border-white/5" />
                    {/* Performance Mock */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t["filter.performance"]}</h3>
                         {['All-Wheel Drive', 'V8 Engine', 'Turbocharged', 'Hybrid / Electric'].map(opt => (
                            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="form-checkbox h-4 w-4 rounded border-white/20 bg-surface-dark text-primary focus:ring-0" />
                                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{opt}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Main Grid */}
            <div className="flex-1 p-6 lg:p-10">
                <div className="flex flex-col gap-2 mb-10">
                    <h2 className="text-4xl font-serif font-medium text-white tracking-tight">{t["collection.title"]}</h2>
                    <p className="text-gray-400 max-w-2xl">{t["collection.subtitle"]}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredCars.map((car) => (
                        <div key={car.id} className={`relative group overflow-hidden rounded-lg bg-surface-dark border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col`}>
                             <div className={`relative w-full overflow-hidden h-64`}>
                                <img 
                                    src={car.image} 
                                    alt={car.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60"></div>
                                <div className="absolute top-3 right-3 z-10">
                                    <button className="p-2 rounded-full bg-black/40 backdrop-blur-sm text-white hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">favorite_border</span>
                                    </button>
                                </div>
                                {car.featured && (
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-black rounded-sm">Featured</span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className={`text-xl font-serif text-white mb-1`}>{car.name}</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">{car.category[lang]} • {car.specs.passengers} Passengers</p>
                                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-gray-400 mb-4">
                                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">bolt</span> {car.specs.hp} HP</div>
                                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">speed</span> {car.specs.speed} MPH</div>
                                        <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">timer</span> {car.specs.zeroToSixty}s 0-60</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                                    <p className="text-primary font-bold text-lg">${car.price} <span className="text-xs font-normal text-white/50">{t["detail.daily"]}</span></p>
                                    <button 
                                        onClick={() => {
                                            setSelectVehicle(car.id);
                                            setCurrentPage(Page.VEHICLE_DETAIL);
                                        }}
                                        className="text-white hover:text-primary text-sm font-medium flex items-center gap-1 transition-colors"
                                    >
                                        {t["action.reserve"]} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};