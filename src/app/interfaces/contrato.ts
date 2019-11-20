export interface Contrato{
    id?: number;
    codigo_contrato: string;
    tipo_contrato: string;
    fecha_alta: string;
    fecha_baja?: string;
    motivo_baja?: string;
    trabajador_id: number;
    centro_id: number;
    cargo_id: number;
    created_at?: string;
    updated_at?: string;
    trabajador: string;
    centro: string;
    cargo: string;
}