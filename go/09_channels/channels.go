package main

import (
	"fmt"
	"time"
)

func main() {
	
	messages := make(chan string)
	
	//Create a channel with typed value. Channels only accept that type of information
	//By default senders and receivers block until other end is ready

	go func() {
		time.Sleep(1*time.Second)
		fmt.Println("Pinger: Pinging the main")
		messages <- "ping"
	}()
	
	fmt.Println("Main: reading the channel")
	msg := <-messages
	fmt.Println(msg)
	
	//By default sender and receiver need to be different goroutines. Buffered channels do not need that.
	//Buffered sender and receiver can be different goroutines.
	
	fmt.Println("---Buffered channel---")
	
	buffered := make(chan string, 2)
	
	buffered <- "Buffered"
	buffered <- "Channel"
	
	fmt.Println(<-buffered)
	fmt.Println(<-buffered)
}