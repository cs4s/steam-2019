---
layout: exercises
title: Coding in Stage 3 - Coding & STEAM - Week 1
---

# Week 1: An Introduction to Scratch

## Homework Exercises

This page includes some exercises that you can complete to check your understanding of the concepts that you learned about in the Week 1 session of the Coding in Stage 3 program.
The exercises are split into sections for different **computational concepts:** *Sequences*, *Loops*, *Data* and *Conditionals*, as well as a section for *User Input*.
The answer to each of the exercises can be viewed by clicking the Answer button after each question.
If you have any questions about these exercises or need further explanations of the answers, please let us know.

## Sequences
{: .section-header}

### Exercise 1
{: .exercise-header}

Look at the Scratch code below, which is in the Scripts Area for a Cat Sprite.

~~~
move (10) steps
move (20) steps
wait (1) secs
move (10) steps
wait (1) secs
move (40) steps
~~~
{: .language-scratch}

When the stack of blocks above is clicked, how many times will the Cat pause before moving again? What is the total number of steps that the Cat will move?

#### Sequences: Exercise 1 Answer
{: .collapse-answer-header}

The cat will pause twice (as there is 2 wait blocks) and it will move 80 steps in total (this is 10 + 20 + 40 + 10 from the move blocks).

### Exercise 2
{: .exercise-header}

Now the Scratch code is changed to this:

~~~
move (100) steps
move (-100) steps
move (200) steps
move (-200) steps
~~~
{: .language-scratch}

What will happen when the stack of blocks is clicked? Will the Cat move to the right, then the left, the right and the left again? Or will the Cat appear to not move at all?

#### Sequences: Exercise 2 Answer
{: .collapse-answer-header}

The Cat will appear to not move at all. 
This is for two reasons. 
Firstly, we would have to include wait blocks to see the Cat moving around the canvas.
As there is no wait blocks, the Cat runs through all of the move blocks in one movement.
Secondly, if you add up all of the steps (100, -100, 200 and -200) you get 0.
When the Cat moves 0 steps, it doesn't move at all.

### Exercise 3
{: .exercise-header}

You ask a student to explain how the Cat moves around the canvas when it follows a stack of Scratch blocks. This is their program:

~~~
change x by (100)
wait (2) secs
change y by (100)
wait (2) secs
change x by (-100)
wait (2) secs
change y by (-100)
~~~
{: .language-scratch}

The student explains that, when the stack of blocks is clicked, the Cat will: *"Move to the right, wait for a couple of seconds, then move up a bit. It will wait again for a couple of seconds, then move to the left. It will wait again and finally move back to where it was at the start."*

Is this explanation correct?

#### Sequences: Exercise 3 Answer
{: .collapse-answer-header}

Yes, the student has explained the code correctly.

## Loops
{: .section-header}

### Exercise 1
{: .exercise-header}

Look at the blocks below.

~~~
repeat (4)
	play drum (1 v) for (0.5) beats
end	
~~~
{: .language-scratch}

How many times will the snare drum noise play?

#### Loops: Exercise 1 Answer
{: .collapse-answer-header}

As the *repeat* block will repeat 4 times, the snare drum noise will play 4 times.

### Exercise 2
{: .exercise-header}

You ask a student to explain what a Sprite will do when you click the stacks below.

~~~
repeat (5)
	move (-10) steps
	wait (1) secs
	move (-10) steps
	wait (1) secs
end
~~~
{: .language-scratch}

The student says that the Sprite will move to the right 5 times when you click on the stack of the blocks.
This is an incorrect explanation of the above blocks for two reasons, why is that and what will actually happen?

#### Loops: Exercise 2 Answer
{: .collapse-answer-header}

The student is incorrect for two reasons:

1.	The Cat will move to the left (move -10 means move 10 steps to the left)
2.	The Cat will move 10 times in total, not 5

The Cat will actually move towards the left 10 times.

### Exercise 3
{: .exercise-header}

Look at the blocks below, which are in the Scripts Area for a Sprite.

~~~
repeat (2)
	repeat (3)
		move (10) steps
		wait (1) secs
	end
end
~~~
{: .language-scratch}

How many times will the Sprite move to the right? 
How many times does the *outer loop* repeat and how many times does the *inner loop* repeat?

#### Loops: Exercise 3 Answer
{: .collapse-answer-header}

The Cat will move to the right 6 times in total. 
The *outer loop* repeats 2 times.
The *inner loop* repeats 3 times.
