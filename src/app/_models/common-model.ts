export class CreateHubModel{
    hospital_name: string;
    email: string;
    mobile: string;
    state_id: string;
    district_id: string;
    address: string;
    department_name: string;
    department_id: string;
    hod_name: string;
    hod_contact: string;
    password: string;
}

export class HubListModel{
    id: number;
    hospital_name: string;
    created_by: string;
    admin_id: string;
    email: string;
    mobile: string;
    state_id: string;
    district_id: string;
    address: string;
    department_name: string;
    department_id: string;
    hod_name: string;
    hod_contact: string;
    is_active: string;
    created_at: string;
    updated_at: string;
    profile_photo_url: string;
}