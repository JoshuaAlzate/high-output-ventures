import { OpenHours } from "./open-hours.model";

export interface Hours {
    hours_type?: string;
    open?: OpenHours;
    is_open_now?: boolean;
}