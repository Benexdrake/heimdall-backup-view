import { Channel } from "@/types/channel"
export type Guild = {
    id:string;
    channels:Channel[];
    name:string;
    icon:string;
    description:string;
}