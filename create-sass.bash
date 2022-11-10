echo Наименование SASS: 
read a
a=$(echo $a | sed 's/[^0-9 a-z A-Z [:punct:]]//g')
touch ./src/sass/_$a.sass
echo -e "@import "@var"\n.$a\n    display: block" >> ./src/sass/_$a.sass
echo @import \"./_$a.sass\" >> ./src/sass/_import.sass