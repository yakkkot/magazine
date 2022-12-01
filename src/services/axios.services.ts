import axios from "axios";
import {baseURL} from "./urls";

export const axiosServices = axios.create({baseURL})