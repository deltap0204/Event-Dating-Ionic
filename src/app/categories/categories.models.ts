import {JsonObject, JsonProperty} from 'json2typescript';
import {Categories, Core} from '@core/core.models';

export namespace CategoryRequests {

    export namespace GetCategory {
        import Category = Categories.Category;

        @JsonObject()
        export class Request {
            categoryId: string;
        }

        @JsonObject()
        export class Response extends Category {

        }
    }

    export namespace SearchCategories {
        import PaginatedRequest = Core.PaginatedRequest;
        import Category = Categories.Category;

        @JsonObject()
        export class Request extends PaginatedRequest {
            @JsonProperty('term', String)
            term: string = undefined;
        }

        @JsonObject()
        export class Response extends Category {

        }
    }

    export namespace GetAllCategories {
        import Category = Categories.Category;

        @JsonObject()
        export class Request {
        }

        @JsonObject()
        export class Response extends Category {

        }
    }

    export namespace CreateCategoryEntity {
        import CategoryEntity = Categories.CategoryEntity;

        @JsonObject()
        export class Request {
            @JsonProperty('category', String)
            category: string = undefined;
            @JsonProperty('entityType', String)
            entityType: string = undefined;
            @JsonProperty('entity', String)
            entity: string = undefined;
        }

        @JsonObject()
        export class Response extends CategoryEntity {

        }
    }

    export namespace GetCategoryEntity {
        import CategoryEntity = Categories.CategoryEntity;

        @JsonObject()
        export class Request {
            categoryEntityId: string;
        }

        @JsonObject()
        export class Response extends CategoryEntity {

        }

    }
}
