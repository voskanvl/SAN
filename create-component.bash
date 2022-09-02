echo Наименование компонента: 
read a
/c/Program\ Files\ \(x86\)/GnuWin32/bin/tree.exe -d ./src/components
echo В какую папку положить компонент: 
read b
mkdir ./src/components/$b/$a
touch ./src/components/$b/$a/_$a.sass
touch ./src/components/$b/$a/$a.pug