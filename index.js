#!/usr/bin/env node

//==================================
// TASK TRACKER CLI - PUNTO DE ENTRADA
//==================================

const fs = require('fs');
const path = require('path');

//Constantes

const TASKS_FILE = path.join(process.cwd(), 'tasks.json');

console.log("Bienvenido a Task Tracker CLI!");