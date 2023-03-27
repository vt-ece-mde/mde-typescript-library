import { Team } from "./team_interfaces";

export interface ValidationResult {
    ok: boolean;
    error?: any;
    team?: Team;
    errorlist?: string[];
}

export interface ValidationMetadata {
    uuid: string;
    validatedBy: { 
        firstName: string,
        lastName: string,
        email: string,
    };
    validatedAt: Date;
    year: string;
    term: string;
    teamId: string;
    validationResult: ValidationResult;
}