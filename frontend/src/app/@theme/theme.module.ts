import { ModuleWithProviders, NgModule } from "@angular/core";
import { AddCategoryComponent } from './components/add-category/add-category.component';


const BASE_MODULES: [] = [];
const COMPONENTS: never[] = [];

@NgModule({
    imports: [...BASE_MODULES],
    exports: [...BASE_MODULES, ...COMPONENTS],
    declarations: [...COMPONENTS],
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders<ThemeModule> {
        return {
          ngModule: ThemeModule,
          providers: [],
        };
      }
}