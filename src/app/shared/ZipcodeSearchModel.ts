export interface Detail {
    street: string;
    city: string;
    municipality: string;
    province: string;
    postcode: string;
    pnum: string;
    pchar: string;
    rd_x: string;
    rd_y: string;
    lat: string;
    lon: string;
}

export interface ZipcodeModel {
    status: string;
    details: Detail[];
}
