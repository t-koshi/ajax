$(function(){
  console.log($("#jax"));
  $("#jax").bind("click", function(){
    $.ajax({
      url: "http://ajaxtest126.herokuapp.com/data.html",
      type: 'GET',
      dataType: 'html',
      success: function(data){
        $('#ajax').html(data);
      }
    });
  });
});
