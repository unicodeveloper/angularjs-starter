import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero
])
  
.name;

export default commonModule;
