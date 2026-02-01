// src/config/schemas/configSchema.js

module.exports = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Analyzer Configuration Schema",
  "description": "Schema for harmonic analysis configuration",
  "type": "object",
  "required": ["version", "analysis", "output"],
  "properties": {
    "version": {
      "type": "string",
      "pattern": "^\\d+\\.\\d+\\.\\d+$"
    },
    "input": {
      "type": "object",
      "properties": {
        "format": {
          "type": "string",
          "enum": ["musicxml"]
        },
        "encoding": {
          "type": "string",
          "default": "utf-8"
        },
        "validation": {
          "type": "boolean",
          "default": true
        }
      }
    },
    "analysis": {
      "type": "object",
      "description": "Analysis configuration options",
      "properties": {
        "piano": {
          "type": "object",
          "properties": {
            "handUnification": {
              "type": "string",
              "enum": ["unified", "separate", "both"]
            },
            "options": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": ["unified", "separate", "both"]
              }
            }
          },
          "additionalProperties": false
        },
        "tonality": {
          "type": "object",
          "properties": {
            "algorithms": {
              "type": "object",
              "properties": {
                "krumhanslSchmuckler": {
                  "type": "object",
                  "properties": {
                    "enabled": { "type": "boolean" },
                    "weight": {
                      "type": "number",
                      "minimum": 0,
                      "maximum": 1
                    }
                  },
                  "additionalProperties": false
                }
              }
            }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    },
    "output": {
      "type": "object",
      "properties": {
        "formats": {
          "type": "object",
          "properties": {
            "musicxml": {
              "type": "object",
              "properties": {
                "enabled": { "type": "boolean" }
              },
              "additionalProperties": false
            },
            "markdown": {
              "type": "object",
              "properties": {
                "enabled": { "type": "boolean" },
                "verbosity": {
                  "type": "string",
                  "enum": ["concise", "intermediate", "detailed"]
                }
              },
              "additionalProperties": false
            },
            "json": {
              "type": "object",
              "properties": {
                "enabled": { "type": "boolean" },
                "pretty": { "type": "boolean" }
              },
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        "directory": { "type": "string" }
      },
      "additionalProperties": false
    }
  }
};