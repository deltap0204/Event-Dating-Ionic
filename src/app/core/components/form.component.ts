import {BaseComponent} from '@core/components/base.component';
import {
    DynamicCheckboxGroupModel,
    DynamicCheckboxModel,
    DynamicDatePickerModel,
    DynamicFormControlModel,
    DynamicFormService,
    DynamicFormValueControlModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicTimePickerModel
} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';
import {AfterViewInit, ChangeDetectorRef, Injector} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Moment} from 'moment';
import {AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe} from '@core/core.pipe';
import validator from 'validator';

export abstract class FormComponent extends BaseComponent implements AfterViewInit {

    formGroup: FormGroup;
    formModel: DynamicFormControlModel[];

    formModelMap: { [key: string]: DynamicFormControlModel };
    app_dynamic_form_control_model_array_to_dynamic_form_control_model_map_pipe
        = new AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe();


    changeDetectorDef: ChangeDetectorRef;

    protected formService: DynamicFormService;

    constructor(injector: Injector) {
        super(injector);
        this.formService = injector.get(DynamicFormService);
        this.changeDetectorDef = injector.get(ChangeDetectorRef);
    }

    abstract getFormModel(): DynamicFormControlModel[];

    createFormModel() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formModelMap =
            this.app_dynamic_form_control_model_array_to_dynamic_form_control_model_map_pipe.transform(
                this.formModel);
    }

    // noinspection TsLint
    ngOnInit() {
        this.formModel = this.getFormModel();
        this.createFormModel();
        super.ngOnInit();
    }

    // for form update
    ngAfterViewInit() {
        this.afterInitializeComponent();
        this.changeDetectorDef.detectChanges(); // run change detection after changes
    }

    registerModelForChanges<T>(model: DynamicFormValueControlModel<T>) {
        model.valueChanges.subscribe(value => {
            this.changeDetectorDef.markForCheck();
        });
    }

    abstract afterInitializeComponent();

    protected getInputModel(id: string): DynamicInputModel {
        return this.formService.findById(id, this.formModel) as DynamicInputModel;
    }

    protected getDateModel(id: string): DynamicDatePickerModel {
        return this.formService.findById(id, this.formModel) as DynamicDatePickerModel;
    }

    protected getTimeModel(id: string): DynamicTimePickerModel {
        return this.formService.findById(id, this.formModel) as DynamicTimePickerModel;
    }

    protected getRadioGroupInputModel<T>(id: string): DynamicRadioGroupModel<T> {
        return this.formService.findById(id, this.formModel) as DynamicRadioGroupModel<T>;
    }

    protected getDateModelValue(id: string): Moment {
        const value: any = this.getDateModel(id).value;
        return value ? CommonsService.getMomentFromDateString(value) : undefined;
    }

    protected getInputModelValueAsString(id: string): string {
        const value = this.getInputModel(id)
            .value;
        return value ? value.toString() : undefined;
    }

    protected getTimeModelValueAsString(id: string): string {
        const value = this.getTimeModel(id)
            .value;
        return value ? CommonsService.getTimeStringFromJSON(value) : undefined;
    }

    protected getTimeModelValueAsMoment(id: string): Moment {
        const value = this.getTimeModel(id)
            .value;
        return value ? CommonsService.getMomentFromTimeString(value.toString()) : undefined;
    }

    protected getInputModelValueAsNumber(id: string, no_symbols?: boolean): number {
        const value = this.getInputModelValueAsString(id);
        return validator.isNumeric(value || '',
            {no_symbols: CommonsService.isNullOrUndefined(no_symbols) ? true : no_symbols}) ?
            Number(value) :
            undefined;
    }

    getCheckboxInputModel(id: string): DynamicCheckboxModel {
        return this.formService.findById(id, this.formModel) as DynamicCheckboxModel;
    }

    protected getCheckboxGroupInputModel(id: string): DynamicCheckboxGroupModel {
        return this.formService.findById(id, this.formModel) as DynamicCheckboxGroupModel;
    }

    resetForm(value?: any, options?: any) {
        this.formGroup.reset(value, options);
    }

}

