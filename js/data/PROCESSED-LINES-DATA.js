"use strict";

import { TypeChecker } from "../type-checker.js";
import { ServiceType } from "./service-type-classes.js";
import { Station } from "./station-classes.js";

import { processTranslations } from "./process-translations.js";

// Raw data classes and sources
import {
	RAW_SERVICE_TYPES_TRANSLATIONS,
	RAW_DESTINATIONS_TRANSLATIONS,
	RAW_LINES_INFO,
} from "./RAW-LINES-DATA.js";
import { RawLineInfo } from "./raw-line-data-classes.js";
import { RawFilter } from "./filter-classes.js";

// Processed data classes
import { LineInfo } from "./processed-line-data-classes.js";

// Processed data

const SERVICE_TYPES = Object.freeze( processTranslations(RAW_SERVICE_TYPES_TRANSLATIONS, ServiceType));
const DESTINATIONS = Object.freeze( processTranslations(RAW_DESTINATIONS_TRANSLATIONS, Station));

const LINES_INFO = Object.freeze((() => {

	TypeChecker.checkArrayType(RAW_LINES_INFO, RawLineInfo);

	const LINES_INFO = new Map();

	RAW_LINES_INFO.forEach((rawLineInfo) => {

		/* LineInfo constructor:
			new LineInfo(line, destinations, serviceTypes, defaultServiceType, crossLineServiceType, rawFilters)

			Argument types:
				line, destinations: string
				serviceTypes: array of ServiceType
				defaultServiceType, crossLineServiceType: ServiceType
				rawFilters: array of RawFilter
		*/

		const line = rawLineInfo.line;
		const destinations = rawLineInfo.destinations.map((ChineseName) => {
			return DESTINATIONS[ChineseName];
		});

		const serviceTypes = rawLineInfo.serviceTypes.map((ChineseName) => {
			return SERVICE_TYPES[ChineseName];
		});
		const defaultServiceType = SERVICE_TYPES[rawLineInfo.defaultServiceType];
		const crossLineServiceType = SERVICE_TYPES[rawLineInfo.crossLineServiceType];

		const rawFilters = rawLineInfo.rawFiters;

		const newLineInfo = new LineInfo(line, destinations, serviceTypes, defaultServiceType, crossLineServiceType, rawFilters);

		LINES_INFO.set(line, newLineInfo);

	});

	return LINES_INFO;

})());

console.log(SERVICE_TYPES, DESTINATIONS, LINES_INFO);

export { SERVICE_TYPES, DESTINATIONS, LINES_INFO };
