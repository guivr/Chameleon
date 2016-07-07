$(document).ready(function() {
  $.fn.inheritJS = function (datas) {
    if(datas){
      return this.each(function(){
        var parent = datas.parent;
        var inheritProp = datas.inherit;
        var parentProp = $(parent).css(inheritProp);
        var propsString = datas['applyto'].split(',');
        var props = {};

        propsString.forEach(function(prop){
          props[prop] = parentProp;
        });

        $(this).css(props);
      });
    } else {
      return this.each(function(){
        var parent = $(this).data('parent');
        var inheritProp = $(this).data('inherit');
        var parentProp = $(parent).css(inheritProp);
        var propsString = $(this).data('applyto').split(',');
        var props = {};

        propsString.forEach(function(prop){
          props[prop] = parentProp;
        });

        $(this).css(props);
      });
    }
  }
});