import { Category } from "./category.model";
import { Hours } from "./hours.model";
import { Location } from "./location.model";

export interface Business {
    name: string;
    id: string;
    url: string;
    display_phone?: string;
    rating: number;
    categories: Category[];
    location: Location;
    photos: string[];
    hours?: Hours;
}