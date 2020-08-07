#!/usr/bin/env node

const createDb = require("./netlify-db/createDb");

console.log("GO");

    createDb('admin', 'output', '', 'db1');