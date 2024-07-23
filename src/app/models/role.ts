export interface Role { 
    role: Role.RoleName;
}
export namespace Role {
    export type RoleName = 'ROLE_ADMIN' | 'ROLE_SUPERVISEUR' | 'ROLE_AGENT' | 'UNKNOWN';
    export const RoleName = {
        admin: 'ROLE_ADMIN' as RoleName,
        superviseur: 'ROLE_SUPERVISEUR' as RoleName,
        agent: 'ROLE_AGENT' as RoleName,
        Unknown: 'UNKNOWN' as RoleName
    };
}