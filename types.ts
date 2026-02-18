export type Language = 'en' | 'es';

export interface LocalizedString {
    en: string;
    es: string;
}

export interface VehicleSpecs {
    hp: number;
    speed: number; // mph
    zeroToSixty: number; // seconds
    passengers: number;
    transmission: LocalizedString;
    engine: string;
}

export interface Vehicle {
    id: string;
    name: string;
    category: LocalizedString;
    price: number;
    image: string;
    secondaryImages?: string[];
    specs: VehicleSpecs;
    description: LocalizedString;
    features: LocalizedString[];
    featured?: boolean;
}

export interface HubLocation {
    id: string;
    city: string;
    name: string;
    address: string;
    phone: string;
    image: string;
    hours: string;
}

export enum Page {
    HOME = 'HOME',
    FLEET = 'FLEET',
    VEHICLE_DETAIL = 'VEHICLE_DETAIL',
    BOOKING = 'BOOKING',
    LOCATIONS = 'LOCATIONS',
    HERITAGE = 'HERITAGE',
    SUPPORT = 'SUPPORT',
    CONTACT = 'CONTACT'
}