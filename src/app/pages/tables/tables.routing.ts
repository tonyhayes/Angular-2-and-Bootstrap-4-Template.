import { Routes, RouterModule }  from '@angular/router';

import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { SmartTables } from './components/smartTables/smartTables.component';
import { AgGrid2 } from './components/ag-grid/ag-grid.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'basictables', component: BasicTables },
      { path: 'richgrid', component: AgGrid2 }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
