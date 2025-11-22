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
console.log(readTasks(TASKS_FILE));
//Funciíon 1: Leer tareas desde el archvo JSON

function readTasks(){
    try{
        //existe el archivo?
        if (!fs.existsSync(TASKS_FILE)){
            return []; //si no existe, retornar lista vacía
        }
        //lee el archivo completo como texto
        const data = fs.readFileSync(TASKS_FILE, 'utf-8');
        //Convierte el texto JSON a un objeto JavaScript
        return JSON.parse(data);
    }catch(error){
        //Maneja errores de lectura o parseo
        console.error("Error al leer las tareas:", error);
        return [];

    }
}

//Funciíon 2: Guardar tareas en el archivo JSON

function saveTasks(tasks){
    try{
        //Convierte Objeto JavaScript a string JSON formateado
        const data = JSON.stringify(tasks, null, 2);
        //Escribe el archivo (lo crea si no existe, lo sobrescribe si existe)
        fs.writeFileSync(TASKS_FILE,data,'utf-8');

        return true;
    }catch(error){
        console.error("Error al guardar las tareas:", error);
        return false;
    }
}

//