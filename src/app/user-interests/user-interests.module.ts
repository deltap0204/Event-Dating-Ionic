import {NgModule} from '@angular/core';
import {
    UserInterestsFilterUserInterestByEntityPipe,
    UserInterestsFilterUserInterestByInteractionPipe,
    UserInterestsPipe,
    UserInterestsRemoveUserInterestByAccountPipe,
    UserInterestsRemoveUserInterestFromArrayPipe
} from '@user-interests/user-interests.pipe';
import {CoreModule} from '@core/core.module';
import {UserInterestsByEntityComponent} from '@user-interests/components/user-interests-by-entity/user-interests-by-entity.component';
// tslint:disable-next-line:max-line-length
import {UserInterestsByEntityCountComponent} from '@user-interests/components/user-interests-by-entity-count/user-interests-by-entity-count.component';
// tslint:disable-next-line:max-line-length
import {
    UserInterestsByEntityMultipleComponent,
    UserInterestsByEntityMultipleNoTemplateComponent
} from '@user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component';
// tslint:disable-next-line:max-line-length
import {
    UserInterestsSimilarInterestsComponent,
    UserInterestsSimilarInterestsNoTemplateComponent
} from '@user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component';
// tslint:disable-next-line:max-line-length
import {UserInterestsUserInterestDetailsComponent} from '@user-interests/components/user-interests-user-interest-details/user-interests-user-interest-details.component';
// tslint:disable-next-line:max-line-length
import {
    UserInterestsCreateUserInterestComponent,
    UserInterestsCreateUserInterestNoTemplateComponent
} from '@user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component';
// tslint:disable-next-line:max-line-length
import {
    UserInterestsGetOrCreateComponent,
    UserInterestsGetOrCreateWithDeleteHeartComponent
} from '@user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component';
import {
    UserInterestsDeleteUserInterestComponent,
    UserInterestsDeleteUserInterestNoTemplateComponent
} from '@user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component';
// tslint:disable-next-line:max-line-length
import {
    UserInterestsCheckUserMatchComponent,
    UserInterestsCheckUserMatchNoTemplateComponent
} from '@user-interests/components/user-interests-check-user-match/user-interests-check-user-match.component';


@NgModule({
    declarations: [UserInterestsPipe,
        UserInterestsByEntityComponent,
        UserInterestsByEntityCountComponent,
        UserInterestsByEntityMultipleComponent,
        UserInterestsSimilarInterestsComponent,
        UserInterestsUserInterestDetailsComponent,
        UserInterestsCreateUserInterestComponent,
        UserInterestsGetOrCreateComponent,
        UserInterestsCreateUserInterestNoTemplateComponent,
        UserInterestsByEntityMultipleNoTemplateComponent,
        UserInterestsDeleteUserInterestNoTemplateComponent,
        UserInterestsDeleteUserInterestComponent,
        UserInterestsFilterUserInterestByEntityPipe,
        UserInterestsFilterUserInterestByInteractionPipe,
        UserInterestsRemoveUserInterestFromArrayPipe,
        UserInterestsSimilarInterestsNoTemplateComponent,
        UserInterestsRemoveUserInterestByAccountPipe,
        UserInterestsGetOrCreateWithDeleteHeartComponent,
        UserInterestsCheckUserMatchComponent,
        UserInterestsCheckUserMatchNoTemplateComponent
    ],
    imports: [
        CoreModule
    ],
    exports: [UserInterestsPipe,
        UserInterestsByEntityComponent,
        UserInterestsByEntityCountComponent,
        UserInterestsByEntityMultipleComponent,
        UserInterestsSimilarInterestsComponent,
        UserInterestsUserInterestDetailsComponent,
        UserInterestsCreateUserInterestComponent,
        UserInterestsGetOrCreateComponent,
        UserInterestsCreateUserInterestNoTemplateComponent,
        UserInterestsByEntityMultipleNoTemplateComponent,
        UserInterestsDeleteUserInterestNoTemplateComponent,
        UserInterestsDeleteUserInterestComponent,
        UserInterestsFilterUserInterestByEntityPipe,
        UserInterestsFilterUserInterestByInteractionPipe,
        UserInterestsRemoveUserInterestFromArrayPipe,
        UserInterestsSimilarInterestsNoTemplateComponent,
        UserInterestsRemoveUserInterestByAccountPipe,
        UserInterestsGetOrCreateWithDeleteHeartComponent,
        UserInterestsCheckUserMatchComponent,
        UserInterestsCheckUserMatchNoTemplateComponent
    ],

})
export class UserInterestsModule {
}
