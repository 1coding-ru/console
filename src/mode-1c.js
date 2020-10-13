define("ace/mode/1c", function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var _1CHighlightRules = require("ace/mode/_1c_highlight_rules")
    ._1CHighlightRules;
  //var _1CFoldMode = require("./folding/1c").FoldMode;

  var Mode = function () {
    this.HighlightRules = _1CHighlightRules;
    //this.foldingRules = new _1CFoldMode();
    this.$behaviour = this.$defaultBehaviour;
  };
  oop.inherits(Mode, TextMode);

  (function () {
    this.lineCommentStart = "//";
    // this.blockComment = {start: ""/*"", end: ""*/""};
    // Extra logic goes here.
    this.$id = "ace/mode/1c";
  }.call(Mode.prototype));

  exports.Mode = Mode;
});

define("ace/mode/_1c_highlight_rules", function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("ace/mode/text_highlight_rules")
    .TextHighlightRules;

  var _1CHighlightRules = function () {
    var keywords =
      "процедура|функция|конецпроцедуры|конецфункции|для|пока|по|цикл|конеццикла|если|тогда|иначе|иначеесли|конецесли|попытка|исключение|конецпопытки|каждого|" +
      "перем|знач|и|или|не|из|новый|прервать|продолжить|возврат|экспорт|массив|структура|соответствие|массив|вызватьисключение" +
      "procedure|function|endprocedure|endfunction|for|while|to|do|enddo|if|then|else|elseif|endif|try|catch|endtry|each|" +
      "var|val|and|or|not|new|break|continue|return|export|array|structure|map|rise";
    var builtinConstants = "истина|ложь|неопределено|true|false";
    var builtinFunctions =
      "лев|сред|прав|цел|окр|минимум|максимум|число|строка|дата|формат|сокрлп|сокрл|символ|кодсимвола|" +
      "врег|нрег|трег|найти|стрнайти|стрчисловхождений|пустаястрока|стрзаменить|стрчислострок|стрполучитьстроку|" +
      "стрразделить|стрсоединить|год|месяц|день|час|минута|секунда|началогода|началоквартала|началомесяца|началонедели|" +
      "началодня|началочаса|началоминуты|конецгода|конецквартала|конецмесяца|конецнедели|конецдня|конецчаса|конецминуты|" +
      "тип|типзнч|показатьвопрос|вопрос|предупреждение|сообщить";
    var dataTypes =
      "константы|справочники|документы|журналыдокументов|перечисления|регистрысведений|регистрынакопления|отчеты|обработки" +
      "планывидовхарактеристик|планыобмена|параметрысеанса|роли|общиереквизиты|общиеформы|общиемакеты|критерииотбора";
    var keywordMapper = this.createKeywordMapper(
      {
        "support.function": builtinFunctions,
        keyword: keywords,
        "constant.language": builtinConstants,
        types: dataTypes,
      },
      "identifier",
      true
    );

    this.$rules = {
      start: [
        {
          token: "comment",
          regex: "//.*",
        },
        {
          token: keywordMapper,
          regex: "[_A-Za-zА-ЯЁа-яё][_A-Za-z0-9А-ЯЁа-яё]*",
        },
        {
          token: "label",
          regex:
            "~(\u0020|\t)*[_A-Za-zА-ЯЁа-яё][_A-Za-z0-9А-ЯЁа-яё]*(\u0020|\t)*:",
        },
        {
          token: "string", // ' string
          regex: '"{1,1}[^"]*"{1,1}',
        },
        {
          token: "identifier", // ' identifier
          regex: "[_A-Za-zА-ЯЁа-яё][_A-Za-z0-9А-ЯЁа-яё]*",
        },
        {
          token: "doubleoperator", // ' doubleoperator
          regex: "<=|<>|>=|{}",
        },
        {
          token: "singleoperator", // ' singleoperator
          regex: "[\\+\\-\\*/%&<>=;:,.]",
        },
        {
          token: "number", // ' number
          regex: "[0-9]*(.[0-9])+",
        },
        {
          token: "paren.lparen",
          regex: "[\\(]",
        },
        {
          token: "paren.rparen",
          regex: "[\\)]",
        },
        {
          token: "paren.lsqare",
          regex: "[\\[]",
        },
        {
          token: "paren.rsqare",
          regex: "[\\]]",
        },
      ],
    };
    this.normalizeRules();
  };

  oop.inherits(_1CHighlightRules, TextHighlightRules);

  exports._1CHighlightRules = _1CHighlightRules;
});
