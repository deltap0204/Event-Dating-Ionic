import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {CategoriesService} from '@categories/categories.service';
import {PaginatedBaseComponent} from '@core/components/paginated-base.component';
import {CategoryRequests} from '@categories/categories.models';
import SearchCategories = CategoryRequests.SearchCategories;
import {Categories} from '@core/core.models';
import Category = Categories.Category;
import {CommonsService} from '@core/commons.service';

@Component({
    selector: 'categories-search-categories',
    templateUrl: './categories-search-categories.component.html',
    styleUrls: ['./categories-search-categories.component.scss'],
})
export class CategoriesSearchCategoriesComponent extends PaginatedBaseComponent {

    @Input()
    term: string;

    @Output()
    categoriesReceived = new EventEmitter<Category[]>();

    categories: Category[];

    constructor(protected categoriesService: CategoriesService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(term?: string, first?: number, count?: number): SearchCategories.Request {
        let request = new SearchCategories.Request();
        request.term = term || this.term;
        request = this.setLimits(request, first, count);

        return request;
    }

    searchCategories(request: SearchCategories.Request) {
        this.categoriesService.searchCategories(request).pipe(CommonsService.deserializeMap(Category))
            .subscribe(value => {
                this.categories = value;
                this.categoriesReceived.emit(value);
            });
    }
}
