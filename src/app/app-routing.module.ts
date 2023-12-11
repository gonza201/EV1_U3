import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioUsuarioComponent } from './componentes/formulario-usuario/formulario-usuario.component';
import { FormularioEgresoComponent } from './componentes/formulario-egreso/formulario-egreso.component';
import { VerUsuarioComponent } from './componentes/ver-usuario/ver-usuario.component';
import { VerEgresoComponent } from './componentes/ver-egreso/ver-egreso.component';

const routes: Routes = [
  {
    path: 'formularioUsuario',
    component:FormularioUsuarioComponent
  },
  {
    path:'formularioEgreso',
    component:FormularioEgresoComponent
  },
  {
    path:'verUsuario',
    component:VerUsuarioComponent
  },
  {
    path:'verEgreso',
    component:VerEgresoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
