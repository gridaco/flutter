// synced designated files from template_app/ to template-app/templates

const fs = require("fs");
const path = require("path");

const origin = path.join(__dirname, "../../template_app");
const target = path.join(__dirname, "../templates");
