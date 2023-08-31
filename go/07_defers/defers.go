package main

import "fmt"

//defer is a nice feature. It allows you to defer the calling of a function to the end of execution of current block. Use it with closing of files, sockets, opening mutexes etc

func willExecuteLast(greet string) {
	fmt.Printf("Goodbye %s, I was deferred to be last of the calling functions\n",greet)
}

func callsAdditionalDefer(greet string) {
	defer willExecuteLast(greet)
	fmt.Println("I will be before first goodbye")
}

func helloGreeting(greet string) {
	fmt.Printf("Hello %s, I will execute first\n",greet)
}

func panics() {
	panic("calamity ensues")
}

func main() {

	//recover must be called within a deferred function. When a function after the deferred recover panics, recover will kick in and handle the situation
	
	defer func() {
		if r := recover(); r != nil {
			fmt.Printf("It panicked but we recovered. Error:%s\n",r)
		}
	}()
	
	defer panics()
	
	defer willExecuteLast("John")
	defer callsAdditionalDefer("Johnny")
	
	fmt.Println("First we test defer")
	helloGreeting("John")
}