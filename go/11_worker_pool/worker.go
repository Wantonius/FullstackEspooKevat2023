package main

import (
	"fmt"
	"time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
	for j := range jobs {
		fmt.Println("Worker ",id," started job",j)
		time.Sleep(3*time.Second)
		fmt.Println("Worker ",id," finished job",j)
		results <- j * 2	
	}
}

func main() {
	
	var result int
	const numJobs = 10
	jobs := make(chan int, numJobs)
	results := make(chan int, numJobs)
	
	for w := 1; w <= 10 ; w++ {
		go worker(w,jobs,results)
	}
	
	for j := 1; j <= numJobs; j++ {
		jobs <- j
	}
	close(jobs)
	
	for a := 1; a <= numJobs; a++ {
		result = <- results
		fmt.Printf("Main: job result %d\n",result)
	}
}