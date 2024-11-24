"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./src/constants/constants");
const ega_1 = require("./src/ega/ega");
const inputs = {
    executionTimes: constants_1.T,
    fines: constants_1.F,
    deadlines: constants_1.D,
};
const ega = new ega_1.EGA(inputs);
ega.createPopulation(constants_1.START_POPULATION_SIZE);
for (const individual of ega.population) {
    console.log(individual.code, individual.fitness());
}
