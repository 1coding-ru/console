//
define("ace/theme/1c", [
  "require",
  "exports",
  "module",
  "ace/lib/dom",
], function (require, exports, module) {
  exports.isDark = false;
  exports.cssClass = "ace-1c";
  exports.cssText =
    ".ace-1c .ace_gutter {\
    background: #ffffff;\
    color: #e8e5d0\
    }\
    .ace-1c .ace_print-margin {\
    width: 1px;\
    background: transparent;\
    }\
    .ace-1c {\
    background-color: #ffffff;\
    color: #0000FF\
    }\
    .ace-1c .ace_cursor {\
    color: black;\
    }\
    .ace-1c .ace_singleoperator{\
      color: #FF0000\
      }\
    .ace-1c .ace_marker-layer .ace_selection {\
    background: black\
    }\
    .ace-1c.ace_multiselect .ace_selection.ace_start {\
    box-shadow: 0 0 3px 0px #141414;\
    }\
    .ace-1c .ace_marker-layer .ace_step {\
    background: rgb(16, 128, 0)\
    }\
    .ace-1c .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid #ffffff\
    }\
    .ace-1c .ace_marker-layer .ace_active-line {\
    background: rgba(255, 255, 255, 0.04)\
    }\
    .ace-1c .ace_gutter-active-line {\
    background-color: rgba(255, 255, 255, 0.04)\
    }\
    .ace-1c .ace_marker-layer .ace_selected-word {\
    border: 1px solid rgba(192, 240, 255, 0.20)\
    }\
    .ace-1c .ace_invisible {\
    color: rgba(255, 255, 255, 0.25)\
    }\
    .ace-1c .ace_paren {\
      color: #FF0000\
      }\
      .ace-1c .ace_doubleoperator {\
        color: #FF0000\
        }\
    .ace-1c .ace_keyword,\
    .ace-1c .ace_meta {\
    color: #FF0000\
    }\
    .ace-1c .ace_constant,\
    .ace-1c .ace_constant.ace_character,\
    .ace-1c .ace_constant.ace_character.ace_escape,\
    .ace-1c .ace_constant.ace_other,\
    .ace-1c .ace_heading,\
    .ace-1c .ace_markup.ace_heading,\
    .ace-1c .ace_support.ace_constant {\
    color: #FF0000\
    }\
    .ace-1c .ace_invalid.ace_illegal {\
    color: #F8F8F8;\
    background-color: rgba(86, 45, 86, 0.75)\
    }\
    .ace-1c .ace_invalid.ace_deprecated {\
    text-decoration: underline;\
    font-style: italic;\
    color: #20F8C0\
    }\
    .ace-1c .ace_support {\
    color: #20E8B0\
    }\
    .ace-1c .ace_fold {\
    background-color: black;\
    border-color: #70F8F8\
    }\
    .ace-1c .ace_support.ace_function {\
    color: #0000FF\
    }\
    .ace-1c .ace_list,\
    .ace-1c .ace_markup.ace_list,\
    .ace-1c .ace_storage {\
    color: #10FF98\
    }\
    .ace-1c .ace_entity.ace_name.ace_function,\
    .ace-1c .ace_meta.ace_tag,\
    .ace-1c .ace_variable {\
    color: #00F868\
    }\
    .ace-1c .ace_string {\
    color: black\
    }\
    .ace-1c .ace_string.ace_regexp {\
    color: #20F090;\
    }\
    .ace-1c .ace_comment {\
    font-style: italic;\
    color: #008000;\
    }\
    .ace-1c .ace_variable {\
    color: #00F888;\
    }\
    .ace-1c .ace_xml-pe {\
    color: #488858;\
    }\
    .ace-1c .ace_indent-guide {\
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y\
    }\
    ";

  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});
(function () {
  window.require(["ace/theme/1c"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
