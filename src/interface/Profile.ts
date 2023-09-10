export interface IProfileData {
    data: {
        member_id: number;
        username: string;
        nickname: string;
        phoneNumber: string;
        regidence: string;
        address: {
            front_address: string,
            detailed_address: string
        };
        area_range: string[];
    },
    range?: string[],
    onClose: () => void;
}

export interface IIsCheck {
    is_check: string;
    lead_password?: string;
}