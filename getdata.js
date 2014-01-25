$(function(){
  console.log($("#jax"));
  $("#jax").bind("click", function(){
    $.ajax({
      url: "file:///home/greapflute/www/js/ajax/data.html",
      type: 'GET',
      dataType: 'html',
      success: function(data){
        $('#ajax').html(data);
      }
    });
  });
});

/*
jQuery( function() {
    jQuery( '#jquery-sample-button' ) . toggle(
        function() {
            jQuery . ajax( {
                url: 'jquery-sample-ajax-html.html',
                success: function( data ) {
                    jQuery( '#jquery-sample-ajax' ) . html( data );
                    jQuery( '#jquery-sample-textStatus' ) . text( '読み込み成功' );
                },
                error: function( data ) {
                    jQuery( '#jquery-sample-textStatus' ) . text( '読み込み失敗' );
                }
            } );
        },
        function() {
            jQuery( '#jquery-sample-ajax' ) . html( '' );
            jQuery( '#jquery-sample-textStatus' ) . text( '' );
        }
    );
} );
/*
function getdata(){
  $.ajax({
    url: 'data.html',
    type: 'GET',
    dataType: 'text',
    success: function(data){
      $('#ajax').html(data);
    }
  });
}
*/
