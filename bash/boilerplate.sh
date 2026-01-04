#!/bin/bash 
# This is a comment

echo "Hello, World!"

name="Mehak"
echo $name

age=20
if [ $age -ge 18 ]; then
  echo "Adult"
else
  echo "Minor"
fi

for i in 1 2 3
do
  echo $i
done

greet() {
  echo "Hello $1"
}

a=10
b=5

sum=$((a + b))
echo $sum


