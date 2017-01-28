$(document).ready(function() {
  if ($('#landing').length) {
    getQuote();
    $('#get-quote').on('click', getQuote);
    $('#btn-twitter').on('click', function() {openURL(url);});
  }
});

function getQuote() {
      $.when($.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift();
        var author = post.title;
        if($(post.content).text().length > 250) {
          getQuote();
        } else {
          var quote = $(post.content).text();
          setTweetText(quote, author);
          $('#quote-author').html(author);
          $('#quote-content').html(quote);
        }
      },
      cache: false
    })).then(function(){
      $('#content').show();
      $('#msg').hide();
    })
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
var url = "";
function setTweetText(quote, author) {
  url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + " -" + author);
}
