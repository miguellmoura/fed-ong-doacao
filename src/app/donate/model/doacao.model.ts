export class DoacaoDTO {
    id_doador?: string;
    id_parceiro?: number;
    valor?: number;
    data_doacao?: Date;
    status?: string;
    qrcodepix?: string;
    constructor() { }
}
