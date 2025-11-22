#!/usr/bin/env node

//==================================
// TASK TRACKER CLI - PUNTO DE ENTRADA
//==================================

import fs from "fs";
import path from "path";

//Constantes

const TASKS_FILE = path.join(process.cwd(), 'tasks.json');

console.log("Bienvenido a Task Tracker CLI!");
console.log("Archivo de tareas ubicado en:", TASKS_FILE);