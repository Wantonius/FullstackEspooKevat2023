package main

import (
	"fmt"
	"time"
)

func worker(ch chan string, s time.Duration) {
	time.Sleep(s*time.Millisecond)
	ch <- "worker done"
}

func main() {
	
	channel := make(chan string)
	channel2 := make(chan string)
	
	go worker(channel,6500)
	go worker(channel2,3500)
	
	//Select waits for multiple channel sources and works like a switch-case. Default case is for
	//situations where none of the channels have input. It is also used for non-blocking operations.
	//We will use a named loop to break out of the endless loop.

	L:
	for {
		time.Sleep(1000*time.Millisecond)
		select {
			case v := <-channel:
				fmt.Println("Worker 1 says ",v)
				break L
			case v := <-channel2:
				fmt.Println("Worker 2 says ",v)
			default:
				fmt.Println("No input yet")
		}
		
	}
	fmt.Println("--- Closing channels and monitoring ---")
	
	jobs := make(chan int,5)
	done := make(chan bool)
	
	go func() {
		for {
			fmt.Println("Worker waiting for jobs")
			//The additional return value "more" will be false when the channel is closed.
			//This is the way to monitor channel status
			j,more := <-jobs
			if more {
				fmt.Println("Worker: Received a job",j)
			} else {
				fmt.Println("Worker: Received all jobs. Sending done and exiting.")
				done <- true
				return
			}
		}
	}()
	
	for j := 1; j <=3;j++ {
		fmt.Println("Main: sending another job")
		jobs <- j
		fmt.Println("Main: Sent job",j)
		time.Sleep(1*time.Second)
	}
	close(jobs)
	fmt.Println("Main: sent all jobs and closed channel")
	
	<-done
	
	fmt.Println("Worker done, jobs done, main exiting")
}