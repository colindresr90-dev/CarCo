import React from 'react';
import { Language } from '../types';
import { translations } from '../data';

interface PageProps {
    lang: Language;
}

// --- LOCATIONS ---
export const Locations: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    return (
        <div className="bg-background-dark min-h-screen pb-20 px-6">
            <div className="max-w-[1400px] mx-auto py-16">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div className="max-w-2xl">
                        <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight italic">{t["locations.title"]}</h1>
                        <p className="text-primary text-lg md:text-xl font-light max-w-xl leading-relaxed">
                            {t["locations.subtitle"]}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     {/* NY */}
                     <article className="group bg-surface-dark rounded-xl overflow-hidden shadow-2xl border border-white/5 hover:border-primary/30 transition-all flex flex-col">
                        <div className="relative h-[400px] w-full overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx-TNhOxF3xohb08KA0tstYpvLYa1lTvH-K8T28AxxkNHzNGgC0NLBC3eygKCtx14Ha55GYMqyz8sxAFG7g0ivg1-nNd9U6kxtsLtay1c4qAUHErHPfJy1b_OMH5uxVODmAiBYILg1aIpSa31bjDWoo53Coj4EHzMKVH_NanPV1FIdoXVFZrsrh2zDsyn-GuPenhW1knvE9CmT7b_I0G5Ldu5LWHBuxaDqxzhIR1HF0fbN6oDbZaonnt3-e8GJFtPKPg6TUN8B_Bw" alt="NY" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                                <span className="text-xs font-bold text-white tracking-widest uppercase">{t["locations.ny_region"]}</span>
                            </div>
                        </div>
                        <div className="p-10">
                            <h2 className="text-3xl font-bold text-white mb-6">{t["locations.ny_title"]}</h2>
                            <div className="space-y-4">
                                <p className="text-gray-400">55 Hudson Yards, New York, NY 10001</p>
                                <p className="text-gray-400">+1 (212) 555-0199</p>
                            </div>
                        </div>
                     </article>
                     {/* London */}
                     <article className="group bg-surface-dark rounded-xl overflow-hidden shadow-2xl border border-white/5 hover:border-primary/30 transition-all flex flex-col">
                        <div className="relative h-[400px] w-full overflow-hidden">
                             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCajhIpKTGvK4m-3PkrpE4zt-bAYrFSvglrsaxja259P_KKLJ4bMKZGWGd2QUkRGUUUzgOfwONtn74BpoNpp3RsSIc_vyK6PnDkedcBLGMUjhkXbTBd1bAe_kkRg7GCeFQs-exjuob_wOxkR8SGdkWyytkzVTtlZhqOOsEgwShtJNkgMQbfAwVpGnWaC4JfGkZXQ0quKjFbdVHXAO1gprVIKhG9aQGLTTvkqxj78kCB-R-dvNuArXAAh2eQW_zSU2cTIf3FzhMUmyk" alt="London" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                                <span className="text-xs font-bold text-white tracking-widest uppercase">{t["locations.ldn_region"]}</span>
                            </div>
                        </div>
                        <div className="p-10">
                            <h2 className="text-3xl font-bold text-white mb-6">{t["locations.ldn_title"]}</h2>
                            <div className="space-y-4">
                                <p className="text-gray-400">10 Park Lane, London, W1K 1BE</p>
                                <p className="text-gray-400">+44 20 7123 4567</p>
                            </div>
                        </div>
                     </article>
                </div>
            </div>
        </div>
    );
};

// --- HERITAGE ---
export const Heritage: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    return (
        <div className="bg-[#101622] min-h-screen text-white">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-transparent to-transparent z-10"></div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqIKCXqE5Qv4O_goMR7tsuHsMuKadDhS-Puy1-ls6pv_J-uWSXtTVdzs6e4ms4LZzYtWY0w7SwHji8Uvlt08mZom9OA-nLVbV2_BYLBBRKWgmPqvMBjmBlH13sPuTipOA_QwJjN931E0RUF-TMAzo2IPXJ31_vf6LRFABjuS6XWgObvtWF897LO_t1p83SJ44pFvayuRDqL9qzLF0bFSbNBuQ8ab5FASgXyGsrCjXd4La0MeYxqeVYSWs_lFsDEpkptOoIk3xQ9xc" alt="Heritage" className="absolute w-full h-full object-cover opacity-60" />
                <div className="relative z-20 text-center px-6">
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-6 mix-blend-overlay opacity-90 italic">
                        {t["heritage.title1"]} <br/> {t["heritage.title2"]}
                    </h1>
                </div>
            </section>
            
            <section className="py-24 container mx-auto px-6 max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX8FMKdX8s9Tq7juyr5_lWUUH-t9UDHr3ZeHXdy0tk35KE970BxpQgi_lQdCbzlupr9bsv4iceeROpduOlNnbuxozBLFy7rbwUKuFvYa3YbUPxfq9BckWjDCI7qPEPZ3ngdOu_OESQpi8NOb4V5-gozpi-tUfpG6SDEe5DsZZqVXROt8D_e_aucKQU156s43J8Uuj1zbi_H9c1ZYg-Zm_RhpBFdXnC94Cstzs4BwsC_0-Ya5zcN92dvG1C_Z9Wv9Fl7rag_tmojQI" alt="Vintage" className="rounded shadow-2xl grayscale" />
                    </div>
                    <div>
                        <span className="text-primary-blue text-sm font-bold uppercase tracking-[0.2em] mb-4 block">{t["heritage.label_origin"]}</span>
                        <h2 className="text-5xl font-medium mb-8 leading-tight">
                            {t["heritage.heading_origin"]} <span className="italic text-white/50">{t["heritage.heading_origin_highlight"]}</span>.
                        </h2>
                        <p className="text-white/70 font-light leading-relaxed mb-6">
                            {t["heritage.text_origin"]}
                        </p>
                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div><h3 className="text-4xl font-light mb-1">100+</h3><p className="text-sm text-white/50 uppercase">{t["heritage.stat_years"]}</p></div>
                            <div><h3 className="text-4xl font-light mb-1">4.2k</h3><p className="text-sm text-white/50 uppercase">{t["heritage.stat_wins"]}</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- SUPPORT ---
export const Support: React.FC<PageProps> = ({ lang }) => {
    const t = translations[lang];
    return (
        <div className="max-w-[900px] mx-auto px-6 py-20 min-h-screen">
             <div className="text-center mb-16">
                <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">{t["support.label"]}</span>
                <h1 className="text-5xl md:text-6xl font-serif font-medium text-white mb-6">{t["support.title"]}</h1>
            </div>
            
            <div className="space-y-12">
                 <section>
                    <h2 className="text-3xl font-serif text-white mb-6 border-b border-white/10 pb-4">{t["support.section_booking"]}</h2>
                     {[
                        { q: t["support.q1"], a: t["support.a1"] },
                        { q: t["support.q2"], a: t["support.a2"] }
                     ].map((item, i) => (
                        <details key={i} className="group border-b border-white/5 pb-4 mb-4">
                            <summary className="flex cursor-pointer items-center justify-between py-4 text-lg font-bold text-white hover:text-primary transition-colors">
                                <span>{item.q}</span>
                                <span className="material-symbols-outlined text-primary">add</span>
                            </summary>
                            <p className="text-gray-400 pb-4">{item.a}</p>
                        </details>
                     ))}
                 </section>
            </div>
        </div>
    );
};