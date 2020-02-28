import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {CategoriesService} from '@categories/categories.service';
import {Categories} from '@core/core.models';
import {CategoryRequests} from '@categories/categories.models';
import {CommonsService} from '@core/commons.service';
import Category = Categories.Category;
import GetCategory = CategoryRequests.GetCategory;

@Component({
    selector: 'categories-category-details',
    templateUrl: './categories-category-details.component.html',
    styleUrls: ['./categories-category-details.component.scss'],
})
export class CategoriesCategoryDetailsComponent extends BaseComponent {

    @Input()
    category: Category;
    @Input()
    selected: Boolean;
    @Input()
    categoryId: string;

    @Output()
    categoryRecieved = new EventEmitter<Category>();

    constructor(protected categoriesService: CategoriesService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.category, this.createRequestData(), this.getCategory);
    }


    createRequestData(category_id?: string): GetCategory.Request {
        const request = new GetCategory.Request();
        request.categoryId = category_id || this.categoryId;

        return request;
    }

    getCategory = (request: GetCategory.Request) => {
        this.categoriesService.getCategory(request).pipe(CommonsService.deserializeMap(GetCategory.Request))
            .subscribe(value => {
                this.categoryRecieved.emit(value);
                this.category = value;
            });
    }

}

@Component({
    selector: 'categories-category-details-select-box',
    templateUrl: './categories-category-details-select-box.component.html',
    styleUrls: ['./categories-category-details.component.scss'],
})
export class CategoriesCategoryDetailsSelectBoxComponent extends CategoriesCategoryDetailsComponent {

}
