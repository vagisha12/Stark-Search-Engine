var displayWikipediaData = ()=> {
  var $linksElement = $('#links');
  var searchString = $('#searchString').val();
  $linksElement.empty();
  var wikipediaUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchString + '&format=json&callback=wikiCallback';
  $.ajax({
    url: wikipediaUrl,
    dataType: "jsonp",
    jsonp: "callback",
    success: (res)=> {
      var linkLists = res[1];
      linkLists.forEach(item=>{
    var url = "https://www.wikipedia.org/wiki/" + item;
    $linksElement.append('<li><a href="' + url +'">' + item + '</a></li>');
});
  }
});
    return false;
  };
$('#form').submit(displayWikipediaData);
