import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {Restangular} from 'ngx-restangular';
import {CategoriesConstants} from '@categories/categories.constants';
import {CategoryRequests} from '@categories/categories.models';
import GetCategory = CategoryRequests.GetCategory;
import SearchCategories = CategoryRequests.SearchCategories;
import GetAllCategories = CategoryRequests.GetAllCategories;
import CreateCategoryEntity = CategoryRequests.CreateCategoryEntity;
import GetCategoryEntity = CategoryRequests.GetCategoryEntity;

@Injectable({
    providedIn: 'root'
})
export class CategoriesService extends RestService {

    categoryService: Restangular;

    constructor(restangular: Restangular) {
        super(restangular);
        this.categoryService = this.getService(CategoriesConstants.CATEGORIES_ENDPOINT);
    }

    getCategory(request: GetCategory.Request) {
        return this.categoryService.one(request.categoryId).get();
    }

    searchCategories(request: SearchCategories.Request) {
        return this.categoryService.one('search').customGET('', this.serialize(request));
    }

    getAllCategories(request: GetAllCategories.Request) {
        return this.categoryService.one('all').customGET('', this.serialize(request));
    }

    createCategoryEntity(request: CreateCategoryEntity.Request) {
        return this.categoryService.one('entities').customPOST(this.serialize(request));
    }

    getCategoryEntity(request: GetCategoryEntity.Request) {
        return this.categoryService.one('entities').one(request.categoryEntityId).get();
    }

}
