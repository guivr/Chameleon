/* Stack Overflow:
*    http://stackoverflow.com/questions/754607/can-jquery-get-all-css-styles-associated-with-an-element
*
*  Used to get all the styles of an element
*/
function css(a) {
  var sheets = document.styleSheets, o = {};
  for (var i in sheets) {
    var rules = sheets[i].rules || sheets[i].cssRules;
    for (var r in rules) {
      if (a.is(rules[r].selectorText)) {
        o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
      }
    }
  }
  return o;
}

function css2json(css) {
  var s = {};
  if (!css) return s;
  if (css instanceof CSSStyleDeclaration) {
    for (var i in css) {
      if ((css[i]).toLowerCase) {
        s[(css[i]).toLowerCase()] = (css[css[i]]);
      }
    }
  } else if (typeof css == "string") {
    css = css.split("; ");
    for (var i in css) {
      var l = css[i].split(": ");
      s[l[0].toLowerCase()] = (l[1]);
    }
  }
  return s;
}



/* ChameleonElement: */
$(document).ready(function() {
  $.fn.chameleonElement = function (data) {

    var parent = data.element;
    var result = {};
    var parentStyle = css($(parent));

    return this.each(function(){
      if (data.inheritAll === true) {
        $(this).css(parentStyle);
      } else {
        for (prop in data.inherit) {
          result[prop] = $(parent).css(data.inherit[prop]);
        }
        $(this).css(result);
      }
    });
  };
});
});*/