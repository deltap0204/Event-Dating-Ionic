import {Restangular} from 'ngx-restangular';
import {CommonsService} from '@core/commons.service';

export class RestService {

  constructor(protected restangular: Restangular) {
  }


  getService(path: String) {
    return this.restangular.service(path);
  }

  serialize(obj): any {
    return CommonsService.serialize(obj);
  }
}
