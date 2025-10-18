import { ArgumentTypes } from 'conventional-cli';

import { OptionModel } from '../models';
import { config, ErrorTypes, ToggleRule } from 'ngx-translate-lint';
import { OptionsLongNames, OptionsPath, OptionsShortNames } from './../enums';

const cliOptions: OptionModel[] = [
    new OptionModel({
        shortName: OptionsShortNames.project,
        longName: OptionsLongNames.project,
        required: false,
        type: ArgumentTypes.glob,
        description: `The path to project folder`,
        additionalDescription: ``,
        default: config.defaultValues.project,
        values: [
            OptionsPath.relative,
            OptionsPath.absolute
        ]
    }),
    new OptionModel({
        shortName: OptionsShortNames.languages,
        longName: OptionsLongNames.languages,
        required: false,
        type: ArgumentTypes.glob,
        description: `The path to languages folder`,
        additionalDescription: ``,
        default: config.defaultValues.languages,
        values: [
            OptionsPath.relative,
            OptionsPath.absolute,
            OptionsPath.url
        ]
    }),
    new OptionModel({
        shortName: OptionsShortNames.keysOnViews,
        longName: OptionsLongNames.keysOnViews,
        required: false,
        type: ArgumentTypes.enum,
        description: `Described how to handle the error of missing keys on view`,
        additionalDescription: ``,
        default: ErrorTypes.error,
        values: [
            ErrorTypes.disable,
            ErrorTypes.warning,
            ErrorTypes.error
        ]
    }),
    new OptionModel({
        shortName: OptionsShortNames.zombieKeys,
        longName: OptionsLongNames.zombieKeys,
        required: false,
        type: ArgumentTypes.enum,
        description: `Described how to handle the error of zombies keys. Zombie keys are keys that doesn't exist on any languages file but exist on project, or exist languages but doesn't exist on project`,
        additionalDescription: ``,
        default: ErrorTypes.warning,
        values: [
            ErrorTypes.disable,
            ErrorTypes.warning,
            ErrorTypes.error
        ]
    }),

    new OptionModel({
        shortName: OptionsShortNames.emptyKeys,
        longName: OptionsLongNames.emptyKeys,
        required: false,
        type: ArgumentTypes.enum,
        description: `Described how to handle empty value on translate keys. Empty keys are keys that doesn't have any value on languages files`,
        additionalDescription: ``,
        default: ErrorTypes.warning,
        values: [
            ErrorTypes.disable,
            ErrorTypes.warning,
            ErrorTypes.error
        ]
    }),

    new OptionModel({
        shortName: OptionsShortNames.ignore,
        longName: OptionsLongNames.ignore,
        required: false,
        type: ArgumentTypes.glob,
        description: `Ignore projects and languages files`,
        additionalDescription: ``,
        values: [
            OptionsPath.relative,
            OptionsPath.absolute
        ]
    }),
    new OptionModel({
        longName: OptionsLongNames.maxWarning,
        required: false,
        type: ArgumentTypes.glob,
        description: `Max count of warnings in all files. If this value more that count of warnings, then an error is return`,
        additionalDescription: ``,
        default: config.defaultValues.rules.maxWarning.toString(),
        values: [
            ArgumentTypes.number,
        ]
    }),
    new OptionModel({
        shortName: OptionsShortNames.misprintKeys,
        longName: OptionsLongNames.misprintKeys,
        required: false,
        type: ArgumentTypes.enum,
        description: `Try to find matches with misprint keys on views and languages keys. Coefficient: 0.9. Can be longer process!!`,
        additionalDescription: ``,
        default: ErrorTypes.disable,
        values: [
            ErrorTypes.disable,
            ErrorTypes.warning,
            ErrorTypes.error
        ]
    }),
    new OptionModel({
        shortName: OptionsShortNames.deepSearch,
        longName: OptionsLongNames.deepSearch,
        required: false,
        type: ArgumentTypes.enum,
        description: `Add each translate key to global regexp end try to find them on project. Can be longer process!!`,
        additionalDescription: ``,
        default: ToggleRule.disable,
        values: [
            ToggleRule.disable,
            ToggleRule.enable,
        ]
    }),
    new OptionModel({
        longName: OptionsLongNames.misprintCoefficient,
        shortName: OptionsShortNames.misprintCoefficient,
        required: false,
        type: ArgumentTypes.number,
        description: `Coefficient for misprint option can be from 0 to 1.0.`,
        additionalDescription: ``,
        default: config.defaultValues.rules.misprintCoefficient.toString(),
    }),
    new OptionModel({
        longName: OptionsLongNames.config,
        shortName: OptionsShortNames.config,
        required: false,
        type: ArgumentTypes.path,
        description: `Path to config via JSON or JS file`,
        additionalDescription: ``,
        values: [
            OptionsPath.relative,
            OptionsPath.absolute
        ]
    }),
    new OptionModel({
        longName: OptionsLongNames.fixZombiesKeys,
        shortName: OptionsShortNames.fixZombiesKeys,
        required: false,
        type: ArgumentTypes.boolean,
        description: `Auto fix zombies keys on languages files`,
        additionalDescription: ``,
        default: config.defaultValues.fixZombiesKeys?.toString() || 'false',
    }),
    /*
    new OptionModel({
        longName: OptionsLongNames.version,
        shortName: OptionsShortNames.version,
        required: false,
        description: 'Print current version of ngx-translate-lint',
        type: ArgumentTypes.undefined,
        additionalDescription: '',
    }),

     */
];

export  { cliOptions };
