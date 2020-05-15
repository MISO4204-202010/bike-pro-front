import { Products } from '../app/enums/products.enum';
export const environment = {
  production: true,
  product: Products.Clubes,
  urlBack: 'http://ec2-18-237-88-127.us-west-2.compute.amazonaws.com:8080/BikePro/',

  //--------- CARACTERISTICAS ----------//
  // BUSQUEDA
  busqueda_bicicletas:         false,
  busqueda_rutasCompartidas:   true,​
  busqueda_eventosPrivados:    true,
  // INSCRIPCION
  inscripcion_registro:        true,
  inscripcion_autenticacion:   true,
  inscripcion_pagos:           false,
  // COMUNIDAD
  comunidad:                   true,
  comunidad_compartirRuta:     false,
  comunidad_compartirEvento:   true,
  comunidad_muroPublicaciones: true,
};
