var hexstringsave = '';
var inv = 0;
var resultUp = 0;

var blankAsciiChars = [173]; //define visually blank ascii chars
for (i=0; i<32; i++){
blankAsciiChars.push(i);
};
for (i=127; i<161; i++){
blankAsciiChars.push(i);
};

function hex2ascii(num,place) { //hex to ascii
document.getElementById(place).innerHTML='';
        temparr = [];
        for (b = 0; b < num.length; b = b + 2){ //every 2 digits
        var p = parseInt(num.substr(b, 2), 16); //parse hex
        	if (blankAsciiChars.indexOf(p)>-1){ //visual blanks
        	temparr.push(8728); //ring for blanks
        	}
        	else if (p==32){
        	temparr.push(8729); //bullet for spaces
        	}
        	else {
            temparr.push(String.fromCharCode(p)); //else to ascii
        };
        };
for (i=0; i<temparr.length; i++){
var x = temparr[i];
if (x == 8728 || x == 8729){ //non-visual chars
var node=document.createElement("span");
node.setAttribute("class","a");
var textnode=document.createTextNode(String.fromCharCode(x));
node.appendChild(textnode);
document.getElementById(place).appendChild(node);
}
else{ //other wise red
var node1=document.createElement("span");
node1.setAttribute("class","b");
var textnode1=document.createTextNode(x);
node1.appendChild(textnode1);
document.getElementById(place).appendChild(node1);
};
};
};

function submit(){
var ct1Hex = document.getElementById('ct1').value; //grab hex values from html
var ct2Hex = document.getElementById('ct2').value;
var ct1Array = ct1Hex.match(/.{1,2}/g); //split into to array of 2-digit hex values
var ct2Array = ct2Hex.match(/.{1,2}/g);
var ct1Dec=[]; //declare and reset variables
var ct2Dec=[];
var ct1Bin=[];
var ct2Bin=[];
var resultBin=[];
var resultDec=[];
var resultHex=[];
var resultHexString = '';
for (i=0; i<ct1Array.length; i++){ //parse hex1 to dec
var a = parseInt(ct1Array[i], 16);
for (b = a.toString().length; b<3; b++){ //dec to 3 digits
a = "0" + a;
};
ct1Dec.push(a); //back to num and push
var x = parseInt(ct1Dec[i]).toString(2); //convert dec to bin
for (j=x.length; j<8; j++){ //pad out bin to 8 digits
x = "0" + x;
};
ct1Bin.push(x);
};
for (i=0; i<ct2Array.length; i++){ //as above for hex2
var a = parseInt(ct2Array[i], 16);
for (b = a.toString().length; b<3; b++){ //dec to 3 digits
a = "0" + a;
};
ct2Dec.push(a);
var y = parseInt(ct2Dec[i]).toString(2);
for (j=y.length; j<8; j++){
y = "0" + y;
};
ct2Bin.push(y);
};
for (i=0; i<ct1Dec.length; i++){ //xor the ct arrays
var d = ct1Dec[i] ^ ct2Dec[i];
var h = d.toString(16); //convert back to hex
for (q=h.length; q<2; q++){ //ensure hex is 2 digits
h = "0" + h;
};
resultHex.push(h);
var z = d.toString(2); //and bin
for (j=z.length; j<8; j++){ //bin to 8 digits
z = "0" + z;
};
resultBin.push(z);
for (a=d.toString().length; a<3; a++){ //dec to 3 digits
d = "0" + d;
};
resultDec.push(d);
};
resultHexString = resultHex.join("").toString(); //remove commas and stringify hex array
hexstringsave = resultHexString;
document.getElementById("ct1array").innerHTML = ct1Array; //write final results
document.getElementById("ct2array").innerHTML = ct2Array;
document.getElementById("ct1bin").innerHTML = ct1Bin;
document.getElementById("ct2bin").innerHTML = ct2Bin;
document.getElementById("ct1dec").innerHTML = ct1Dec;
document.getElementById("ct2dec").innerHTML = ct2Dec;
document.getElementById("resultdec").innerHTML = resultDec;
document.getElementById("resultbin").innerHTML = resultBin;
document.getElementById("resulthex").innerHTML = resultHex;
document.getElementById("hexasstr").innerHTML = resultHexString;
hex2ascii(resultHexString,'resultascii');
hex2ascii(ct1Hex,'ct1ascii');
hex2ascii(ct2Hex,'ct2ascii');

if (resultUp == 0){
tabSwap('ascii');
resultUp = 1;
}
else{};
};

setInterval(function (){ //character count for cts
var ct1Length = document.getElementById('ct1').value.length;
document.getElementById("ct1char").innerHTML = ct1Length;
var ct2Length = document.getElementById('ct2').value.length;
document.getElementById("ct2char").innerHTML = ct2Length;
}, 100);

function check(shift){ //check a word against ct
var checkword = document.getElementById('checkword').value; //grab the word
var checklength = parseInt(checkword.length);
if (checklength == 0){
return 0;
}
else{
if (shift==0){
inv = 0;
}
else{
inv += shift;
if (inv<0){inv=checklength-1}; //avoid negs
};
var leng = document.getElementById('ct1').value.length; //for ct length
var ct2Check = [];
for (i=0; i<leng; i+=2){
var position = (i/2) + parseInt(inv);
var remainder = position % checkword.length;
var x = checkword.charCodeAt(remainder); //ascii to dec
x = x.toString(16) //dec to hex
for (q=x.length; q<2; q++){ //ensure hex is 2 digits
x = "0" + x;
};
ct2Check.push(x);
};
ct2Check = ct2Check.join("");
document.getElementById('ct2').value = ct2Check;
submit();
};
};

function strgrab(){ //copy and paste result hex string
document.getElementById('ct1').value = hexstringsave;
inv = 0;
};

function clearAll(){ //clear html elements
document.getElementById('ct1').value = "";
document.getElementById('ct2').value = "";
document.getElementById('checkword').value = "";
document.getElementById("ct1array").innerHTML = "";
document.getElementById("ct2array").innerHTML = "";
document.getElementById("ct1bin").innerHTML = "";
document.getElementById("ct2bin").innerHTML = "";
document.getElementById("ct1dec").innerHTML = "";
document.getElementById("ct2dec").innerHTML = "";
document.getElementById("resultdec").innerHTML = "";
document.getElementById("resultbin").innerHTML = "";
document.getElementById("resulthex").innerHTML = "";
document.getElementById("hexasstr").innerHTML = "";
document.getElementById("resultascii").innerHTML = "";
document.getElementById("ct1ascii").innerHTML = "";
document.getElementById("ct2ascii").innerHTML = "";
resultUp = 0;
inv = 0;
init();
};

function init(){
var divs = document.getElementsByClassName('tabContent');
for(var i=0; i<divs.length; i++) { 
  divs[i].style.visibility='hidden';
};
};

function tabSwap(tabName){
init();
switch (tabName){
	case "ascii":
		x = 'ascii';
		break;
	case "hex":
	 	x = 'hex';
		break;
	case "dec":
		x = 'dec';
		break;
	case "bin":
		x = 'bin';
		break;
	default:
		break;
}
document.getElementById(x).style.visibility='visible';
resultUp = 1;
};