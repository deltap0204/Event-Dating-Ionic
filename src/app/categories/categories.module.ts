import {NgModule} from '@angular/core';
import {CategoriesPipe} from '@categories/categories.pipe';
import {CoreModule} from '@core/core.module';
import {
    CategoriesCategoryDetailsComponent,
    CategoriesCategoryDetailsSelectBoxComponent,
} from '@categories/components/categories-category-details/categories-category-details.component';
// tslint:disable-next-line:max-line-length
import {CategoriesSearchCategoriesComponent} from '@categories/components/categories-search-categories/categories-search-categories.component';
import {
    CategoriesAllCategoriesComponent,
    CategoriesAllCategoriesWithSelectComponent
} from '@categories/components/categories-all-categories/categories-all-categories.component';
// tslint:disable-next-line:max-line-length
import {CategoriesCreateCategoryEntityComponent} from '@categories/components/categories-create-category-entity/categories-create-category-entity.component';


@NgModule({
    declarations: [CategoriesPipe,
        CategoriesCategoryDetailsComponent,
        CategoriesSearchCategoriesComponent,
        CategoriesAllCategoriesComponent,
        CategoriesCreateCategoryEntityComponent,
        CategoriesAllCategoriesWithSelectComponent,
        CategoriesCategoryDetailsSelectBoxComponent
    ],
    imports: [
        CoreModule
    ],
    exports: [CategoriesPipe,
        CategoriesCategoryDetailsComponent,
        CategoriesSearchCategoriesComponent,
        CategoriesAllCategoriesComponent,
        CategoriesCreateCategoryEntityComponent,
        CategoriesAllCategoriesWithSelectComponent,
        CategoriesCategoryDetailsSelectBoxComponent
    ],
})
export class CategoriesModule {
}
