(function() {
  $(document).ready(function() {
    var collapse_link, expand_class, expand_link, topbar;
    topbar = $("nav.little-topbar");
    expand_link = $(".little-toggle a.expand");
    collapse_link = $(".little-toggle a.collapse");
    expand_class = "expanded";
    expand_link.click(function() {
      topbar.addClass(expand_class);
    });
    collapse_link.click(function() {
      topbar.removeClass(expand_class);
    });
  });

}).call(this);
