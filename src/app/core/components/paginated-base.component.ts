import {BaseComponent} from '@core/components/base.component';
import {Input} from '@angular/core';
import {Core} from '@core/core.models';
import PaginatedRequest = Core.PaginatedRequest;
import SortedPaginatedRequest = Core.SortedPaginatedRequest;

export abstract class PaginatedBaseComponent extends BaseComponent {

    @Input()
    first: number;
    @Input()
    count: number;

    setLimits<T extends PaginatedRequest>(request: T, first?: number, count?: number): T {
        request.first = first || this.first;
        request.count = count || this.count;
        return request;
    }
}


export abstract class SortedPaginatedBaseComponent extends PaginatedBaseComponent {

    @Input()
    columnName: string;
    @Input()
    columnOrder: string;

    setColumnOrders<T extends SortedPaginatedRequest>(request: T, columnName?: string, columnOrder?: string): T {
        request.column_name = columnName || this.columnName;
        request.column_order = columnOrder || this.columnOrder;
        return request;
    }

    setLimitsAndOrders<T extends SortedPaginatedRequest>(request: T): T {
        request = this.setLimits(request);
        request = this.setColumnOrders(request);
        return request;
    }

}
