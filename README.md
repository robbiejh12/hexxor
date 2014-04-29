Hexxor
======

Two Time Pad Decrypter

To decrypt a two(+) time pad cipher:

1) Input two ciphertexts in hex in the first two text inputs.<br>
2) Click 'XOR'!<br>
3) The ciphertexts are returned in hex, dec, bin and ascii, and the binaries are XORed together with the result then
    returned in hex, dec, bin and ascii.<br>
4) Click 'Grab' to copy the XOR of the two ciphertexts and paste it into the ciphertext 1 input.<br>
5) Put a test string (e.g. " the ") in the "check word" input, click 'Check' and see the result.<br>
6) Use the 'Shift L' and 'Shift R' buttons to cycle the test string back and forth to scan the message for a likely 
    looking plaintext string.<br>
7) Repeat and decode as you would by hand.<br>
<p>
NOTES:

a) Hexxor makes the process of XORing ciphertexts and potential plaintext cribs easy. Hexxor does not recognise strings in
    the resulting plaintext. That is your job.<br>
b) Hexxor can also encrypt/decrypt a plaintext/ciphertext if you have the key already. Simply use the key as one of the
    ciphertexts, and the plain/ciphertext as the other, and click XOR.<br>
c) ASCII results return spaces as a dagger and other invisible characters as a block in order to keep the texts lined up.<br>
d) Hexxor assumes you are only dealing with 2-digit hex values, and that you input those values as a string of 2-digit hex
    values (e.g. "746865" = "the").<br>
e) Hexxor uses ciphertext 1 to determine the length of the results - if ciphertext 2 is longer than ciphertext 1, Hexxor
    will leave the tail of the ciphertext on the end of the result.
