export interface IProfileData {
    data: {
        member_id: number;
        username: string;
        nickname: string;
        phoneNumber: string;
        regidence: string;
        address: object;
        area_range: string[];
    },
    onClose: () => void;
}