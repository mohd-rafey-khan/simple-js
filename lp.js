function search() {
  var input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  var names = document.querySelectorAll('.card-title');
  var all_div = document.querySelectorAll('.item');
  for(i=0;i<all_div.length;i++){
    if(!names[i].innerText.toLowerCase().includes(input)){
      all_div[i].style.display = "none";
    }else{
      all_div[i].style.display = "block";
    }
  }
}
