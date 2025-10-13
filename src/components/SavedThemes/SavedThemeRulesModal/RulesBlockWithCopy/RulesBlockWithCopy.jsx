import React, { useState, useMemo } from "react";
import CopyIcon from "../../../../assets/copy.svg?react";
import "./RulesBlockWithCopy.scss";

const RulesBlockWithCopy = ({ colorScheme, language }) => {

  const colors = Object.fromEntries(
    colorScheme.map(({ construct, color }) => [construct, color])
  );

  const [copied, setCopied] = useState(false);

  const colorRules = useMemo(() => {
    if (language === "CSS") {
      return `"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": "entity.name.tag.css",
      "settings": { "foreground": "${colors.typeSel}" }
    },
    {
      "scope": [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.pseudo-class.css"
      ],
      "settings": { "foreground": "${colors.classSel}" }
    },
    {
      "scope": "support.type.property-name.css",
      "settings": { "foreground": "${colors.property}" }
    },
    {
      "scope": [
        "support.constant.property-value.css",
        "constant.other.color.rgb-value.css",
        "constant.numeric.css"
      ],
      "settings": { "foreground": "${colors.value}" }
    }
  ]
}`;
    } else if (language === "HTML") {
      return `"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": "entity.name.tag.html",
      "settings": { "foreground": "${colors.htmlTag}" }
    },
    {
      "scope": "entity.other.attribute-name.html",
      "settings": { "foreground": "${colors.attName}" }
    },
    {
      "scope": [
        "string.quoted.double.html",
        "string.quoted.single.html"
      ],
      "settings": { "foreground": "${colors.attValue}" }
    }
  ]
}`;
    } else if (language === "JS") {
      return `"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": [
        "keyword",
        "storage.type",
        "storage.modifier"
      ],
      "settings": { "foreground": "${colors.keyword}" }
    },
    {
      "scope": [
        "variable",
        "variable.other",
        "variable.other.constant",
        "entity.name.variable"
      ],
      "settings": { "foreground": "${colors.variable}" }
    },
    {
      "scope": [
        "entity.name.function",
        "entity.name.function.js",
        "support.function",
        "support.function.builtin",
        "meta.function-call",
        "variable.function"
      ],
      "settings": { "foreground": "${colors.func}" }
    },
    {
      "scope": [
        "constant.numeric",
        "constant.language.boolean",
        "constant.language.null"
      ],
      "settings": { "foreground": "${colors.number}" }
    },
    {
      "scope": [
        "string",
        "string.quoted",
        "string.template",
        "punctuation.definition.string"
      ],
      "settings": { "foreground": "${colors.string}" }
    }
  ]
}`;
    } else {
      return "";
    }
  }, [colors, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(colorRules);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rules-block">
      <pre className="rules-block__code">
        {colorRules}
      </pre>
      <button className="rules-block__copy-btn" onClick={handleCopy}>
        {!copied && <CopyIcon className="rules-block__copy-icon" />}
        {copied ? "✓ Code Copied!" : "Copy Code"}
      </button>
    </div>
  );
};

export default RulesBlockWithCopy;
