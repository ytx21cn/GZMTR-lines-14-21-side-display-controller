"use strict";

import { RAW_LINES_INFO, RAW_SERVICE_TYPES_TRANSLATIONS, RAW_DESTINATIONS_TRANSLATIONS } from "./RAW-LINES-DATA.js";
import { processTranslations } from "./process-translations.js";
import { ServiceType } from "./service-type-classes.js";
import { Station } from "./station-classes.js";

const SERVICE_TYPES_TRANSLATIONS = processTranslations(RAW_SERVICE_TYPES_TRANSLATIONS, ServiceType);

const DESTINATIONS_TRANSLATIONS = processTranslations(RAW_DESTINATIONS_TRANSLATIONS, Station);

console.log(SERVICE_TYPES_TRANSLATIONS, DESTINATIONS_TRANSLATIONS);
