export class DoacaoDTO {
    id_doador?: number;
    id_parceiro?: number;
    valor?: number;
    data_doacao?: Date;
    status?: string;
    qrcodepix?: string;
    constructor() { }
}
