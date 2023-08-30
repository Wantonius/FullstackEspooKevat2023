package main

import "fmt"

func main() {
	
	//In go arrays are fixed length and they are initialized to default value unless initialized with something else
	
	var myArray [6]int
	
	fmt.Println("MyArray:",myArray)
	fmt.Println("MyArray length:",len(myArray))
	
	myArray[3] = 50
	fmt.Println("MyArray again",myArray)

	myInitializedArray := [3]int{1,2,3}
	
	fmt.Println("Initialized array:",myInitializedArray)
	
	fmt.Println("---Slices---")
	
	//This is a slice. Slices are dynamically created and can change in size. They have more functionality than ordinary arrays.
	
	var mySlice []int //Does not allocate any memory
	
	myAllocatedSlice := make([]int,10) //A slice with 10 dynamically allocated ints of zero value

	fmt.Println("mySlice:",mySlice)
	fmt.Println("mySlice length:",len(mySlice))
	
	fmt.Println("myAllocatedSlice:",myAllocatedSlice)
	fmt.Println("myAllocatedSlice length:",len(myAllocatedSlice))

	//You cannot add to unallocated size (mySlice) directly with mySlice[0]=0. This will crash. Instead we will use append.
	
	mySlice = append(mySlice,0)
	
	//When appending another slice or an array use the three-dot syntax
	
	mySlice = append(mySlice,[]int{10,100}...)
	
	fmt.Println("mySlice:",mySlice)
	fmt.Println("mySlice length:",len(mySlice))	
	
	copiedSlice := make([]int,len(mySlice))
	
	copy(copiedSlice,mySlice)
	
	fmt.Println("Copied Slice:",copiedSlice)
	
	partialSlice := mySlice[1:3]
	
	fmt.Println("Partial Slice:",partialSlice)

	fmt.Println("---Maps---");
	
	//Maps can use any key value pair. Use make to create maps
	
	intStrMap := make(map[int]string)
	strIntMap := make(map[string]int)
	
	intStrMap[1] = "One"
	intStrMap[2] = "Two"
	
	strIntMap["one"] = 1
	strIntMap["two"] = 2
	
	fmt.Println("intStrMap:",intStrMap)
	fmt.Println("strIntMap:",strIntMap)

	//Remove by key using delete
	
	delete(strIntMap,"two")
	fmt.Println("strIntMap:",strIntMap)	

	//Initializing a map with initial values
	
	initialMap := map[int]string{1:"one",2:"two"}

	//Checking if map contains a thing. You can have both value and an ok.
	
	if val,ok := initialMap[2]; ok {
		fmt.Printf("Initialized map contains %s\n",val)
	}
	
	if _,ok := initialMap[3];!ok {
		fmt.Println("Initialized map does not contain that value or key")
	}
}