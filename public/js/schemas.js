var langEnum = ["eng", "fra", "spa", "ger", "jpn", "zho"];

var CVSSschema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "JSON Schema for Common Vulnerability Scoring System version 3.0",
    "id": "https://www.first.org/cvss/cvss-v3.0.json?20170531",
    "type": "object",
    "definitions": {
        "attackVectorType": {
            "type": "string",
            "format": "radio",
            "enum": ["PHYSICAL", "LOCAL", "ADJACENT_NETWORK", "NETWORK"],
        },
        "modifiedAttackVectorType": {
            "type": "string",
            "format": "radio",
            "enum": ["NETWORK", "ADJACENT_NETWORK", "LOCAL", "PHYSICAL", "NOT_DEFINED"]
        },
        "attackComplexityType": {
            "type": "string",
            "format": "radio",
            "enum": ["HIGH", "LOW"]
        },
        "modifiedAttackComplexityType": {
            "type": "string",
            "format": "radio",
            "enum": ["HIGH", "LOW", "NOT_DEFINED"]
        },
        "privilegesRequiredType": {
            "type": "string",
            "format": "radio",
            "enum": ["HIGH", "LOW", "NONE"]
        },
        "modifiedPrivilegesRequiredType": {
            "type": "string",
            "format": "radio",
            "enum": ["HIGH", "LOW", "NONE", "NOT_DEFINED"]
        },
        "userInteractionType": {
            "type": "string",
            "format": "radio",
            "enum": ["REQUIRED", "NONE"]
        },
        "modifiedUserInteractionType": {
            "type": "string",
            "format": "radio",
            "enum": ["NONE", "REQUIRED", "NOT_DEFINED"]
        },
        "scopeType": {
            "type": "string",
            "format": "radio",
            "enum": ["UNCHANGED", "CHANGED"]
        },
        "modifiedScopeType": {
            "type": "string",
            "enum": ["UNCHANGED", "CHANGED", "NOT_DEFINED"]
        },
        "ciaType": {
            "type": "string",
            "format": "radio",
            "enum": ["NONE", "LOW", "HIGH"]
        },
        "modifiedCiaType": {
            "type": "string",
            "enum": ["NONE", "LOW", "HIGH", "NOT_DEFINED"]
        },
        "exploitCodeMaturityType": {
            "type": "string",
            "enum": ["UNPROVEN", "PROOF_OF_CONCEPT", "FUNCTIONAL", "HIGH", "NOT_DEFINED"]
        },
        "remediationLevelType": {
            "type": "string",
            "enum": ["OFFICIAL_FIX", "TEMPORARY_FIX", "WORKAROUND", "UNAVAILABLE", "NOT_DEFINED"]
        },
        "confidenceType": {
            "type": "string",
            "enum": ["UNKNOWN", "REASONABLE", "CONFIRMED", "NOT_DEFINED"]
        },
        "ciaRequirementType": {
            "type": "string",
            "enum": ["LOW", "MEDIUM", "HIGH", "NOT_DEFINED"]
        },
        "scoreType": {
            "type": "number",
            "minimum": 0,
            "maximum": 10
        },
        "severityType": {
            "type": "string",
            "format": "radio",
            "enum": ["NONE", "LOW", "MEDIUM", "HIGH", "CRITICAL"]
        }
    },
    "properties": {
        "version": {
            "type": "string",
            "enum": ["3.0"],
            "options": {
                "hidden": "true"
            }
        },
        "vectorString": {
            "type": "string",
            options: {
                input_width: "50em"
            },
            "pattern": "^CVSS:3.0/((AV:[NALP]|AC:[LH]|PR:[UNLH]|UI:[NR]|S:[UC]|[CIA]:[NLH]|E:[XUPFH]|RL:[XOTWU]|RC:[XURC]|[CIA]R:[XLMH]|MAV:[XNALP]|MAC:[XLH]|MPR:[XUNLH]|MUI:[XNR]|MS:[XUC]|M[CIA]:[XNLH])/)*(AV:[NALP]|AC:[LH]|PR:[UNLH]|UI:[NR]|S:[UC]|[CIA]:[NLH]|E:[XUPFH]|RL:[XOTWU]|RC:[XURC]|[CIA]R:[XLMH]|MAV:[XNALP]|MAC:[XLH]|MPR:[XUNLH]|MUI:[XNR]|MS:[XUC]|M[CIA]:[XNLH])$",
            "watch": {
                "AV": "attackVector",
                "AC": "attackComplexity",
                "PR": "privilegesRequired",
                "UI": "userInteraction",
                "S": "scope",
                "C": "confidentialityImpact",
                "I": "integrityImpact",
                "A": "availabilityImpact"
            }
        },
        "attackVector": {
            "$ref": "#/definitions/attackVectorType"
        },
        "attackComplexity": {
            "$ref": "#/definitions/attackComplexityType"
        },
        "privilegesRequired": {
            "$ref": "#/definitions/privilegesRequiredType"
        },
        "userInteraction": {
            "$ref": "#/definitions/userInteractionType"
        },
        "scope": {
            "$ref": "#/definitions/scopeType"
        },
        "confidentialityImpact": {
            "$ref": "#/definitions/ciaType"
        },
        "integrityImpact": {
            "$ref": "#/definitions/ciaType"
        },
        "availabilityImpact": {
            "$ref": "#/definitions/ciaType"
        },
        "baseScore": {
            "$ref": "#/definitions/scoreType",
            options: {
                input_width: "5em"
            }
        },
        "baseSeverity": {
            "$ref": "#/definitions/severityType"
        },
        /*        "exploitCodeMaturity":            { "$ref": "#/definitions/exploitCodeMaturityType" },
                "remediationLevel":               { "$ref": "#/definitions/remediationLevelType" },
                "reportConfidence":               { "$ref": "#/definitions/confidenceType" },
                "temporalScore":                  { "$ref": "#/definitions/scoreType" },
                "temporalSeverity":               { "$ref": "#/definitions/severityType" },
                "confidentialityRequirement":     { "$ref": "#/definitions/ciaRequirementType" },
                "integrityRequirement":           { "$ref": "#/definitions/ciaRequirementType" },
                "availabilityRequirement":        { "$ref": "#/definitions/ciaRequirementType" },
                "modifiedAttackVector":           { "$ref": "#/definitions/modifiedAttackVectorType" },
                "modifiedAttackComplexity":       { "$ref": "#/definitions/modifiedAttackComplexityType" },
                "modifiedPrivilegesRequired":     { "$ref": "#/definitions/modifiedPrivilegesRequiredType" },
                "modifiedUserInteraction":        { "$ref": "#/definitions/modifiedUserInteractionType" },
                "modifiedScope":                  { "$ref": "#/definitions/modifiedScopeType" },
                "modifiedConfidentialityImpact":  { "$ref": "#/definitions/modifiedCiaType" },
                "modifiedIntegrityImpact":        { "$ref": "#/definitions/modifiedCiaType" },
                "modifiedAvailabilityImpact":     { "$ref": "#/definitions/modifiedCiaType" },
                "environmentalScore":             { "$ref": "#/definitions/scoreType" },
                "environmentalSeverity":          { "$ref": "#/definitions/severityType" } */
    },
    "required": ["version", "vectorString", "baseScore", "baseSeverity"]
};
//TODO: needs refactoring for standalone instance
if (!userName) {
    var userName = '';
}
var CVEschema = {
    "$schema": "http://json-schema.org/draft-04/schema#",

    "definitions": {
        "cve_id": {
            "type": "string",
            "pattern": "^CVE-[0-9]{4}-[0-9A-Za-z\.-]{4,}$"
        },
        "email_address": {
            "type": "string",
            "pattern": "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$"
        },
        "product": {
            "type": "object",
            "required": ["product_name", "version"],
            "properties": {
                "product_name": {
                    "type": "string",
                    "minLength": 1
                },
                "version": {
                    "type": "object",
                    "required": ["version_data"],
                    "properties": {
                        "version_data": {
                            "type": "array",
                            "minItems": 1,
                            "items": {
                                "title": "Version",
                                "type": "object",
                                "required": ["version_value"],
                                "properties": {
                                    "version_value": {
                                        "type": "string"
                                    },
                                    "platform": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "reference": {
            "type": "object",
            "required": ["url"],
            "properties": {
                "url": {
                    "maxLength": 500,
                    "type": "string",
                    "pattern": "^(ftp|http)s?://[^ \t]+$"
                }
            }
        },
        "lang_string": {
            "type": "object",
            "required": ["lang", "value"],
            "properties": {
                "lang": {
                    "type": "string"
                },
                "value": {
                    "type": "string",
                    "minLength": 2,
                    "maxLength": 3999

                }
            }
        }
    },

    "type": "object",
    "required": ["data_type", "data_format", "data_version", "CVE_data_meta", "affects", "problemtype", "references", "description"],
    "properties": {
        "data_type": {
            "type": "string",
            "enum": ["CVE"]
        },
        "data_format": {
            "type": "string",
            "enum": ["MITRE"]
        },
        "data_version": {
            "type": "string",
            "enum": ["4.0"]
        },
        "CVE_data_meta": {
            "type": "object",
            "required": ["ID", "ASSIGNER", "STATE"],
            "properties": {
                "ID": {
                    "$ref": "#/definitions/cve_id"
                },
                "ASSIGNER": {
                    "$ref": "#/definitions/email_address"
                },
                "DATE_PUBLIC": {
                    "type": "string",
                    "format": "datetime"
                },
                "TITLE": {
                    "type": "string"
                },
                STATE: {
                    "type": "string",
                    "enum": ["PUBLIC", "RESERVED", "REPLACED_BY", "SPLIT_FROM", "MERGED_TO"],
                    "default": "PUBLIC"
                }
            }
        },
        "affects": {
            "type": "object",
            "required": ["vendor"],
            "properties": {
                "vendor": {
                    "type": "object",
                    "required": ["vendor_data"],
                    "properties": {
                        "vendor_data": {
                            "type": "array",
                            "minItems": 1,
                            "items": {
                                "title": "Vendor",
                                "type": "object",
                                "required": ["vendor_name", "product"],
                                "properties": {
                                    "vendor_name": {
                                        "type": "string"
                                    },
                                    "product": {
                                        "type": "object",
                                        "required": ["product_data"],
                                        "properties": {
                                            "product_data": {
                                                "type": "array",
                                                "minItems": 1,
                                                "items": {
                                                    "title": "Product",
                                                    "$ref": "#/definitions/product"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "description": {
            "type": "object",
            "required": ["description_data"],
            "properties": {
                "description_data": {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "title": "Description",
                        "$ref": "#/definitions/lang_string"
                    }
                }
            }
        },
        "problemtype": {
            "type": "object",
            "required": ["problemtype_data"],
            "properties": {
                "problemtype_data": {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "title": "Problem type",
                        "type": "object",
                        "required": ["description"],
                        "properties": {
                            "description": {
                                "type": "array",
                                "minItems": 1,
                                "items": {
                                    "title": "Problem type description",
                                    "$ref": "#/definitions/lang_string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "references": {
            "type": "object",
            "required": ["reference_data"],
            "properties": {
                "reference_data": {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "title": "URL",
                        "$ref": "#/definitions/reference"
                    }
                }
            }
        }
    }
};

// Additions to CVE Schema that could be benefitial for all.
var CVEschema_plus = {
    options: {
        input_width: "10em"
    },
    definitions: {
        lang_string: {
            properties: {            
                lang: {
                    "options": {
                        "hidden": "true"
                    },
                    default: "eng"
                },
                value: {
                    format: "textarea",
                    options: {
                        "input_height": "9em"
                    }
                }
            }
        },
        product: {
            properties: {
                version: {
                    properties: {
                        version_data: {
                            format: "table",
                            items: {
                                properties: {
                                    platform: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    properties: {
        data_type: {
            "options": {
                "hidden": "true"
            }
        },
        "data_format": {
            "options": {
                "hidden": "true"
            }

        },
        "data_version": {
            "options": {
                "hidden": "true"
            }
        },
        CVE_data_meta: {
            options: {
                layout: "grid",
                grid_columns: 2
            },
            properties: {
                ID: {
                    options: {
                        "input_width": "24em"
                    }
                },
                DATE_PUBLIC: {
                    options: {
                        input_width: "20em"
                    }
                },
                TITLE: {
                    options: {
                        input_width: "100%"
                    }
                },
                STATE: {
                    format: "radio"
                }
            }
        },
        affects: {
            format: "table",
            properties: {
                vendor: {
                    properties: {
                        vendor_data: {
                            format: "table"
                        }
                    }
                }
            }
        },
        description: {
            properties: {
                description_data: {
                    format: "table"
                }
            }
        },
        problemtype: {
            properties: {
                problemtype_data: {
                    format: "table",
                    items: {
                        properties: {
                            description: {
                                format: "table"
                            }
                        }
                    }
                }
            }
        },
        "configuration": {
            "type": "array",
            "format": "table",
            "items": {
                "title": "required configuration",
                "$ref": "#/definitions/lang_string"
            }
        },
        "impact": {
            "type": "object",
            "properties": {
                "cvss": {
                    "type": "object",
                    "properties": CVSSschema.properties
                }
            }
        },
        "exploit": {
            "type": "string"
        },
        "work_around": {
            "type": "array",
            "format": "table",
            "items": {
                "title": "work around",
                "$ref": "#/definitions/lang_string"
            }
        },
        "solution": {
            "type": "string",
            "format": "textarea",
            "options": {
                "input_height": "6em"
            }
        },
        "credit": {
            "type": "array",
            "format": "table",
            "items": {
                "title": "credit",
                "type": "string"
            }
        },
        references: {
            properties: {
                reference_data: {
                    format: "table"
                }
            },
            propertyOrder: 14
        },
    }
};

Object.assign(CVEschema.definitions, CVSSschema.definitions);
textUtil.mergeJSON(CVEschema, CVEschema_plus);
if(CVEschema_custom) {
    textUtil.mergeJSON(CVEschema, CVEschema_custom);
}