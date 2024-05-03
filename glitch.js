var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "Й", "Ц", "Г", "Ш", "Щ", "З", "Ф", "П", "Л", "Д","Ж", "Э", "Я", "Ч", "И", "Ь", "Б", "Ю", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var lNumbers = letters.length;
var RandLN = letters[Math.floor(Math.random() * lNumbers)];

var i = 0;
var blinker = 0;

var interval1 = setInterval(function(){



i = i + 1;

var text = document.getElementById("glitch");

var glitch = text.textContent;

var characters = glitch.split('');

characters[0] = letters[Math.floor(Math.random() * lNumbers)];

if (i>20) {
 characters[0] = "F";
}

characters[1] = letters[Math.floor(Math.random() * lNumbers)];

if (i>21) {
 characters[1] = "u";
}

characters[2] = letters[Math.floor(Math.random() * lNumbers)];

if (i>22) {
 characters[2] = "l";
}

characters[3] = letters[Math.floor(Math.random() * lNumbers)];

if (i>23) {
 characters[3] = "l";
}

characters[4] = letters[Math.floor(Math.random() * lNumbers)];

if (i>24) {
 characters[4] = "-";
}

characters[5] = letters[Math.floor(Math.random() * lNumbers)];

if (i>25) {
 characters[5] = "S";
}

characters[6] = letters[Math.floor(Math.random() * lNumbers)];

if (i>26) {
 characters[6] = "t";
}

characters[7] = letters[Math.floor(Math.random() * lNumbers)];

if (i>27) {
 characters[7] = "a";
}

characters[8] = letters[Math.floor(Math.random() * lNumbers)];

if (i>28) {
 characters[8] = "c";
}

characters[9] = letters[Math.floor(Math.random() * lNumbers)];

if (i>29) {
 characters[9] = "k";
}

characters[11] = letters[Math.floor(Math.random() * lNumbers)];

if (i>31) {
 characters[11] = "W";
}

characters[12] = letters[Math.floor(Math.random() * lNumbers)];

if (i>32) {
 characters[12] = "e";
}

characters[13] = letters[Math.floor(Math.random() * lNumbers)];

if (i>33) {
 characters[13] = "b";
}

characters[15] = letters[Math.floor(Math.random() * lNumbers)];

if (i>35) {
 characters[15] = "D";

}
characters[16] = letters[Math.floor(Math.random() * lNumbers)];

if (i>36) {
 characters[16] = "e";
}

characters[17] = letters[Math.floor(Math.random() * lNumbers)];

if (i>37) {
 characters[17] = "s";
}

characters[18] = letters[Math.floor(Math.random() * lNumbers)];

if (i>38) {
 characters[18] = "i";
}

characters[19] = letters[Math.floor(Math.random() * lNumbers)];

if (i>39) {
 characters[19] = "g";
}

characters[20] = letters[Math.floor(Math.random() * lNumbers)];

if (i>40) {
 characters[20] = "n";
}

characters[22] = letters[Math.floor(Math.random() * lNumbers)];

if (i>42) {
 characters[22] = "&";
}

characters[24] = letters[Math.floor(Math.random() * lNumbers)];

if (i>44) {
 characters[24] = "D";
}

characters[25] = letters[Math.floor(Math.random() * lNumbers)];

if (i>45) {
 characters[25] = "e";
}

characters[26] = letters[Math.floor(Math.random() * lNumbers)];

if (i>46) {
 characters[26] = "v";
}

characters[27] = letters[Math.floor(Math.random() * lNumbers)];

if (i>47) {
 characters[27] = "e";
}

characters[28] = letters[Math.floor(Math.random() * lNumbers)];

if (i>48) {
 characters[28] = "l";
}

characters[29] = letters[Math.floor(Math.random() * lNumbers)];

if (i>49) {
 characters[29] = "o";
}

characters[30] = letters[Math.floor(Math.random() * lNumbers)];

if (i>50) {
 characters[30] = "p";
}

characters[31] = letters[Math.floor(Math.random() * lNumbers)];

if (i>51) {
 characters[31] = "m";
}

characters[32] = letters[Math.floor(Math.random() * lNumbers)];

if (i>52) {
 characters[32] = "e";
}

characters[33] = letters[Math.floor(Math.random() * lNumbers)];

if (i>53) {
 characters[33] = "n";
}

 characters[34] = letters[Math.floor(Math.random() * lNumbers)];

if (i>54) {
 characters[34] = "t";
}

if (i>55) {
 blinker++;
}

if (blinker === 10) {
 blinker = 0;
 if(characters[35] != "_") {
	characters[35] = "_";
 } else characters[35] = " ";
}

var change = characters.join('');

text.textContent = change;

}, 75);
