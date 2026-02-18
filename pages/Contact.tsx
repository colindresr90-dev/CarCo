import React from 'react';
import { Page, Language } from '../types';
import { translations } from '../data';

interface ContactProps {
    lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
    const t = translations[lang];

    return (
        <div className="bg-[#221013] min-h-screen pb-20">
             <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-6 py-20">
                 {/* Left Column */}
                 <div className="lg:col-span-4 flex flex-col gap-8">
                    <div className="mb-4">
                        <span className="text-primary-red font-bold tracking-widest uppercase text-xs mb-2 block">{t["contact.pretitle"]}</span>
                        <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                            {t["contact.title1"]} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">{t["contact.title2"]}</span>
                        </h1>
                        <p className="text-white/60 mt-4 text-lg font-light leading-relaxed">
                            {t["contact.subtitle"]}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                         <div className="group flex items-center gap-4 bg-[#2c1519] border border-white/5 hover:border-primary-red/30 rounded-xl p-4 transition-all duration-300">
                             <div className="flex items-center justify-center rounded-lg bg-[#492229] group-hover:bg-primary-red group-hover:text-white transition-colors shrink-0 size-12 text-primary-red">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <p className="text-white font-medium">{t["contact.phone_label"]}</p>
                                <p className="text-white/50 text-sm">+1 (800) 555-CARCO</p>
                            </div>
                         </div>
                         <div className="group flex items-center gap-4 bg-[#2c1519] border border-white/5 hover:border-primary-red/30 rounded-xl p-4 transition-all duration-300">
                             <div className="flex items-center justify-center rounded-lg bg-[#492229] group-hover:bg-primary-red group-hover:text-white transition-colors shrink-0 size-12 text-primary-red">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <p className="text-white font-medium">{t["contact.email_label"]}</p>
                                <p className="text-white/50 text-sm">vip@carco.com</p>
                            </div>
                         </div>
                    </div>
                 </div>

                 {/* Right Column Form */}
                 <div className="lg:col-span-8 bg-[#1a0c0e] rounded-2xl border border-white/5 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-white mb-2">{t["contact.form_title"]}</h2>
                        <p className="text-white/40 mb-10 font-light">{t["contact.form_subtitle"]}</p>
                        
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70 ml-1">{t["contact.label_name"]}</label>
                                    <input className="w-full bg-[#27272a] border border-transparent text-white text-sm rounded-lg focus:ring-1 focus:ring-primary-red focus:border-primary-red block w-full p-3 placeholder-white/20 transition-all duration-300" placeholder="John Doe" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70 ml-1">{t["contact.label_email"]}</label>
                                    <input className="w-full bg-[#27272a] border border-transparent text-white text-sm rounded-lg focus:ring-1 focus:ring-primary-red focus:border-primary-red block w-full p-3 placeholder-white/20 transition-all duration-300" placeholder="john@example.com" type="email" />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70 ml-1">{t["contact.label_subject"]}</label>
                                <select className="w-full bg-[#27272a] border border-transparent text-white text-sm rounded-lg focus:ring-1 focus:ring-primary-red focus:border-primary-red block w-full p-3 transition-all duration-300">
                                    <option>General Inquiry</option>
                                    <option>Fleet Reservation</option>
                                    <option>Membership Support</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70 ml-1">{t["contact.label_message"]}</label>
                                <textarea className="w-full bg-[#27272a] border border-transparent text-white text-sm rounded-lg focus:ring-1 focus:ring-primary-red focus:border-primary-red block w-full p-3 placeholder-white/20 transition-all duration-300 resize-none" rows={4} placeholder="..."></textarea>
                            </div>
                            <button className="w-full bg-primary-red hover:bg-[#ff1f48] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(242,13,51,0.4)] hover:shadow-[0_6px_25px_rgba(242,13,51,0.6)]">
                                {t["contact.btn_submit"]}
                            </button>
                        </form>
                    </div>
                 </div>
             </div>
        </div>
    );
};