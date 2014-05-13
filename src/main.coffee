# Little Topbar
# A tiny responsive navigation library

$(document).ready ->
	topbar = $ "nav.little-topbar"
	expand_link = $ ".little-toggle a.expand"
	collapse_link = $ ".little-toggle a.collapse"
	expand_class = "expanded"

	expand_link.click ->
		topbar.addClass expand_class
		return
	collapse_link.click ->
		topbar.removeClass expand_class
		return
	return