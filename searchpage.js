
function search() {
    let input = document.getElementById('searchbar').value
    document.getElementById('result').innerHTML = input;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('name');
    let items = document.querySelectorAll('.item');
    for (i = 0; i < x.length; i++) {
        // alert(x[i].innerHTML.toLowerCase().includes(input));
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            items[i].style.display="none";
        }
        else {
            items[i].style.display="flex";
        }
    }
}
