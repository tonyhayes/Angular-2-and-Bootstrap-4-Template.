import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgGridModule } from 'ag-grid-ng2/main';


import { routing }       from './tables.routing';
import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { AgGrid2 } from './components/ag-grid/ag-grid.component';
import { RichGridComponent2 } from './components/ag-grid/components/rich-grid/rich-grid.component';
import { EditorComponent, MoodRendererComponent, MoodEditorComponent } from './components/ag-grid/components/editor/editor.component';
import { BasicTablesService } from './components/basicTables/basicTables.service';
import { ResponsiveTable } from './components/basicTables/components/responsiveTable';
import { StripedTable } from './components/basicTables/components/stripedTable';
import { BorderedTable } from './components/basicTables/components/borderedTable';
import { HoverTable } from './components/basicTables/components/hoverTable';
import { CondensedTable } from './components/basicTables/components/condensedTable';
import { ContextualTable } from './components/basicTables/components/contextualTable';




@NgModule({
  	imports: [
		CommonModule,
		NgaModule	,
		routing,
		FormsModule,
		HttpModule,
		AgGridModule.withComponents([EditorComponent, MoodRendererComponent, MoodEditorComponent]),

  	],
  	declarations: [
		Tables,
		BasicTables,
		HoverTable,
		BorderedTable,
		CondensedTable,
		StripedTable,
		ContextualTable,
		ResponsiveTable,
		AgGrid2,
		RichGridComponent2,
		EditorComponent,
		MoodRendererComponent,
		MoodEditorComponent
  	],
  	providers: [
		BasicTablesService,
  	]
})
export default class TablesModule {}
