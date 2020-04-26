import axios from '@axios';
import {GetTrainResponse} from "@/apis/types/train";

export function getTrains() {
    return axios.get<GetTrainResponse>('/train').then(res => res.data);
}