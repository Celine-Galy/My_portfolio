import { ModuleWithProviders, NgModule } from "@angular/core";
import { DisplayArticleComponent } from './components/display-article/display-article.component';

const BASE_MODULES: [] = [];
const COMPONENTS: never[] = [];

@NgModule({
    imports: [...BASE_MODULES],
    exports: [...BASE_MODULES, ...COMPONENTS],
    declarations: [...COMPONENTS, DisplayArticleComponent],
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders<ThemeModule> {
        return {
          ngModule: ThemeModule,
          providers: [],
        };
      }
}