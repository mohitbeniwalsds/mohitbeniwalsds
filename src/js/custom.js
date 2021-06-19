  function convertToSlug()
{ 
  var slug = function(str) {
  var $slug = '';
  var trimmed = $.trim(str);
  $slug = trimmed.replace(/[^a-z0-9-]/gi, '-').
  replace(/-+/g, '-').
  replace(/^-|-$/g, '');
  $('#slug').val($slug.toLowerCase());
  return $slug.toLowerCase();
  
}
slug =  slug($('#cname').val());
}