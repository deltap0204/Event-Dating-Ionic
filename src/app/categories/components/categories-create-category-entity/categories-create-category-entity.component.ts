import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {CategoriesService} from '@categories/categories.service';
import {CategoryRequests} from '@categories/categories.models';
import {Categories} from '@core/core.models';
import {CommonsService} from '@core/commons.service';
import CreateCategoryEntity = CategoryRequests.CreateCategoryEntity;
import Category = Categories.Category;
import CategoryEntity = Categories.CategoryEntity;

@Component({
    selector: 'categories-create-category-entity',
    templateUrl: './categories-create-category-entity.component.html',
    styleUrls: ['./categories-create-category-entity.component.scss'],
})
export class CategoriesCreateCategoryEntityComponent extends BaseComponent {

    @Input()
    category: Category;
    @Input()
    entityType: string;
    @Input()
    entity: string;

    @Output()
    categoryEntityCreated = new EventEmitter<CategoryEntity>();

    constructor(protected categoriesService: CategoriesService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(entity?: string, entityType?: string, categoryId?: string): CreateCategoryEntity.Request {
        const request = new CreateCategoryEntity.Request();
        request.category = categoryId || this.category._id;
        request.entityType = entityType || this.entityType;
        request.entity = entity || this.entity;

        return request;
    }

    createCategoryEntity(request: CreateCategoryEntity.Request) {
        this.categoriesService.createCategoryEntity(request).pipe(CommonsService.deserializeMap(CategoryEntity))
            .subscribe(value => {
                this.categoryEntityCreated.emit(value);
            });
    }
}
