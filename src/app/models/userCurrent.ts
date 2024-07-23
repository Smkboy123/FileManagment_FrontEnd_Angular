export interface UserCurrent {
    id: number,
    username: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    role: UserCurrent.RoleName;
}
export namespace UserCurrent {
    export type RoleName = 'ROLE_ADMIN' | 'ROLE_SUPERVISEUR' | 'ROLE_AGENT'| 'UNKNOWN';
    export const RoleName = {
        Admin: 'ROLE_ADMIN' as RoleName,
        Superviseur: 'ROLE_SUPERVISEUR' as RoleName,
        Agent: 'ROLE_AGENT' as RoleName,
        Unknown: 'UNKNOWN' as RoleName
    };
}


