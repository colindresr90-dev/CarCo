import { Vehicle, Language } from './types';

export const translations = {
    en: {
        // Navigation
        "nav.fleet": "The Fleet",
        "nav.heritage": "Legacy",
        "nav.locations": "Hubs",
        "nav.support": "Assistance",
        "nav.concierge": "Concierge",
        "nav.signin": "Client Access",
        "nav.reserve": "Request Key",
        
        // Hero (Home)
        "hero.badge": "2024 Collection Available",
        "hero.title1": "Pursuit of",
        "hero.title2": "Perfection.",
        "hero.subtitle": "An uncompromising selection of the world's finest automotive engineering. For those who understand that the journey matters more than the destination.",
        "hero.cta": "Discover Fleet",
        
        // Booking Widget
        "booking.pickup": "Collection Point",
        "booking.return": "Return Point",
        "booking.start": "Acquisition Date",
        "booking.end": "Relinquish Date",
        "booking.check": "Check Availability",
        
        // Collection / Fleet
        "collection.title": "Curated Stable",
        "collection.subtitle": "Peak performance, delivered. Each chassis is meticulously maintained to factory specifications for the discerning driver.",
        "collection.view_all": "View Full Roster",
        
        // Filters
        "filter.all": "All Classes",
        "filter.reset": "Clear Filters",
        "filter.category": "Class",
        "filter.performance": "Capabilities",
        
        // Actions & UI
        "action.view": "Inspect",
        "action.reserve": "Select",
        "detail.daily": "/ day",
        "detail.specs": "Technical Data",
        "detail.features": "Appointments",
        
        // Booking Flow
        "booking.step1": "Origin",
        "booking.step2": "Duration",
        "booking.step3": "Finalize",
        "booking.summary": "Itinerary",
        "booking.total": "Estimated Total",
        
        // Footer
        "footer.rights": "© 2024 CarCo Luxury Rentals. Excellence in Motion.",
        
        // Contact Page
        "contact.pretitle": "Premium Support",
        "contact.title1": "Elevate Your",
        "contact.title2": "Experience.",
        "contact.subtitle": "Our dedicated concierge team stands ready 24/7 to ensure your journey is nothing short of exceptional.",
        "contact.phone_label": "VIP Concierge Line",
        "contact.email_label": "Priority Correspondence",
        "contact.form_title": "Request Assistance",
        "contact.form_subtitle": "Complete the secure form below. Our team typically responds within 15 minutes.",
        "contact.label_name": "Full Identity",
        "contact.label_email": "Contact Email",
        "contact.label_subject": "Topic",
        "contact.label_message": "Request Details",
        "contact.btn_submit": "Dispatch Request",
        
        // Locations
        "locations.title": "Global Presence",
        "locations.subtitle": "Beyond transportation. Experience automotive excellence at our premier architectural hubs.",
        "locations.ny_title": "New York Atrium",
        "locations.ny_region": "North America",
        "locations.ldn_title": "London Mayfair",
        "locations.ldn_region": "United Kingdom",
        
        // Heritage
        "heritage.title1": "Uncompromising",
        "heritage.title2": "Excellence.",
        "heritage.label_origin": "Our Origins",
        "heritage.heading_origin": "From the racetrack to the",
        "heritage.heading_origin_highlight": "open road",
        "heritage.text_origin": "Founded on a principle of uncompromising speed and elegance, CarCo has spent a century refining the art of the automobile. What began in a small garage is now a global symbol of excellence.",
        "heritage.stat_years": "Years",
        "heritage.stat_wins": "Championships",
        
        // Support
        "support.label": "Support Center",
        "support.title": "Client Enquiries",
        "support.section_booking": "Reservations & Access",
        "support.q1": "Lead time for reservations?",
        "support.a1": "We recommend securing your vehicle at least 24 hours in advance to guarantee specific model availability.",
        "support.q2": "Modification policy?",
        "support.a2": "Itineraries can be adjusted up to 6 hours prior to the scheduled acquisition time via your client portal."
    },
    es: {
        // Navigation
        "nav.fleet": "La Flota",
        "nav.heritage": "Legado",
        "nav.locations": "Centros",
        "nav.support": "Asistencia",
        "nav.concierge": "Conserjería",
        "nav.signin": "Acceso Cliente",
        "nav.reserve": "Solicitar Llave",
        
        // Hero (Home)
        "hero.badge": "Colección 2024 Disponible",
        "hero.title1": "En Busca de",
        "hero.title2": "La Perfección.",
        "hero.subtitle": "Una selección inquebrantable de la mejor ingeniería automotriz del mundo. Para quienes entienden que el viaje importa más que el destino.",
        "hero.cta": "Descubrir Flota",
        
        // Booking Widget
        "booking.pickup": "Punto de Recogida",
        "booking.return": "Punto de Devolución",
        "booking.start": "Fecha de Entrega",
        "booking.end": "Fecha de Retorno",
        "booking.check": "Ver Disponibilidad",
        
        // Collection / Fleet
        "collection.title": "Establo Curado",
        "collection.subtitle": "Rendimiento máximo, entregado. Cada chasis se mantiene meticulosamente según las especificaciones de fábrica para el conductor exigente.",
        "collection.view_all": "Ver Inventario Completo",
        
        // Filters
        "filter.all": "Todas las Clases",
        "filter.reset": "Limpiar Filtros",
        "filter.category": "Clase",
        "filter.performance": "Capacidades",
        
        // Actions & UI
        "action.view": "Inspeccionar",
        "action.reserve": "Seleccionar",
        "detail.daily": "/ día",
        "detail.specs": "Datos Técnicos",
        "detail.features": "Equipamiento",
        
        // Booking Flow
        "booking.step1": "Origen",
        "booking.step2": "Duración",
        "booking.step3": "Finalizar",
        "booking.summary": "Itinerario",
        "booking.total": "Total Estimado",
        
        // Footer
        "footer.rights": "© 2024 CarCo Luxury Rentals. Excelencia en Movimiento.",
        
         // Contact Page
        "contact.pretitle": "Soporte Premium",
        "contact.title1": "Eleve Su",
        "contact.title2": "Experiencia.",
        "contact.subtitle": "Nuestro equipo de conserjería está listo 24/7 para garantizar que su viaje sea nada menos que excepcional.",
        "contact.phone_label": "Línea VIP",
        "contact.email_label": "Correspondencia Prioritaria",
        "contact.form_title": "Solicitar Asistencia",
        "contact.form_subtitle": "Complete el formulario seguro. Nuestro equipo responde típicamente en 15 minutos.",
        "contact.label_name": "Identidad Completa",
        "contact.label_email": "Correo de Contacto",
        "contact.label_subject": "Asunto",
        "contact.label_message": "Detalles de la Solicitud",
        "contact.btn_submit": "Enviar Solicitud",
        
        // Locations
        "locations.title": "Presencia Global",
        "locations.subtitle": "Más allá del transporte. Experimente la excelencia automotriz en nuestros centros arquitectónicos.",
        "locations.ny_title": "Atrio de Nueva York",
        "locations.ny_region": "Norteamérica",
        "locations.ldn_title": "Londres Mayfair",
        "locations.ldn_region": "Reino Unido",
        
        // Heritage
        "heritage.title1": "Excelencia",
        "heritage.title2": "Inquebrantable.",
        "heritage.label_origin": "Nuestros Orígenes",
        "heritage.heading_origin": "De la pista de carreras a la",
        "heritage.heading_origin_highlight": "carretera abierta",
        "heritage.text_origin": "Fundada sobre un principio de velocidad y elegancia inquebrantables, CarCo ha pasado un siglo refinando el arte del automóvil. Lo que comenzó en un pequeño garaje es ahora un símbolo global de excelencia.",
        "heritage.stat_years": "Años",
        "heritage.stat_wins": "Campeonatos",
        
        // Support
        "support.label": "Centro de Soporte",
        "support.title": "Consultas de Clientes",
        "support.section_booking": "Reservas y Acceso",
        "support.q1": "¿Tiempo de antelación para reservas?",
        "support.a1": "Recomendamos asegurar su vehículo al menos con 24 horas de antelación para garantizar la disponibilidad del modelo específico.",
        "support.q2": "¿Política de modificación?",
        "support.a2": "Los itinerarios se pueden ajustar hasta 6 horas antes de la hora de adquisición programada a través de su portal de cliente."
    }
};

export const vehicles: Vehicle[] = [
    {
        id: 'porsche-911-gt3',
        name: 'Porsche 911 GT3 RS',
        category: { en: 'Track Weapon', es: 'Arma de Pista' },
        price: 1850,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiRfLPeA1s-q88UBWjP_frE-TqkXNONzHMx8OFjOnHgNZpf2Pa73nsA0-Cv2evEiEnfnVJVMswaYruv8BrnlkMWIdwbjKjF1CHvmg_1SNxqbLj7BxxbjumewxF0I0YGVJ5pktiNYkG7G7A7YLDmB5uSjo3XOZpNBdGtEKoWSqum8-daB0lmjZ2BwaIJD6dszBg34-FAk9phhE8_xEyOkyOEd5mBiVxcjIg-NoeXXiZByiVxnVlCeSRAdy293UU-8QumnY28H_90BI',
        specs: { 
            hp: 518, 
            speed: 184, 
            zeroToSixty: 3.0, 
            passengers: 2,
            transmission: { en: '7-Speed PDK', es: 'PDK 7 Velocidades' },
            engine: '4.0L Flat-6'
        },
        description: {
            en: "Born on the racetrack, tailored for the road. The GT3 RS is the pinnacle of naturally aspirated performance, featuring active aerodynamics and motorsport-derived technology.",
            es: "Nacido en la pista, adaptado para la carretera. El GT3 RS es la cúspide del rendimiento atmosférico, con aerodinámica activa y tecnología derivada del automovilismo."
        },
        features: [
            { en: "Active Aerodynamics (DRS)", es: "Aerodinámica Activa (DRS)" },
            { en: "Carbon Fiber Roll Cage", es: "Jaula Antivuelco de Fibra de Carbono" },
            { en: "Track Precision App", es: "App de Precisión en Pista" }
        ],
        featured: true
    },
    {
        id: 'mercedes-amg-g63',
        name: 'Mercedes-AMG G63',
        category: { en: 'Luxury SUV', es: 'SUV de Lujo' },
        price: 950,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3XHfJJ0f_akSTnsxNxuymVCfdbhISqHAW363umCN2KBEOkevj5ORLwSL0TrlG_BYwi8RGwUvp8d8KF843jVYgXwubYrCe0rbdgZ7AMLoyMmwjmn2dQ4n-SVMrpoxFHXUbgL4DDqBjzk8rTXZcvX9p7gc_tLQ2ozUGKVdEzJC6oTVZk3RvnsmVVUgxOKBi3trSdQYbEORFvNqFvnC3SwbAOEZ8BdC-a95mMJAoLEinNc4CC8LdRaFAg9RUaGJ5W_Yuz3OWl3piyDI',
        specs: { 
            hp: 577, 
            speed: 137, 
            zeroToSixty: 4.5, 
            passengers: 5,
            transmission: { en: '9-Speed Automatic', es: 'Automática 9 Velocidades' },
            engine: '4.0L V8 Biturbo'
        },
        description: {
            en: "An icon of off-road luxury. The G63 combines go-anywhere capability with a hand-crafted interior and the thunderous roar of an AMG V8.",
            es: "Un icono del lujo todoterreno. El G63 combina capacidad para ir a cualquier parte con un interior artesanal y el estruendoso rugido de un V8 AMG."
        },
        features: [
             { en: "Burmester Surround Sound", es: "Sonido Envolvente Burmester" },
             { en: "Massage Seats", es: "Asientos con Masaje" },
             { en: "Triple Locking Differentials", es: "Triple Bloqueo de Diferencial" }
        ],
        featured: false
    },
    {
        id: 'rolls-royce-spectre',
        name: 'Rolls-Royce Spectre',
        category: { en: 'Ultra-Luxury', es: 'Ultra-Lujo' },
        price: 3200,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzT_D_vqZOJ3r-1ybNI8UiB9-_EwSvMBQ3B-C02BDHUcvFzTwIJl69gzRoW66ecW0qBT9tviRz-4ieeQICmHC_CdgRTYIIZTP37iK4KVPGHe59hjbUFxIdVoqg55dHsk2Vp6h6mUyqpNENIQfg_Pn_yxopVRnZLL0OYbQTpghO6jFTjqLnmrNQAy2l8mR2V4BF3fKaLLIw0p-yfR-S7o-N36NdsGbXF62JyXoGW5koN_e5tT9Rq0xgy9xuS7cDeKEl2s8WRvrcGWA',
        specs: { 
            hp: 577, 
            speed: 155, 
            zeroToSixty: 4.4, 
            passengers: 4,
            transmission: { en: 'Direct Drive', es: 'Transmisión Directa' },
            engine: 'Dual Electric Motors'
        },
        description: {
            en: "The world's first ultra-luxury electric super coupé. Silence, grace, and effortless power define the Spectre experience. A magic carpet ride for the electric age.",
            es: "El primer super cupé eléctrico de ultralujo del mundo. Silencio, gracia y potencia sin esfuerzo definen la experiencia Spectre. Un paseo en alfombra mágica para la era eléctrica."
        },
        features: [
            { en: "Starlight Headliner", es: "Techo Estrellado" },
            { en: "Bespoke Audio System", es: "Sistema de Audio a Medida" },
            { en: "Effortless Doors", es: "Puertas Asistidas" }
        ],
        featured: true
    },
    {
        id: 'lamborghini-revuelto',
        name: 'Lamborghini Revuelto',
        category: { en: 'Hypercar', es: 'Hiperdeportivo' },
        price: 2800,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUSAQIaDnwq1TlpygEZNMDYoyCtODvSnTISrd2sZCvIJ5MNvaIFDWniwtIAV3tcNM9gqhf0h74-d7AiRjNb7cWe1fYqt-qC23bCWuaADpMRLPrM1wovr1hrap0gqh8gPTI7lpT89-imR70LBDQUT12kFdR3a_zobXXJsaeeTgnwGz2f0Y8z_0Js6-VCWj00XkaZB-3zg9Q33aDaJqZrRibv4gUpZExkC0TC79O4DmNJkNiYRUnx-6nugrwyMRF0vODhcbZncIJJaA',
        specs: { 
            hp: 1001, 
            speed: 217, 
            zeroToSixty: 2.5, 
            passengers: 2,
            transmission: { en: '8-Speed DCT', es: 'DCT 8 Velocidades' },
            engine: 'V12 Hybrid'
        },
        description: {
            en: "The first High Performance Electrified Vehicle (HPEV). A naturally aspirated V12 meets three electric motors for mind-bending performance and sound.",
            es: "El primer Vehículo Electrificado de Alto Rendimiento (HPEV). Un V12 atmosférico se une a tres motores eléctricos para un rendimiento y sonido alucinantes."
        },
        features: [
            { en: "Carbon Fiber Monofuselage", es: "Monofuselaje de Fibra de Carbono" },
            { en: "13 Drive Modes", es: "13 Modos de Conducción" },
            { en: "Vectoring Aero", es: "Aero Vectorial" }
        ],
        featured: true
    },
    {
        id: 'aston-martin-db12',
        name: 'Aston Martin DB12',
        category: { en: 'Super Tourer', es: 'Super Tourer' },
        price: 1400,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpFpPIT8UVgsupsaoSsnbUQr3bdQ7cheBxtlvXxcsw1D7QBGZLgSQd9n8wPoTxONpaRfJhCGHS7goppOvUo9h7erV3V_CMoW0NCzUAmfJhg7ncPFMGHDLMEX9ebgaN-IWMoGsP_l9bFqUW-wNralirW0w0hgMNelSITS5RC9hP7BDcbDssWPRrAVy8rUqUbsE3_TT3gGyx3JUOZps7rOmY1lLI0nUw-Hd4Oo352fRu3wQ-WICH4DcHUgPcvliYBeZ9amyJ7jwug68',
        specs: { 
            hp: 671, 
            speed: 202, 
            zeroToSixty: 3.5, 
            passengers: 4,
            transmission: { en: '8-Speed Automatic', es: 'Automática 8 Velocidades' },
            engine: '4.0L V8 Twin Turbo'
        },
        description: {
            en: "The world's first Super Tourer. The DB12 defines a new era of luxury and performance, with sharper handling and a completely redesigned infotainment system.",
            es: "El primer Super Tourer del mundo. El DB12 define una nueva era de lujo y rendimiento, con un manejo más preciso y un sistema de infoentretenimiento rediseñado."
        },
        features: [
             { en: "Bowers & Wilkins Audio", es: "Audio Bowers & Wilkins" },
             { en: "Connected Navigation", es: "Navegación Conectada" },
             { en: "Hand-Stitched Leather", es: "Cuero Cosido a Mano" }
        ],
        featured: false
    }
];