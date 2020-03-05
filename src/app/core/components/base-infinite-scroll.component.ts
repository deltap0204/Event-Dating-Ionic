import {BaseComponent} from '@core/components/base.component';
import {AfterViewInit, Injector, Input, QueryList, ViewChild, ViewChildren} from '@angular/core';
import * as _lodash from 'lodash';
import {CommonsService} from '@core/commons.service';
import {IonInfiniteScroll} from '@ionic/angular';

export abstract class BaseInfiniteScrollComponent<T> extends BaseComponent implements AfterViewInit {

    public static DEFAULT_SCROLL_THROTTLE = 500;
    public static DEFAULT_NUMBER_OF_ITEMS = 6;

    public DEFAULT_LOADING_SPINNER = 'bubbles';
    public DEFAULT_LOADING_TEXT = 'Loading more data...';

    public DEFAULT_LOADING_THRESHOLD = '550px';

    @Input()
    items: any[];
    @Input()
    currentCount: number;
    @Input()
    numberOfItems: number;
    @Input()
    disableScroll: boolean;
    @Input()
    itemsFinished: boolean;
    @Input()
    removeDuplicate: Function;
    @Input()
    scrollThrottle: number;

    @ViewChildren('component') components: QueryList<T>;
    @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

    scrolling_component: T;

    items_unique: any[];


    constructor(injector: Injector) {
        super(injector);
        this.items = this.items || [];
        this.currentCount = this.items.length;
        this.numberOfItems = this.numberOfItems || BaseInfiniteScrollComponent.DEFAULT_NUMBER_OF_ITEMS;
        this.scrollThrottle = this.scrollThrottle || BaseInfiniteScrollComponent.DEFAULT_SCROLL_THROTTLE;
    }

    ngAfterViewInit(): void {
        this.components.changes.subscribe((comps: QueryList<T>) => {
            this.scrolling_component = comps.first;
        });
    }

    // TODO: Make this abstract once everything is done
    performScrolling() {
    }

    onScroll() {
        if (!this.itemsFinished) {
            this.performScrolling();
        }
    }

    resetScrolling() {
        this.items = [];
        this.items_unique = [];
        this.currentCount = this.items.length;
        this.disableScroll = false;
        this.itemsFinished = false;
    }

    addItems(itemResults) {
        if (itemResults && itemResults.length > 0) {
            this.items = this.items.concat(itemResults);
            if (!CommonsService.isNullOrUndefined(this.removeDuplicate) && this.items.length > 0) {
                this.items_unique = _lodash.uniqBy(this.items, value => this.removeDuplicate(value));
            }
            this.currentCount = this.items.length;
            this.disableScroll = false;
        } else {
            this.itemsFinished = true;
            this.disableScroll = true;
            this.infiniteScroll.complete();
        }
        this.onScroll();
    }


}
