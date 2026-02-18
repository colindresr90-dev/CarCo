import React, { useState } from 'react';
import { Page, Language } from '../types';
import { vehicles, translations } from '../data';

interface BookingProps {
    setCurrentPage: (page: Page) => void;
    selectedVehicleId: string | null;
    lang: Language;
}

export const Booking: React.FC<BookingProps> = ({ setCurrentPage, selectedVehicleId, lang }) => {
    const [step, setStep] = useState(1);
    const t = translations[lang];

    // Find vehicle or fallback to first featured
    const vehicle = vehicles.find(v => v.id === selectedVehicleId) || vehicles[0];

    const vehiclePrice = vehicle.price;

    return (
        <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto min-h-[calc(100vh-80px)] bg-background-dark text-white">
            {/* Left Panel: Summary (Sticky on Desktop) */}
            <aside className="w-full lg:w-[480px] bg-surface-dark border-r border-white/5 p-6 lg:p-10 flex flex-col gap-8 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] overflow-y-auto">
                <div className="flex flex-col gap-2">
                    <h1 className="text-white/60 text-sm font-medium uppercase tracking-widest">{t["booking.summary"]}</h1>
                    <h2 className="font-serif text-3xl font-bold text-white">{vehicle.name}</h2>
                    <div className="flex gap-4 text-primary/80 text-sm font-medium mt-1">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined !text-[16px]">speed</span> {vehicle.category[lang]}</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined !text-[16px]">local_gas_station</span> {vehicle.specs.engine}</span>
                    </div>
                </div>
                
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden group shadow-2xl shadow-black/50">
                    <img src={vehicle.image} alt="Vehicle" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                     <div className="absolute bottom-4 left-4 right-4 z-20">
                        <p className="text-white/80 text-xs mb-1">Daily Rate</p>
                        <p className="text-white font-serif text-2xl font-bold">${vehiclePrice.toLocaleString()}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 py-6 border-t border-white/10">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-white/60">Base Price (3 days)</span>
                        <span className="font-medium">${(vehiclePrice * 3).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-white/60">Taxes & Fees</span>
                        <span className="font-medium">$425</span>
                    </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-white/60">Security Deposit</span>
                        <span className="font-medium">$2,000</span>
                    </div>
                    <div className="h-px bg-white/10 my-2"></div>
                     <div className="flex justify-between items-center text-lg font-serif font-bold text-primary">
                        <span>{t["booking.total"]}</span>
                        <span>${((vehiclePrice * 3) + 2425).toLocaleString()}</span>
                    </div>
                </div>
            </aside>

            {/* Right Panel: Steps */}
            <section className="flex-1 flex flex-col relative">
                {/* Stepper */}
                <div className="sticky top-20 z-30 bg-background-dark/95 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 py-6">
                     <div className="flex items-center justify-between max-w-3xl mx-auto">
                        <div className={`flex items-center gap-3 ${step >= 1 ? 'opacity-100' : 'opacity-50'}`}>
                            <div className={`size-8 rounded-full ${step >= 1 ? 'bg-primary text-black' : 'border border-white/20'} flex items-center justify-center font-bold text-sm`}>1</div>
                            <span className="text-white font-medium text-sm hidden sm:inline-block">{t["booking.step1"]}</span>
                        </div>
                        <div className="h-px flex-1 bg-white/10 mx-4"></div>
                        <div className={`flex items-center gap-3 ${step >= 2 ? 'opacity-100' : 'opacity-50'}`}>
                            <div className={`size-8 rounded-full ${step >= 2 ? 'bg-primary text-black' : 'border border-white/20'} flex items-center justify-center font-bold text-sm`}>2</div>
                            <span className="text-white font-medium text-sm hidden sm:inline-block">{t["booking.step2"]}</span>
                        </div>
                         <div className="h-px flex-1 bg-white/10 mx-4"></div>
                        <div className={`flex items-center gap-3 ${step >= 3 ? 'opacity-100' : 'opacity-50'}`}>
                            <div className={`size-8 rounded-full ${step >= 3 ? 'bg-primary text-black' : 'border border-white/20'} flex items-center justify-center font-bold text-sm`}>3</div>
                            <span className="text-white font-medium text-sm hidden sm:inline-block">{t["booking.step3"]}</span>
                        </div>
                     </div>
                </div>

                <div className="flex-1 px-6 lg:px-12 py-10">
                    <div className="max-w-3xl mx-auto flex flex-col gap-12">
                        {step === 1 && (
                             <div className="flex flex-col gap-6 animate-fade-in">
                                <div>
                                    <h2 className="font-serif text-3xl font-bold text-white mb-2">{t["booking.pickup"]}</h2>
                                    <p className="text-white/60">Choose where you'd like to start your journey.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                     <label className="relative group cursor-pointer">
                                        <input type="radio" name="location" defaultChecked className="peer sr-only" />
                                        <div className="h-full p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all duration-300">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-2 rounded-lg bg-white/5 text-primary">
                                                    <span className="material-symbols-outlined">flight_land</span>
                                                </div>
                                                <div className="size-5 rounded-full border-2 border-white/20 peer-checked:bg-primary"></div>
                                            </div>
                                            <h3 className="font-bold text-lg text-white mb-1">JFK Airport</h3>
                                            <p className="text-sm text-white/60 mb-3">Terminal 4 Valet</p>
                                            <div className="text-xs text-primary bg-primary/10 inline-block px-2 py-1 rounded">Curbside Delivery</div>
                                        </div>
                                    </label>
                                    <label className="relative group cursor-pointer">
                                        <input type="radio" name="location" className="peer sr-only" />
                                        <div className="h-full p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all duration-300">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-2 rounded-lg bg-white/5 text-primary">
                                                    <span className="material-symbols-outlined">storefront</span>
                                                </div>
                                                <div className="size-5 rounded-full border-2 border-white/20"></div>
                                            </div>
                                            <h3 className="font-bold text-lg text-white mb-1">Manhattan Showroom</h3>
                                            <p className="text-sm text-white/60 mb-3">5th Avenue</p>
                                        </div>
                                    </label>
                                </div>
                             </div>
                        )}

                        {step === 2 && (
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h2 className="font-serif text-3xl font-bold text-white mb-2">{t["booking.step2"]}</h2>
                                    <p className="text-white/60">Minimum booking duration is 24 hours.</p>
                                </div>
                                <div className="bg-surface-dark rounded-xl border border-white/10 overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="font-medium text-white">October 2023</span>
                                            <div className="flex gap-2">
                                                <button className="p-1 hover:bg-white/10 rounded-full text-white/60"><span className="material-symbols-outlined">chevron_left</span></button>
                                                <button className="p-1 hover:bg-white/10 rounded-full text-white/60"><span className="material-symbols-outlined">chevron_right</span></button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="text-xs text-white/30 py-2">{d}</div>)}
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 text-sm">
                                            <div className="aspect-square"></div><div className="aspect-square"></div>
                                            {[...Array(22)].map((_, i) => <button key={i} className="aspect-square rounded-full flex items-center justify-center text-white/30 cursor-not-allowed">{i+1}</button>)}
                                            <button className="aspect-square rounded-full bg-white/10 text-white hover:bg-white/20">23</button>
                                            <button className="aspect-square rounded-l-full bg-primary text-black font-bold">24</button>
                                            <div className="bg-primary/20 flex items-center justify-center text-white">25</div>
                                            <div className="bg-primary/20 flex items-center justify-center text-white">26</div>
                                            <button className="aspect-square rounded-r-full bg-primary text-black font-bold">27</button>
                                            <button className="aspect-square rounded-full bg-white/10 text-white hover:bg-white/20">28</button>
                                            <button className="aspect-square rounded-full bg-white/10 text-white hover:bg-white/20">29</button>
                                            <button className="aspect-square rounded-full bg-white/10 text-white hover:bg-white/20">30</button>
                                            <button className="aspect-square rounded-full bg-white/10 text-white hover:bg-white/20">31</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                             <div className="flex flex-col gap-6 text-center py-10">
                                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                    <span className="material-symbols-outlined text-4xl">check</span>
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-white">{t["booking.step3"]}</h2>
                                <p className="text-white/60">A confirmation email has been sent to you. Our concierge will contact you shortly to finalize details.</p>
                             </div>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="sticky bottom-0 bg-background-dark border-t border-white/5 p-6 lg:px-12 w-full z-40">
                    <div className="max-w-3xl mx-auto flex items-center justify-between">
                         <button 
                            onClick={() => step > 1 ? setStep(step - 1) : setCurrentPage(Page.FLEET)}
                            className="text-white/60 hover:text-white font-medium transition-colors flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined !text-lg">arrow_back</span>
                            Back
                        </button>
                        <button 
                            onClick={() => step < 3 ? setStep(step + 1) : setCurrentPage(Page.HOME)}
                            className="bg-primary hover:bg-primary-dark text-background-dark font-bold py-3 px-8 rounded-lg shadow-[0_0_15px_rgba(197,168,114,0.2)] transition-all flex items-center gap-2"
                        >
                            {step === 3 ? 'Return Home' : 'Continue'}
                            <span className="material-symbols-outlined !text-lg">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};