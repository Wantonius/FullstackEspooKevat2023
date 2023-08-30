package main

import "fmt"

func main() {
	var b int = 15
	var a int
	var t int = 10

	//Short cut initialization of an array. No need to fill it with values

	numbers := [6]int{1,2,3,5}
	
	for a := 0; a < 10; a++ {
		fmt.Printf("Value of a: %d\n",a)
	}
	
	for a < b {
		a++
		fmt.Printf("Value of a: %d\n",a)
	}
	
	for i,x:= range numbers {
		fmt.Printf("Value of x = %d at %d\n",x,i)
	}
	
	if t > 5 {
		fmt.Printf("%d is bigger than five\n",t) 
	} else {
		fmt.Printf("%d is smaller than five\n",t)
	}
	
	j := 2
	fmt.Print("Write ",j," as ")
	switch j {
		case 1:
			fmt.Println("one")
		case 2:
			fmt.Println("two")
		case 3:
			fmt.Println("three")
	}
	
	whatAmI := func (i interface{}) {
		switch t := i.(type) {
			case bool:	
				fmt.Println("I am a boolean")
			case int: 
				fmt.Println("I am an integer")
			default:
				fmt.Printf("I do not know your type %T\n",t)
		}
	}
	
	whatAmI(true)
	whatAmI(1)
	whatAmI("hey")
}