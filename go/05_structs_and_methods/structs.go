package main

import "fmt"

type dog struct {
	name,breed string
}

type cat struct {
	name,breed string
}

//interfaces are implemented by struct by implementing each function separately

type animal interface {
	move()
	speak()
}

//The (d dog) is called a receiver type and it ties this function, function becoming a method, to type dog struct. You can normally use pointer receivers (d *dog) unless you are implementing an interface

func (d dog) move() {
	fmt.Printf("%s runs. See %s run!\n",d.name,d.name)
}

func (d dog) speak() {
	fmt.Printf("%s barks. %s is a %s\n",d.name,d.name,d.breed)
}

func (c cat) move() {
	fmt.Printf("%s sneaks!\n",c.name)
}

func (c cat) speak() {
	fmt.Printf("%s meows. %s is a %s.\n",c.name,c.name,c.breed)
}

func act(a animal) {
	a.move()
	a.speak()
}

func main() {
	
	duke:=dog{name:"Duke",breed:"sitter"}
	whiskers:=cat{name:"Whiskers",breed:"persian"}
	
	fmt.Println("Accessing directly through struct functions")
	
	duke.move()
	duke.speak()
	whiskers.move()
	whiskers.speak()
	
	fmt.Println("Accessing through interface function")
	
	act(duke)
	act(whiskers)
}