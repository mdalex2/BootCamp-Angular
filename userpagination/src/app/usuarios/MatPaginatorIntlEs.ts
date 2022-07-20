import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class MatPaginatorIntlEs extends MatPaginatorIntl {
    override itemsPerPageLabel = 'Items por pág.';
    override firstPageLabel = 'Primera Pág.';
    override lastPageLabel = 'Última Pág.';
    override nextPageLabel = 'Siguiente';
    override previousPageLabel = 'Anterior';
}