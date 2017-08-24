$(document).ready(function(){

  $.ajax({
    url: 'xml/news.xml',
    dataType: 'xml',
    success: function(data){
      $(data).find('channel item').each(function(){
        var title = '<h4 class="card-title">'+$(this).find('title').text()+'</h4>';
        var link = $(this).find('link').text();
        var date = ' <p class="card-text"><small class="text-muted">'+$(this).find('pubDate').text()+'</small></p>';

        $('.card-columns').append(
          $('<div />', {
              html: '<img class="card-img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkpPT8aJOO4he19zWEbTjHyY-97Z-hsrrys7wV3FMjiDb5I0K1n3rzomONi-qndFIG48b9qFo5kg" alt="Card image">' + title + date + '<a class="btn btn-primary" href="' + link + '">Click To Read</a>'
          })
        );
      });
    },
    error: function(){
      $('.container-fluid').text('Failed to get feed');
    }
  });


});
