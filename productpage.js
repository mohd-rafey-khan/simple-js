var items = [
  {
    name_data:"Dell Inspiron 5000 15.6 Inch FHD 1080P Touchscreen Laptop (Intel Core i7-1065G7 up to 3.9GHz, 16GB DDR4 RAM, 512GB SSD, Intel UHD Graphics, Backlit KB, HDMI, WiFi, Bluetooth, Win10)",

    para_data:`15. 6 inch Touchscreen LED-Backlit FHD (1920 x 1080) Display, Intel UHD Graphics, 10th Generation Intel Core i7-1065G7 Processor (1. 3 GHz base frequency up to 3. 9 GHz, 8MB cache, 4 cores) RAM is upgraded to 16GB DDR4 memory for multitasking Adequate high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once Hard Drive is upgraded to 512GB SSD provides massive
    storage space for huge files, so that you can store important digital data and work your way through it with ease. It gives you enormous space to save all of your files. Enhance the overall performance
    of the laptop for business, student, daily usage 2x USB 3. 1 Gen 1, 1x USB 2. 0, 1x HDMI, 1x Media Card Reader, 1x Combo Headphone/Microphone Jack, 1 x RJ-45 Windows 10 Home brings back the Start Menu from Windows 7 and introduces new features, like the Edge Web browser that lets you markup Web pages on your screen.`
  }
];

// set h5 data and paragraph (about this item) using javascript
document.getElementById("name").innerText = items[0].name_data;

document.getElementById('para').innerText = items[0].para_data;

// fetch price
var show = document.getElementById('Outstock').innerText;
var p = parseInt(show.split("$")[1]);

// add addEventListener onchnage to get selected value
var select = document.getElementById('myselect');
select.addEventListener('change',function() {
  var choice = select.value;
  var total = p*choice;
  document.getElementById('Outstock').innerText = "$"+total;
});
