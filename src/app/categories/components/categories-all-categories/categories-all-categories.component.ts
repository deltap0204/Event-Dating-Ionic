import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Categories} from '@core/core.models';
import {CategoriesService} from '@categories/categories.service';
import {CategoryRequests} from '@categories/categories.models';
import {CommonsService} from '@core/commons.service';
import Category = Categories.Category;
import GetAllCategories = CategoryRequests.GetAllCategories;

@Component({
    selector: 'categories-all-categories',
    templateUrl: './categories-all-categories.component.html',
    styleUrls: ['./categories-all-categories.component.scss']
})
export class CategoriesAllCategoriesComponent extends BaseComponent {

    @Output()
    categoriesReceived = new EventEmitter<Category[]>();

    categories: Category[];

    constructor(protected categoriesService: CategoriesService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getAllCategories(this.createRequestData());
    }


    createRequestData(): GetAllCategories.Request {
        return new GetAllCategories.Request();
    }

    getAllCategories(request: GetAllCategories.Request) {
        this.categoriesService.getAllCategories(request).pipe(CommonsService.deserializeMap(Category))
            .subscribe(value => {
                this.categories = value;
                this.categoriesReceived.emit(value);
            });
    }
}

@Component({
    selector: 'categories-all-categories-with-select',
    templateUrl: './categories-all-categories-with-select.component.html',
    styleUrls: ['./categories-all-categories.component.scss']
})
export class CategoriesAllCategoriesWithSelectComponent extends CategoriesAllCategoriesComponent {

    selected_categories: Category[] = [];

    @Output()
    selectedCategoriesChanged = new EventEmitter<Category[]>();

    addOrRemoveCategory(category: Category) {
        const categoryIndex = this.getCategoryIndex(category);
        if (categoryIndex === -1) {
            this.selected_categories.push(category);
        } else {
            this.selected_categories = this.selected_categories.filter(value => value._id !== category._id);
        }
        this.selectedCategoriesChanged.emit(this.selected_categories);
    }

    getCategoryIndex(category: Category): number {
        return this.selected_categories.findIndex(value => value._id === category._id);
    }
}
